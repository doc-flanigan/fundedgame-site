'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const SLIDES = Array.from({ length: 12 }, (_, i) => ({
  src: `/images/hero/hero-${String(i + 1).padStart(2, '0')}.jpg`,
  alt: `Star Citizen scene ${i + 1}`,
}));

const SLIDE_DURATION_MS = 6000;

type HeroCarouselProps = {
  className?: string;
  /** Optional element rendered above the images (e.g., copy + CTA). */
  children?: React.ReactNode;
};

export function HeroCarousel({ className = '', children }: HeroCarouselProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section
      className={`relative isolate overflow-hidden ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Star Citizen scenes"
    >
      <div className="relative aspect-[16/9] w-full md:aspect-[21/9]">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === active ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden={i !== active}
          >
            <div
              className={`absolute inset-0 ${
                i === active ? 'animate-slow-pan' : ''
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
              />
            </div>
            {/* cinematic vignette */}
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_30%,rgba(10,4,4,0.7)_100%)]"
            />
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-crimson via-crimson/70 to-transparent"
            />
            <div
              aria-hidden
              className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-crimson/80 to-transparent"
            />
          </div>
        ))}

        {/* Foreground content slot */}
        {children && (
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            {children}
          </div>
        )}

        {/* Slide indicators */}
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className={`h-1 rounded-full transition-all ${
                i === active
                  ? 'w-8 bg-red'
                  : 'w-2 bg-silver/30 hover:bg-silver/60'
              }`}
              aria-label={`Show slide ${i + 1} of ${SLIDES.length}`}
              aria-current={i === active}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
