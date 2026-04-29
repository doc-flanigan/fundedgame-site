import Link from 'next/link';

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-red/10 bg-crimson">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="font-display text-2xl text-silverBright">
              highestfundedgame.com
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              The crowdfunding record story behind Star Citizen — for anyone
              who searched &ldquo;most funded game ever.&rdquo;
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-silver/70">
              Network
            </div>
            <ul className="mt-4 space-y-2 text-sm text-silver">
              <li>
                <Link
                  href="https://o7citizen.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-silverBright"
                >
                  o7citizen.com — Hub
                </Link>
              </li>
              <li>
                <Link
                  href="https://freeflyevent.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-silverBright"
                >
                  freeflyevent.com
                </Link>
              </li>
              <li>
                <Link
                  href="https://screferralrewards.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-silverBright"
                >
                  screferralrewards.com
                </Link>
              </li>
              <li>
                <Link
                  href="/the-story"
                  className="hover:text-silverBright"
                >
                  The full story
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-silver/70">
              Disclaimer
            </div>
            <p className="mt-4 text-xs leading-relaxed text-muted">
              Unofficial fan site. Not affiliated with, endorsed by, or
              sponsored by Cloud Imperium Games or the Star Citizen project.
              All trademarks belong to their respective owners. Funding
              figures sourced from publicly reported RSI numbers and rounded
              for clarity.
            </p>
            <p className="mt-3 text-xs text-muted">
              Built by Doc_Flanigan · o7
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
