type StatCardProps = {
  value: string;
  label: string;
  sub?: string;
};

export function StatCard({ value, label, sub }: StatCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-red/20 bg-crimsonMid/40 p-6 backdrop-blur-sm transition-colors hover:border-red/50 md:p-8">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-red/10 blur-3xl transition-opacity group-hover:opacity-80"
      />
      <div className="relative">
        <div className="font-display text-5xl font-semibold tracking-tight text-silverBright md:text-6xl">
          {value}
        </div>
        <div className="mt-3 text-sm uppercase tracking-[0.2em] text-silver/80">
          {label}
        </div>
        {sub && (
          <div className="mt-3 text-sm leading-relaxed text-muted">{sub}</div>
        )}
      </div>
    </div>
  );
}
