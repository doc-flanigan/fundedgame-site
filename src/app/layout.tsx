import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import CookieBanner from '@/components/CookieBanner';
import './globals.css';

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://highestfundedgame.com';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://highestfundedgame.com/#website',
      url: 'https://highestfundedgame.com',
      name: 'Highest Funded Game',
      description:
        'Star Citizen is the highest-funded crowdfunding project in history, having raised over $1 billion from its passionate community.',
      publisher: { '@id': 'https://highestfundedgame.com/#organization' },
    },
    {
      '@type': 'Organization',
      '@id': 'https://highestfundedgame.com/#organization',
      name: 'Highest Funded Game',
      url: 'https://highestfundedgame.com',
      sameAs: ['https://dayonecitizen.com'],
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      'Star Citizen — The Highest-Funded Game in History',
    template: '%s · highestfundedgame.com',
  },
  description:
    'Star Citizen crossed $1 billion raised on May 24, 2026 — making it the most crowdfunded project in history. See the full funding record, year by year.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: 'highestfundedgame.com',
    title:
      'Star Citizen Just Crossed $1 Billion — The Highest-Funded Game in History',
    description:
      '$1 billion raised. 6.5M backers. No other crowdfunded project — game or otherwise — comes close. Here is the record.',
    images: ['/images/hero/hero-01.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Star Citizen: $1 Billion Raised — The Most Funded Game Ever',
    description:
      'Star Citizen crossed $1 billion raised on May 24, 2026. The full crowdfunding record, year by year.',
    images: ['/images/hero/hero-01.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="grain min-h-screen bg-crimson text-silverBright antialiased">
        {children}
        <Analytics />
        <GoogleAnalytics />
        <CookieBanner />
      </body>
    </html>
  );
}
