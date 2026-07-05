'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const SLIDES = [
  { src: '/images/hero/hero-01.jpg', alt: 'A UEE Bengal carrier in orbit high above a planet' },
  { src: '/images/hero/hero-02.jpg', alt: 'An armored trooper overlooking a Star Citizen city skyline' },
  { src: '/images/hero/hero-03.jpg', alt: 'A spacecraft backlit by the sun on a snowy planet surface' },
  { src: '/images/hero/hero-04.jpg', alt: 'The interior of a capital-ship hangar with docked spacecraft' },
  { src: '/images/hero/hero-05.jpg', alt: 'A spacecraft in orbit above a cloud-wrapped planet' },
  { src: '/images/hero/hero-06.jpg', alt: 'A starship and ground rover on a misty frontier moon' },
  { src: '/images/hero/hero-07.jpg', alt: 'A pilot beside a ship in an orange desert dust storm' },
  { src: '/images/hero/hero-08.jpg', alt: 'A glowing blue orbital hologram inside a space station' },
  { src: '/images/hero/hero-09.jpg', alt: 'A large industrial capital ship seen up close' },
  { src: '/images/hero/hero-10.jpg', alt: 'A banded gas giant framed by a rocky canyon arch' },
  { src: '/images/hero/hero-11.jpg', alt: 'A spacecraft streaking through quantum travel' },
  { src: '/images/hero/hero-12.jpg', alt: 'A starship silhouetted against a golden sunset on a mountain ridge' },
  { src: '/images/hero/hero-13.jpg', alt: 'A Sabre fighter banking over a green planet' },
  { src: '/images/hero/hero-14.jpg', alt: 'A Hammerhead gunship patrolling above a cratered moon' },
  { src: '/images/hero/hero-15.jpg', alt: 'A formation of fighters over a lake at sunset' },
  { src: '/images/hero/hero-16.jpg', alt: 'Two bombers flying above golden sunset clouds' },
  { src: '/images/hero/hero-17.jpg', alt: 'An F8C Lightning on a landing pad in a hazy city' },
  { src: '/images/hero/hero-18.jpg', alt: 'An Idris frigate firing its railgun in a bright flash' },
];

const START = 13;

const SLIDE_DURATION_MS = 6000;

type HeroCarouselProps = {
  className?: string;
  /** Optional element rendered above the images (e.g., copy + CTA). */
  children?: React.ReactNode;
};

export function HeroCarousel({ className = '', children }: HeroCarouselProps) {
  const [active, setActive] = useState(START);
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
                priority={i === START}
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
