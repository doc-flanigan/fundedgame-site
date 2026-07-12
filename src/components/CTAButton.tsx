'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { getRotatedReferralUrl, FALLBACK_REFERRAL_URL } from '@/lib/referral-rotator';

type CTAButtonProps = {
  children?: React.ReactNode;
  className?: string;
  trackingLabel?: string;
};

export function CTAButton({
  children = 'Discover Star Citizen — Get 50,000 UEC Free',
  className = '',
  trackingLabel,
}: CTAButtonProps) {
  const [href, setHref] = useState(FALLBACK_REFERRAL_URL);
  useEffect(() => { setHref(getRotatedReferralUrl()); }, []);

  const linkRef = useRef<HTMLAnchorElement>(null);
  const impressionFired = useRef(false);

  useEffect(() => {
    const el = linkRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (impressionFired.current) return;
        if (!entries.some((entry) => entry.isIntersecting)) return;
        impressionFired.current = true;
        observer.disconnect();
        const code = href.split('referral=')[1] ?? ''
        fetch('/api/log', {
          method: 'POST',
          keepalive: true,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            label: `impression:${trackingLabel ?? 'unknown'}`,
            referralCode: code,
            page: window.location.pathname,
            site: window.location.hostname,
          }),
        }).catch(() => {})
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [href, trackingLabel]);

  const handleClick = () => {
    const code = href.split('referral=')[1] ?? ''
    fetch('/api/log', {
      method: 'POST',
      keepalive: true,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        label: trackingLabel ?? 'unknown',
        referralCode: code,
        page: window.location.pathname,
        site: window.location.hostname,
      }),
    }).catch(() => {})
  }

  return (
    <Link
      ref={linkRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-red px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-silverBright shadow-[0_0_40px_-10px_rgba(204,34,0,0.6)] transition-all hover:shadow-[0_0_60px_-5px_rgba(204,34,0,0.9)] md:px-10 md:py-5 md:text-base ${className}`}
      onClick={handleClick}
    >
      <span
        aria-hidden
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-silverBright/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
      />
      <span className="relative">{children}</span>
      <svg
        className="relative h-4 w-4 transition-transform group-hover:translate-x-1"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M5 12h14M13 5l7 7-7 7" />
      </svg>
    </Link>
  );
}
