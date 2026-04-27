# CLAUDE.md — highestfundedgame.com / mostfundedgame.com

## Project Overview
Informational funnel site targeting people searching "most funded game ever"
or "highest crowdfunded game." Star Citizen owns this search niche — it holds
the world record. This site tells that story compellingly, sparks curiosity
about what the game actually is, and funnels cold traffic to o7citizen.com.
This is a top-of-funnel awareness play, not a high-direct-conversion site.

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
- SecondaryButton.tsx → o7citizen.com
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
    * "Learn the Basics" → o7citizen.com
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

## Referral URL: https://www.robertsspaceindustries.com/enlist?referral=STAR-GCQJ-N6NC
## Hub Link: https://o7citizen.com
## Color Palette: crimson #1a0a0a, silver #c0c8d0, red #cc2200
## Footer: Standard three-section
## Commit Convention: feat/fix/seo/docs: [description]
