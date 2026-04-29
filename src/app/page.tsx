import Link from 'next/link';
import { CTAButton } from '@/components/CTAButton';
import { Footer } from '@/components/Footer';
import { FundingMilestoneChart } from '@/components/FundingMilestoneChart';
import { HeroCarousel } from '@/components/HeroCarousel';
import { SecondaryButton } from '@/components/SecondaryButton';
import { StatCard } from '@/components/StatCard';
import { HEADLINE_STATS } from '@/data/milestones';

export default function HomePage() {
  return (
    <main className="relative">
      {/* HERO */}
      <HeroCarousel className="md:min-h-[80vh]">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-red/40 bg-crimsonMid/60 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-silver/90 backdrop-blur-sm sm:px-4 sm:text-xs sm:tracking-[0.25em]">
            <span className="h-1.5 w-1.5 rounded-full bg-red" />
            Crowdfunding world record · 2024
          </div>
          <h1 className="mt-5 font-display text-[2rem] font-semibold leading-[1.05] tracking-tight text-silverBright drop-shadow-[0_2px_24px_rgba(0,0,0,0.6)] sm:mt-6 sm:text-5xl md:text-7xl lg:text-8xl">
            <span className="block">The Most Funded</span>
            <span className="block bg-gradient-to-r from-silverBright via-red to-silverBright bg-clip-text text-transparent">
              Game Ever Made
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-silver sm:mt-8 sm:text-base md:text-lg">
            Nearly <strong className="text-silverBright">$1 billion</strong>{' '}
            raised from more than{' '}
            <strong className="text-silverBright">6 million backers</strong>.
            One ambitious space sim that quietly broke every crowdfunding
            record in human history. This is the story of{' '}
            <em>Star Citizen</em>.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row">
            <CTAButton />
            <SecondaryButton href="#numbers">
              Show me the numbers
            </SecondaryButton>
          </div>
        </div>
      </HeroCarousel>

      {/* BY THE NUMBERS */}
      <section
        id="numbers"
        className="relative overflow-hidden border-t border-red/10 bg-crimsonMid/30 px-6 py-24 md:py-32"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.3em] text-red">
              By the Numbers
            </div>
            <h2 className="mt-3 font-display text-4xl text-silverBright md:text-5xl">
              A record nobody saw coming.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-silver md:text-lg">
              Star Citizen launched a Kickstarter in 2012 asking for $500,000.
              It hit that goal in under 24 hours. More than a decade later,
              the funding hasn&rsquo;t stopped — and no other crowdfunded
              project, in any category, has come close.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {HEADLINE_STATS.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-red/15 bg-crimson/40 p-6 md:p-10">
            <div className="flex flex-col items-baseline justify-between gap-2 md:flex-row">
              <h3 className="font-display text-2xl text-silverBright md:text-3xl">
                Cumulative funding, year by year
              </h3>
              <Link
                href="/the-story"
                className="text-sm text-silver hover:text-silverBright"
              >
                Read the full story →
              </Link>
            </div>
            <FundingMilestoneChart variant="compact" className="mt-8" />
          </div>
        </div>
      </section>

      {/* WHAT IS STAR CITIZEN */}
      <section className="relative px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-red">
              What is Star Citizen?
            </div>
            <h2 className="mt-3 font-display text-4xl leading-tight text-silverBright md:text-5xl">
              An online universe, built in public, one milestone at a time.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-silver md:text-lg">
            <p>
              Star Citizen is a first-person space simulation game in
              development by Cloud Imperium Games. Players fly customizable
              ships, walk around planets and stations, trade goods, mine
              asteroids, fight pirates, and form crews — all inside a single
              shared universe with no separate server lobbies.
            </p>
            <p>
              It&rsquo;s ambitious in a way few games attempt: seamless
              transitions from a planet&rsquo;s surface into orbit and out to
              other star systems, with no loading screens. Millions of
              players have bought into that vision early, funding development
              directly through ship pledges instead of waiting for a
              traditional release.
            </p>
            <p>
              That funding model is why this site exists. It&rsquo;s also why
              you may have searched &ldquo;most funded game ever&rdquo; and
              ended up here.
            </p>
          </div>
        </div>
      </section>

      {/* WHY DO PEOPLE KEEP BACKING IT */}
      <section className="relative border-y border-red/10 bg-crimson-fade px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.3em] text-red">
              Why people keep backing it
            </div>
            <h2 className="mt-3 font-display text-4xl text-silverBright md:text-5xl">
              Three reasons the money keeps coming.
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                tag: '01',
                title: 'The community',
                body: 'The Star Citizen community is one of the most engaged in gaming. Backers run org events, fly together nightly, build creator content, and treat new players with surprising patience. It feels less like a customer base and more like a frontier town.',
              },
              {
                tag: '02',
                title: 'The vision',
                body: 'Star Citizen aims to merge a space sim, an FPS, an MMO, and an economy game into a single seamless universe. People back the project not because it’s done, but because they want it to exist — and they trust they’re helping build it.',
              },
              {
                tag: '03',
                title: 'The scope',
                body: 'You can fly to a moon, land on it, get out of your ship, walk into a cave, and never see a loading screen. That kind of fidelity is rare in any game — and players reward it. Each new system, ship, or feature pulls the next wave of pledges.',
              },
            ].map((item) => (
              <div
                key={item.tag}
                className="relative rounded-2xl border border-red/15 bg-crimson/60 p-7"
              >
                <div className="font-display text-5xl text-red/80">
                  {item.tag}
                </div>
                <h3 className="mt-4 font-display text-2xl text-silverBright">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-silver">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW DO YOU GET STARTED */}
      <section className="relative px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.3em] text-red">
              How do you get started?
            </div>
            <h2 className="mt-3 font-display text-4xl text-silverBright md:text-5xl">
              Three doors in. One of them is free.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-silver/10 bg-crimsonMid/30 p-7">
              <div className="text-xs uppercase tracking-[0.2em] text-silver/70">
                Free
              </div>
              <h3 className="mt-3 font-display text-2xl text-silverBright">
                Free Fly Events
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-silver">
                Several times a year, Star Citizen runs Free Fly events where
                anyone can download and play a rotating set of ships at no
                cost. No purchase, no commitment — the easiest way to see
                what the fuss is about.
              </p>
            </div>
            <div className="rounded-2xl border border-silver/10 bg-crimsonMid/30 p-7">
              <div className="text-xs uppercase tracking-[0.2em] text-silver/70">
                Recommended
              </div>
              <h3 className="mt-3 font-display text-2xl text-silverBright">
                Starter Pack
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-silver">
                A starter pack gets you a permanent account, a starter ship,
                and access to the persistent universe. The two most common
                options are the Aurora MR and the Mustang Alpha, both around
                a one-time $45.
              </p>
            </div>
            <div className="rounded-2xl border border-red/30 bg-red/5 p-7">
              <div className="text-xs uppercase tracking-[0.2em] text-red">
                Bonus
              </div>
              <h3 className="mt-3 font-display text-2xl text-silverBright">
                Referral Code
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-silver">
                Sign up using a referral code and you get{' '}
                <strong className="text-silverBright">50,000 UEC</strong>{' '}
                (in-game credits) free, plus entry into the official referral
                rewards program. Use the button below to apply our code
                automatically.
              </p>
            </div>
          </div>

          <div className="mt-14 flex flex-col items-center justify-center gap-4 md:flex-row">
            <CTAButton />
            <SecondaryButton />
          </div>
        </div>
      </section>

      {/* LEARN THE BASICS */}
      <section className="relative border-t border-red/10 bg-gradient-to-b from-crimson to-crimsonMid/60 px-6 py-24 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-red">
            New to all of this?
          </div>
          <h2 className="mt-3 font-display text-4xl text-silverBright md:text-5xl">
            Learn the basics in plain English.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-silver md:text-lg">
            o7citizen.com is the friendly hub of the network — built for
            anyone who&rsquo;s curious about Star Citizen but tired of dense
            wiki pages, jargon, and forum gatekeeping.
          </p>
          <div className="mt-8">
            <SecondaryButton>Visit o7citizen.com →</SecondaryButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
