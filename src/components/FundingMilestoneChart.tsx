import { MILESTONES, type Milestone } from '@/data/milestones';

type Variant = 'compact' | 'full';

type FundingMilestoneChartProps = {
  variant?: Variant;
  className?: string;
};

const PADDING = { top: 28, right: 24, bottom: 44, left: 56 };
const VIEWBOX_W = 960;
const VIEWBOX_H_COMPACT = 320;
const VIEWBOX_H_FULL = 460;

function buildScales(height: number) {
  const minYear = MILESTONES[0].year;
  const maxYear = MILESTONES[MILESTONES.length - 1].year;
  // Anchor the y-axis ceiling to $1B (or higher once we cross it) so the
  // chart visually reinforces the "approaching a billion" framing.
  const maxAmount = Math.max(
    1000,
    Math.ceil(Math.max(...MILESTONES.map((m) => m.amount)) / 200) * 200,
  );

  const innerW = VIEWBOX_W - PADDING.left - PADDING.right;
  const innerH = height - PADDING.top - PADDING.bottom;

  const x = (year: number) =>
    PADDING.left + ((year - minYear) / (maxYear - minYear)) * innerW;
  const y = (amount: number) =>
    PADDING.top + innerH - (amount / maxAmount) * innerH;

  return { x, y, minYear, maxYear, maxAmount, innerW, innerH };
}

function pathFor(scales: ReturnType<typeof buildScales>, points: Milestone[]) {
  return points
    .map((m, i) => {
      const cmd = i === 0 ? 'M' : 'L';
      return `${cmd}${scales.x(m.year).toFixed(2)},${scales.y(m.amount).toFixed(2)}`;
    })
    .join(' ');
}

function areaPath(scales: ReturnType<typeof buildScales>, height: number) {
  const top = pathFor(scales, MILESTONES);
  const lastX = scales.x(MILESTONES[MILESTONES.length - 1].year).toFixed(2);
  const firstX = scales.x(MILESTONES[0].year).toFixed(2);
  const baseY = (height - PADDING.bottom).toFixed(2);
  return `${top} L${lastX},${baseY} L${firstX},${baseY} Z`;
}

export function FundingMilestoneChart({
  variant = 'compact',
  className = '',
}: FundingMilestoneChartProps) {
  const height = variant === 'full' ? VIEWBOX_H_FULL : VIEWBOX_H_COMPACT;
  const scales = buildScales(height);

  // Y-axis tick lines: 0, 200M, 400M, 600M, 800M (or maxAmount rounded up)
  const yTicks: number[] = [];
  const step = scales.maxAmount / 4;
  for (let i = 0; i <= 4; i++) yTicks.push(Math.round(step * i));

  const labeledMilestones = variant === 'full'
    ? MILESTONES
    : MILESTONES.filter((m) =>
        [2012, 2015, 2020, 2025].includes(m.year),
      );

  return (
    <figure className={`w-full ${className}`}>
      <svg
        viewBox={`0 0 ${VIEWBOX_W} ${height}`}
        role="img"
        aria-label={`Cumulative crowdfunding raised by Star Citizen, ${MILESTONES[0].year} to ${MILESTONES[MILESTONES.length - 1].year}`}
        className="w-full text-silver"
      >
        <defs>
          <linearGradient id="fundingFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#cc2200" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#cc2200" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="fundingLine" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#7a8088" />
            <stop offset="40%" stopColor="#cc2200" />
            <stop offset="100%" stopColor="#e8eef4" />
          </linearGradient>
        </defs>

        {/* Y gridlines + labels */}
        {yTicks.map((tick) => {
          const yPos = scales.y(tick);
          return (
            <g key={tick}>
              <line
                x1={PADDING.left}
                x2={VIEWBOX_W - PADDING.right}
                y1={yPos}
                y2={yPos}
                stroke="currentColor"
                strokeOpacity="0.08"
                strokeDasharray="2 4"
              />
              <text
                x={PADDING.left - 10}
                y={yPos + 4}
                textAnchor="end"
                fontSize="11"
                fill="currentColor"
                fillOpacity="0.55"
                className="font-sans"
              >
                ${tick}M
              </text>
            </g>
          );
        })}

        {/* X axis tick labels */}
        {MILESTONES.map((m) => (
          <g key={`xt-${m.year}`}>
            {variant === 'full' && (
              <line
                x1={scales.x(m.year)}
                x2={scales.x(m.year)}
                y1={height - PADDING.bottom}
                y2={height - PADDING.bottom + 4}
                stroke="currentColor"
                strokeOpacity="0.3"
              />
            )}
            <text
              x={scales.x(m.year)}
              y={height - PADDING.bottom + 18}
              textAnchor="middle"
              fontSize="11"
              fill="currentColor"
              fillOpacity={variant === 'full' ? 0.6 : (
                [2012, 2016, 2020, 2025].includes(m.year) ? 0.7 : 0
              )}
              className="font-sans"
            >
              {m.year}
            </text>
          </g>
        ))}

        {/* Area fill */}
        <path d={areaPath(scales, height)} fill="url(#fundingFill)" />

        {/* Line */}
        <path
          d={pathFor(scales, MILESTONES)}
          fill="none"
          stroke="url(#fundingLine)"
          strokeWidth={variant === 'full' ? 2.5 : 2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Milestone markers */}
        {MILESTONES.map((m) => {
          const isLabeled = labeledMilestones.includes(m);
          return (
            <g key={`m-${m.year}`}>
              <circle
                cx={scales.x(m.year)}
                cy={scales.y(m.amount)}
                r={isLabeled ? 5 : 3}
                fill="#cc2200"
                stroke="#1a0a0a"
                strokeWidth="2"
              >
                <title>{`${m.year} — $${m.amount}M — ${m.label}`}</title>
              </circle>
              {isLabeled && variant === 'full' && (
                <g>
                  <line
                    x1={scales.x(m.year)}
                    x2={scales.x(m.year)}
                    y1={scales.y(m.amount) - 8}
                    y2={scales.y(m.amount) - 28}
                    stroke="currentColor"
                    strokeOpacity="0.4"
                  />
                  <text
                    x={scales.x(m.year)}
                    y={scales.y(m.amount) - 34}
                    textAnchor="middle"
                    fontSize="11"
                    fill="#e8eef4"
                    className="font-sans"
                  >
                    {m.label}
                  </text>
                  <text
                    x={scales.x(m.year)}
                    y={scales.y(m.amount) - 48}
                    textAnchor="middle"
                    fontSize="10"
                    fill="currentColor"
                    fillOpacity="0.6"
                    className="font-sans"
                  >
                    ${m.amount}M
                  </text>
                </g>
              )}
            </g>
          );
        })}
      </svg>

      {variant === 'full' && (
        <figcaption className="mt-4 text-xs text-muted">
          Cumulative crowdfunding raised. Outside investment from Calder
          Partners (2018) is not included in these totals. Current totals
          sourced from{' '}
          <a
            href="https://ccugame.app/statistics/funding-dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-silver"
          >
            ccugame.app
          </a>
          . Figures rounded for clarity.
        </figcaption>
      )}
    </figure>
  );
}
