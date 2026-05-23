import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-red/10 bg-crimson">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <div className="font-display text-2xl text-silverBright">
              highestfundedgame.com
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              The crowdfunding record story behind Star Citizen — for anyone
              who searched &ldquo;most funded game ever.&rdquo;
            </p>
            <ul className="mt-4 space-y-2 text-sm text-silver">
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
            <p className="mt-3 text-xs leading-relaxed text-muted">
              Affiliate disclosure: If you create a Star Citizen account using referral code STAR-GCQJ-N6NC, the site owner may receive an in-game bonus. Your 50,000 aUEC new-player bonus is not affected.
            </p>
            <p className="mt-3 text-xs text-muted">
              Built by Doc_Flanigan · o7
            </p>
            <div className="mt-4">
              <Image src="/images/made-by-community.png" alt="Made by the Star Citizen Community" width={120} height={40} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
