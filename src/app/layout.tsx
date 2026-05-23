import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
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
        'Star Citizen is the highest-funded crowdfunding project in history, having raised over $700M from its passionate community.',
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
    'Star Citizen has raised nearly $1 billion from 6.4 million backers — making it the most crowdfunded project in history. See the full funding record, year by year.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: 'highestfundedgame.com',
    title:
      'Star Citizen Has Raised $967M+ — The Highest-Funded Game in History',
    description:
      '$967M raised. 6.4M backers. No other crowdfunded project — game or otherwise — comes close. Here is the record.',
    images: ['/images/hero/hero-01.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Star Citizen: $967M+ Raised — The Highest-Funded Game Ever',
    description:
      'Star Citizen has raised nearly $1 billion from 6.4 million backers. The full crowdfunding record, year by year.',
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
      </body>
    </html>
  );
}
