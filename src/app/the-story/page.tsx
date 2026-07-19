import type { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd';
import { CTAButton } from '@/components/CTAButton';
import { Footer } from '@/components/Footer';
import { FundingMilestoneChart } from '@/components/FundingMilestoneChart';
import { PageSources } from '@/components/PageSources';
import { SecondaryButton } from '@/components/SecondaryButton';
import { MILESTONES } from '@/data/milestones';

const FAQS = [
  {
    q: "How did Star Citizen's crowdfunding start?",
    a: 'In October 2012, Chris Roberts announced Star Citizen and its single-player campaign Squadron 42 at GDC Online in Austin, asking for $500,000 across a Kickstarter campaign and the new RSI site. Backer demand crashed the site within days.',
  },
  {
    q: 'How long has Star Citizen been in development?',
    a: 'The game has been in open development since October 2012 — fourteen years of continuous crowdfunding, with public alpha testing beginning in 2014.',
  },
  {
    q: 'How many backers does Star Citizen have?',
    a: 'More than 6.5 million backer accounts, per the official RSI funding tracker — the same tracker that crossed $1 billion raised on May 24, 2026.',
  },
];

export const metadata: Metadata = {
  title: 'How Star Citizen Raised $1 Billion',
  description:
    'Star Citizen asked for $500,000 in 2012. On May 24, 2026, it crossed $1 billion raised from 6.5 million backers. The complete year-by-year crowdfunding story.',
  alternates: { canonical: '/the-story' },
  openGraph: {
    title: 'How Star Citizen Raised $1 Billion — The Full Crowdfunding Story',
    description:
      'From a $500K Kickstarter to $1 billion raised. The complete year-by-year story of the most crowdfunded project in history.',
    images: ['/images/hero/hero-04.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Star Citizen Raised $1 Billion — The Full Crowdfunding Story',
    description:
      'From a $500K Kickstarter to $1 billion raised. The complete year-by-year story of the most crowdfunded project in history.',
  },
};

export default function StoryPage() {
  return (
    <main className="relative">
      <BreadcrumbsJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'The Story', url: '/the-story' },
        ]}
      />
      {/* HEADER STRIP */}
      <header className="relative overflow-hidden border-b border-red/10 bg-crimson-radial px-6 pb-20 pt-28 md:pt-36">
        <div className="absolute inset-0 -z-10 opacity-30">
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(204,34,0,0.25),transparent_60%)]"
          />
        </div>
        <div className="mx-auto max-w-4xl">
          <Link
            href="/"
            className="text-xs uppercase tracking-[0.25em] text-silver/70 hover:text-silverBright"
          >
            ← Back to home
          </Link>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-red/40 bg-crimsonMid/60 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-silver/90">
            <span className="h-1.5 w-1.5 rounded-full bg-red" />
            The full story · 2012 → today
          </div>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight text-silverBright md:text-7xl">
            How a $500,000 Kickstarter became
            <span className="block bg-gradient-to-r from-silverBright via-red to-silverBright bg-clip-text text-transparent">
              the largest crowdfunding story ever told.
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-silver md:text-lg">
            In October 2012, a former game designer named Chris Roberts asked
            the internet for half a million dollars. Fourteen years later,
            more than 6.5 million people have contributed over one billion
            dollars to the project he was pitching — outpacing every other
            crowdfunded campaign on record by a margin that almost looks like
            a typo.
          </p>
        </div>
      </header>

      {/* CHART */}
      <section className="relative px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-red/15 bg-crimsonMid/30 p-6 md:p-10">
            <div className="text-xs uppercase tracking-[0.3em] text-red">
              The arc
            </div>
            <h2 className="mt-2 font-display text-3xl text-silverBright md:text-4xl">
              14 years of cumulative funding
            </h2>
            <FundingMilestoneChart variant="full" className="mt-8" />
          </div>
        </div>
      </section>

      {/* NARRATIVE — 2012 Kickstarter */}
      <Chapter
        eyebrow="2012"
        title="The Kickstarter that broke the rules"
      >
        <p>
          On October 18, 2012, Chris Roberts launched a Kickstarter for{' '}
          <em>Star Citizen</em>, a successor in spirit to his 1990s{' '}
          <em>Wing Commander</em> series. He asked for $500,000 in 30 days.
          Roberts also ran a parallel pledge campaign on his own website,
          robertsspaceindustries.com, designed to capture pledges that
          Kickstarter alone couldn&rsquo;t.
        </p>
        <p>
          The Kickstarter hit its $500,000 goal in less than a day. By the
          time the campaign closed in November, it had pulled in $2.1 million
          on Kickstarter and another $4.2 million directly through RSI — a
          combined $6.2 million. At the time, that was already the largest
          crowdfunded video game in history.
        </p>
        <p>
          What was unusual wasn&rsquo;t just the size of the raise. It was
          that the funding didn&rsquo;t stop when the campaign ended. RSI
          kept the pledge store open, kept selling new ship concepts, and
          kept letting backers buy in. The project was funded directly,
          continuously, and at scale, by the people who wanted it to exist.
        </p>
      </Chapter>

      {/* NARRATIVE — Records start falling */}
      <Chapter
        eyebrow="2013 — 2015"
        title="Each record gets broken by the same project."
        accent
      >
        <p>
          Within a year, Star Citizen had raised $35 million, eclipsing every
          previously funded crowdfunding campaign — for any kind of project,
          not just games. Within three years, it crossed $100 million,
          another first.
        </p>
        <p>
          Each new ship concept introduced on the pledge store added another
          spike of funding. Backers who had pledged a starter ship in 2013
          would log back in two years later to find dozens of new ships
          available, each with concept art, lore, and intended roles inside
          the eventual universe. Some of those ships hadn&rsquo;t flown yet.
          Many still don&rsquo;t. The pledges came anyway.
        </p>
        <p>
          By 2015, the question stopped being &ldquo;can this campaign keep
          growing?&rdquo; and became &ldquo;is there a ceiling at all?&rdquo;
        </p>
      </Chapter>

      {/* NARRATIVE — Persistent universe */}
      <Chapter
        eyebrow="2016 — 2019"
        title="From pitch deck to playable universe."
      >
        <p>
          The mid-2010s saw the project transition from concept videos to
          actual playable software. The Persistent Universe alpha — initially
          a single small star system called Stanton — went live to backers
          and gradually expanded with each major patch.
        </p>
        <p>
          In 2018, RSI took $46 million in private investment from a UK firm
          called Calder Partners. That money is separate from the
          crowdfunding totals you see on the chart above. It&rsquo;s notable
          mostly because it&rsquo;s the first significant outside capital the
          studio took, after years of insisting the project was funded
          entirely by backers.
        </p>
        <p>
          By the end of 2019, cumulative crowdfunding had crossed $250
          million — a quarter of a billion dollars from a fanbase that, in
          many cases, was paying to access an alpha that crashed regularly
          and lacked most of the promised features.
        </p>
      </Chapter>

      {/* NARRATIVE — Pandemic surge */}
      <Chapter
        eyebrow="2020 — 2022"
        title="A pandemic, a half-billion, and a community that wouldn’t leave."
        accent
      >
        <p>
          The pandemic was, in retrospect, a good year for ambitious online
          games with deep social communities. Star Citizen&rsquo;s funding
          jumped from roughly $250M to over $400M between early 2020 and the
          end of 2021. Backers stuck inside their homes leaned into
          virtualized space exploration the way previous generations had
          leaned into MMOs.
        </p>
        <p>
          By 2022, the cumulative total crossed $500 million. It had taken
          ten years to get there, but each of those years individually had
          set a fresh personal record for the project.
        </p>
      </Chapter>

      {/* NARRATIVE — One Billion */}
      <Chapter
        eyebrow="2023 — 2026"
        title="One billion dollars."
      >
        <p>
          In 2023, RSI announced the Pyro star system, the project&rsquo;s
          first major addition outside Stanton. The reveal kicked off another
          wave of pledges. By 2024, Star Citizen had crossed $700 million in
          total crowdfunding. By early 2026, that number stood past $967
          million — and the community knew what was coming.
        </p>
        <p>
          On May 24, 2026, it happened. The Anvil Odin — the largest ship
          ever conceived for Star Citizen, and the last concept ship CIG ever
          announced — sold enough units to push the cumulative total past
          $1,000,000,000. No other crowdfunded project in any category, game
          or otherwise, has reached that number. Star Citizen isn&rsquo;t
          just the most funded game ever made; it&rsquo;s the most funded
          crowdfunded project of any kind, full stop, and now by a margin
          that crosses a threshold most people assumed no crowdfunding
          campaign would ever reach.
        </p>
        <p>
          The game is still in development. The promise — a single, seamless,
          shared universe spanning multiple star systems — is still being
          built one patch at a time. Every milestone year on the chart above
          represents not just dollars raised, but a fanbase that decided,
          again, that the project was worth funding for one more year.
        </p>
      </Chapter>

      {/* MILESTONES TABLE */}
      <section className="relative border-t border-red/10 bg-crimsonMid/30 px-6 py-24 md:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="text-xs uppercase tracking-[0.3em] text-red">
            Year-by-year
          </div>
          <h2 className="mt-2 font-display text-4xl text-silverBright md:text-5xl">
            The milestones at a glance.
          </h2>
          <ol className="mt-12 space-y-3">
            {MILESTONES.map((m) => (
              <li
                key={m.year}
                className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 rounded-xl border border-red/10 bg-crimson/40 p-5 md:grid-cols-[100px_1fr_auto]"
              >
                <div className="font-display text-2xl text-silverBright">
                  {m.year}
                </div>
                <div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-silverBright">
                    {m.label}
                  </div>
                  {m.note && (
                    <div className="mt-1 text-sm text-silver">{m.note}</div>
                  )}
                </div>
                <div className="col-start-2 text-sm text-red md:col-start-3 md:text-right">
                  ${m.amount}M cumulative
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-crimson-fade px-6 py-24 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-red">
            Want to be part of it?
          </div>
          <h2 className="mt-3 font-display text-4xl text-silverBright md:text-5xl">
            Step into the universe everyone’s funding.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-silver md:text-lg">
            Sign up with our referral code and you&rsquo;ll get 50,000 UEC of
            in-game currency free. Try the next Free Fly. Or pick up a
            starter pack and join the persistent universe today.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row">
            <CTAButton trackingLabel="story-page-cta" />
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
            The story, in three questions.
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

      <PageSources route="/the-story" />

      <Footer />
    </main>
  );
}

function Chapter({
  eyebrow,
  title,
  children,
  accent = false,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <section
      className={`relative px-6 py-20 md:py-24 ${
        accent ? 'bg-crimsonMid/30' : ''
      } border-t border-red/5`}
    >
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[220px_1fr]">
        <div className="md:sticky md:top-24 md:self-start">
          <div className="font-display text-5xl text-red/70 md:text-6xl">
            {eyebrow}
          </div>
        </div>
        <div>
          <h2 className="font-display text-3xl leading-tight text-silverBright md:text-4xl">
            {title}
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-silver md:text-lg">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
