import Link from 'next/link';

const HUB_URL = process.env.NEXT_PUBLIC_HUB_URL ?? 'https://dayonecitizen.com';

type SecondaryButtonProps = {
  children?: React.ReactNode;
  href?: string;
  className?: string;
};

export function SecondaryButton({
  children = 'Learn the basics at dayonecitizen.com',
  href = HUB_URL,
  className = '',
}: SecondaryButtonProps) {
  const isExternal = href.startsWith('http');
  return (
    <Link
      href={href}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-silver/30 px-6 py-3 text-sm font-medium tracking-wide text-silverBright transition-all hover:border-silver/70 hover:bg-silver/5 md:px-8 md:py-4 ${className}`}
    >
      <span>{children}</span>
      <svg
        className="h-4 w-4 opacity-60"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M7 17L17 7M9 7h8v8" />
      </svg>
    </Link>
  );
}
