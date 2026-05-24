'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const SLIDES = [
  { src: '/images/hero/hero-01.jpg', alt: 'Star Citizen spacecraft approaching a space station above a gas giant' },
  { src: '/images/hero/hero-02.jpg', alt: 'Explorer on foot on a rocky alien moon with a spacecraft in the distance' },
  { src: '/images/hero/hero-03.jpg', alt: 'Interior of a capital ship hangar with multiple docked spacecraft' },
  { src: '/images/hero/hero-04.jpg', alt: 'Aerial view of a Star Citizen landing zone city at dusk' },
  { src: '/images/hero/hero-05.jpg', alt: 'Two spacecraft flying in formation through an asteroid field' },
  { src: '/images/hero/hero-06.jpg', alt: 'Ground crew near a landed starship on an alien planet surface' },
  { src: '/images/hero/hero-07.jpg', alt: 'Star Citizen pilot cockpit view overlooking a space station dock' },
  { src: '/images/hero/hero-08.jpg', alt: 'Massive capital ship silhouetted against a bright star in deep space' },
  { src: '/images/hero/hero-09.jpg', alt: 'Quantum travel light-tunnel effect surrounding a spacecraft at jump' },
  { src: '/images/hero/hero-10.jpg', alt: 'Space station exterior with approaching ships against a nebula backdrop' },
  { src: '/images/hero/hero-11.jpg', alt: 'Star Citizen spacecraft hull detail with planet curvature in background' },
  { src: '/images/hero/hero-12.jpg', alt: 'Combat spacecraft banking through an asteroid field debris cloud' },
];

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
      <div className="relative w-full min-h-[520px] md:min-h-0 md:aspect-[21/9]">
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
