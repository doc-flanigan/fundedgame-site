# CLAUDE.md — highestfundedgame.com / mostfundedgame.com

## Project Overview
Informational funnel site targeting people searching "most funded game ever"
or "highest crowdfunded game." Star Citizen owns this search niche — it holds
the world record. This site tells that story compellingly, sparks curiosity
about what the game actually is, and funnels cold traffic to dayonecitizen.com.
This is a top-of-funnel awareness play, not a high-direct-conversion site.

## Quick Reference
```
Referral code:  STAR-GCQJ-N6NC
Enlist URL:     https://www.robertsspaceindustries.com/enlist?referral=STAR-GCQJ-N6NC
Hub:            https://dayonecitizen.com
Conventions:    E:\Claude Code\sc-portfolio\SHARED_CONVENTIONS.md
```

## Agentic Build Instructions
Incremental agents. Confirm each before proceeding.

### Agent 1 — Scaffold
- Next.js 14, TypeScript, Tailwind CSS
- Color palette:
    crimson: '#1a0a0a'
    crimsonMid: '#261010'
    silver: '#c0c8d0'
    silverBright: '#e8eef4'
    red: '#cc2200'
    muted: '#7a8088'
- 12 hero placeholders
- Confirm dev server

### Agent 2 — Components
- HeroCarousel.tsx (12 slides)
- FundingMilestoneChart.tsx: visual timeline of SC funding milestones
  (use SVG/CSS chart, no external chart library required)
- StatCard.tsx: large number + label (e.g., "$700M+ Raised", "3M+ Backers")
- CTAButton.tsx: "Discover Star Citizen — Get 50,000 UEC Free"
- SecondaryButton.tsx → dayonecitizen.com
- Footer.tsx

### Agent 3 — Homepage (/)
  - SEO: title="The Most Funded Game in History — Star Citizen's Record-Breaking
    Crowdfunding Story"
    description="Star Citizen is the most crowdfunded project in history with
    over $700 million raised from more than 3 million backers. Here's the story."
  - H1: "The Most Funded Game Ever Made"
  - StatCard row: total raised, backer count, years in development
  - HeroCarousel
  - Sections:
    * "By the Numbers" — StatCard grid, FundingMilestoneChart
    * "What Is Star Citizen?" — plain English, 3 paragraphs
    * "Why Do People Keep Backing It?" — community, vision, scope
    * "How Do You Get Started?" — free fly, starter pack, referral code
    * CTAButton + SecondaryButton
    * "Learn the Basics" → dayonecitizen.com
  - Footer
  Confirm renders.

### Agent 4 — Story Page (/the-story)
  - Full crowdfunding origin story from 2012 Kickstarter to present
  - FundingMilestoneChart full version
  - "Want to be part of it?" CTAButton

### Agent 5 — SEO & Build
  - Both domains in Vercel config
  - Sitemap, robots, OG meta
  - npm run build passes

## Color Palette
  --crimson: #1a0a0a
  --crimson-mid: #261010
  --silver: #c0c8d0
  --silver-bright: #e8eef4
  --red: #cc2200
  --muted: #7a8088

## Network Conventions
See `E:\Claude Code\sc-portfolio\SHARED_CONVENTIONS.md` for footer spec,
tone rules, commit convention, tech stack, and agentic build pattern.

## Click Tracking

Added 2026-05-17. Every referral CTA click fires a background POST to `/api/log` which writes a row to the shared Google Sheet and posts an embed to the #referral-clicks Discord channel.

**Env vars required** (Vercel project settings + `.env.local`):
- `CLICK_TRACKER_SHEET_URL` — Google Apps Script web app deploy URL
- `DISCORD_CLICK_WEBHOOK_URL` — Discord channel webhook URL

**Key files:**
- `src/app/api/log/route.ts` — server-side handler (parallel Sheet + Discord calls)
- `src/components/CTAButton.tsx` — `handleClick` fires the fetch on CTA click

> **Note:** Endpoint was renamed from `/api/track-click` → `/api/log` because adblocker filter lists (EasyPrivacy, uBlock Origin) blocked the original URL pattern client-side.

### TODO: Verify end-to-end on this site
- [ ] Click CTA **with** adblocker enabled → Sheet row appears within 5s
- [ ] Click CTA **with** adblocker enabled → Discord embed appears in #referral-clicks
- [ ] Click CTA **without** adblocker → same as above

---

## SEO

**Network role:** Story/awareness top-of-funnel satellite
**Search engine:** Both

**Primary keywords:**
- "highest funded game ever"
- "most crowdfunded game"
- "most funded game"
- "star citizen crowdfunding record"

**Cross-links this site must send (body copy only):**
- → dayonecitizen.com: "Start playing — Day One guide for new players" CTA
- → freeflyevent.com: "Try it free during a Free Fly event first"

**Do not:**
- Place cross-portfolio links in footers or link lists — editorial/body copy only

**Full strategy:** `E:\Claude Code\sc-portfolio\docs\seo\README.md`

## Claims ledger (network-wide)

Fact-checked claims are tracked in the portfolio claims ledger: `E:\Claude Code\sc-portfolio\docs\claims\` — one md file per claim (canonical text, status, official sources, lastVerified, usage map). Before adding or rewording a factual claim on this site, grep the ledger; a `verified` entry is network canon. Any edit that adds, changes, or removes a factual claim must update the matching claim file's `usage` list (or create the file — see the ledger README.md).
