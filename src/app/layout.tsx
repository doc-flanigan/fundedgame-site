import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "The Most Funded Game in History — Star Citizen's Record-Breaking Crowdfunding Story",
    template: '%s · highestfundedgame.com',
  },
  description:
    'Star Citizen is the most crowdfunded project in history with over $700 million raised from more than 3 million backers. Here\'s the story.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: 'highestfundedgame.com',
    title:
      "The Most Funded Game in History — Star Citizen's Record-Breaking Crowdfunding Story",
    description:
      'Over $700 million raised. 3+ million backers. The story of the most crowdfunded project in human history.',
    images: ['/images/hero/hero-01.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Most Funded Game in History',
    description:
      'Star Citizen — over $700M raised, 3M+ backers, the largest crowdfunding story ever told.',
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
      <body className="grain min-h-screen bg-crimson text-silverBright antialiased">
        {children}
      </body>
    </html>
  );
}
