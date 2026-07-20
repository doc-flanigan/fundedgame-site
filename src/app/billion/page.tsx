import type { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd';
import { BillionCounter } from '@/components/BillionCounter';
import { CTAButton } from '@/components/CTAButton';
import { Footer } from '@/components/Footer';
import { FundingMilestoneChart } from '@/components/FundingMilestoneChart';
import { PageSources } from '@/components/PageSources';
import { SecondaryButton } from '@/components/SecondaryButton';
import { StatCard } from '@/components/StatCard';

export const metadata: Metadata = {
  title: 'Star Citizen Hits $1 Billion Crowdfunded',
  description:
    'On May 24, 2026, Star Citizen crossed one billion dollars raised from 6.5 million backers. The Anvil Odin — the largest ship in the game — pushed it over the line.',
  alternates: { canonical: '/billion' },
  openGraph: {
    title: 'Star Citizen Just Hit $1 Billion — The Most Crowdfunded Project in History',
    description:
      'On May 24, 2026, Star Citizen crossed one billion dollars raised. The Anvil Odin — the largest ship in the game — pushed it over the line.',
    images: ['/images/hero/hero-01.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Star Citizen Just Hit $1 Billion',
    description:
      "The most crowdfunded project in history just crossed a new threshold. Here's the story.",
  },
};

const LIVE_TOTAL = 1_000_012_999;
const LIVE_BACKERS = 6_543_109;

const FAQS = [
  {
    q: 'When did Star Citizen hit $1 billion?',
    a: 'May 24, 2026. The official RSI funding tracker crossed one billion dollars raised, contributed by more than 6.5 million backer accounts over fourteen years of crowdfunding.',
  },
  {
    q: 'What pushed Star Citizen over $1 billion?',
    a: 'The concept sale of the Anvil Odin — the largest ship in the game and the last concept ship CIG announced — was running as the tracker crossed the line.',
  },
  {
    q: 'Was Star Citizen the first crowdfunded project to reach $1 billion?',
    a: 'Yes — it is the first crowdfunded project of any kind to reach the billion-dollar milestone. No other crowdfunded campaign comes close to its total.',
  },
];

const COMPARISON_STATS = [
  {
    value: '$1B+',
    label: 'Star Citizen raised',
    sub: `From ${LIVE_BACKERS.toLocaleString('en-US')} individual backers`,
  },
  {
    value: '~$10M',
    label: 'Next-largest crowdfunded game',
    sub: 'Star Citizen raised roughly 100× more than the next gaming campaign',
  },
  {
    value: '$100–200M',
    label: 'Typical AAA game budget',
    sub: 'Star Citizen raised 5–10× a major studio budget through crowdfunding alone',
  },
];

export default function BillionPage() {
  return (
    <main className="relative">
      <BreadcrumbsJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: '$1 Billion Milestone', url: '/billion' },
        ]}
      />
      {/* HERO — THE NUMBER */}
      <section className="relative overflow-hidden border-b border-red/10 bg-crimson px-6 pb-28 pt-24 text-center md:pt-36">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(204,34,0,0.18),transparent_65%)]"
        />
        <div className="relative mx-auto max-w-5xl">
          <Link
            href="/"
            className="text-xs uppercase tracking-[0.25em] text-silver/70 hover:text-silverBright"
          >
            ← The full story
          </Link>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-red/40 bg-red/10 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-red">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red" />
            May 24, 2026
          </div>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-silverBright md:text-6xl">
            Star Citizen crossed
            <br />
            one billion dollars.
          </h1>
          <div className="mt-8 font-display text-[2.25rem] font-semibold leading-none tracking-tight text-silverBright drop-shadow-[0_2px_40px_rgba(204,34,0,0.4)] sm:text-[4rem] md:text-[6rem] lg:text-[8rem]">
            <BillionCounter target={LIVE_TOTAL} duration={2200} />
          </div>
          <p className="mt-6 text-base text-silver md:text-lg">
            Raised by{' '}
            <strong className="text-silverBright">
              {LIVE_BACKERS.toLocaleString('en-US')} backers
            </strong>{' '}
            — the first crowdfunded project of any kind to reach this
            milestone.
          </p>
        </div>
      </section>

      {/* THE SHIP THAT CROSSED THE LINE */}
      <section className="relative border-b border-red/10 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="order-2 md:order-1">
              <div className="text-xs uppercase tracking-[0.3em] text-red">
                The ship that crossed the line
              </div>
              <h2 className="mt-3 font-display text-4xl leading-tight text-silverBright md:text-5xl">
                Anvil Odin.
              </h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-silver md:text-lg">
                <p>
                  The Anvil Odin is the largest ship ever conceived for Star
                  Citizen — a capital-class vessel that dwarfs everything
                  previously in the game. It is also the last concept ship
                  Cloud Imperium will ever announce. With the Odin, CIG closed
                  the concept ship era that began with the original Kickstarter
                  campaign fourteen years ago.
                </p>
                <p>
                  The sale of the Anvil Odin in May 2026 generated enough
                  pledges to push the cumulative funding total past
                  $1,000,000,000. The largest ship in the game crossed the
                  largest milestone in crowdfunding history. It is an unlikely
                  kind of poetry.
                </p>
                <p>
                  For the backers who have been funding this project since
                  2012, the moment lands differently than a round number. It
                  is confirmation that what they were paying for — a seamless,
                  shared, living universe — was worth building. The funding
                  did not stop. It never really did.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <figure className="overflow-hidden rounded-2xl border border-red/15 bg-crimsonMid/40">
                <img
                  src="/images/hero/hero-06.jpg"
                  alt="A starship and ground rover on a misty frontier moon in Star Citizen — illustrative art, not the Anvil Odin"
                  className="h-80 w-full object-cover opacity-80 md:h-96"
                />
                <figcaption className="border-t border-red/15 px-4 py-3 text-xs text-muted">
                  Illustrative Star Citizen ship art — not the Anvil Odin.
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* IN CONTEXT — COMPARISON STATS */}
      <section className="relative border-b border-red/10 bg-crimsonMid/30 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.3em] text-red">
              In context
            </div>
            <h2 className="mt-3 font-display text-4xl text-silverBright md:text-5xl">
              What $1 billion actually means.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-silver md:text-lg">
              Crowdfunding a billion dollars has never been done. Here is the
              scale of it.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {COMPARISON_STATS.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* THE ARC — FUNDING CHART */}
      <section className="relative px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-red/15 bg-crimsonMid/30 p-6 md:p-10">
            <div className="flex flex-col items-baseline justify-between gap-2 md:flex-row">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-red">
                  The arc
                </div>
                <h2 className="mt-2 font-display text-3xl text-silverBright md:text-4xl">
                  14 years to $1 billion.
                </h2>
              </div>
              <Link
                href="/the-story"
                className="text-sm text-silver hover:text-silverBright"
              >
                Read the full story →
              </Link>
            </div>
            <FundingMilestoneChart variant="full" className="mt-8" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative border-t border-red/10 bg-crimson-fade px-6 py-24 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-red">
            Want to be part of it?
          </div>
          <h2 className="mt-3 font-display text-4xl text-silverBright md:text-5xl">
            The universe they built with it is still running.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-silver md:text-lg">
            Star Citizen is still in development — and it&rsquo;s playable
            right now. Sign up with our referral code and you&rsquo;ll get
            50,000 UEC of in-game currency free. Try a Free Fly event, or
            pick up a starter pack and join the persistent universe today.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row">
            <CTAButton trackingLabel="billion-page-cta" />
            <SecondaryButton />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative border-t border-red/10 px-6 py-24 md:py-28">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: FAQS.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
              })),
            }),
          }}
        />
        <div className="mx-auto max-w-3xl">
          <div className="text-xs uppercase tracking-[0.3em] text-red">
            Quick answers
          </div>
          <h2 className="mt-3 font-display text-4xl text-silverBright md:text-5xl">
            The milestone, in three questions.
          </h2>
          <div className="mt-10 space-y-6">
            {FAQS.map((f) => (
              <div
                key={f.q}
                className="rounded-2xl border border-red/15 bg-crimsonMid/30 p-6"
              >
                <h3 className="font-display text-lg text-silverBright">{f.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-silver">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageSources route="/billion" />

      <Footer />
    </main>
  );
}
