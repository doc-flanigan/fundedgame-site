import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        crimson: '#1a0a0a',
        crimsonMid: '#261010',
        silver: '#c0c8d0',
        silverBright: '#e8eef4',
        red: '#cc2200',
        muted: '#7a8088',
      },
      fontFamily: {
        display: ['var(--font-display)', 'ui-serif', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'crimson-radial':
          'radial-gradient(ellipse at top, #261010 0%, #1a0a0a 60%, #0a0404 100%)',
        'crimson-fade':
          'linear-gradient(180deg, #1a0a0a 0%, #261010 50%, #1a0a0a 100%)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slow-pan': {
          '0%': { transform: 'scale(1.05) translateX(0)' },
          '100%': { transform: 'scale(1.12) translateX(-2%)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'slow-pan': 'slow-pan 16s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
};

export default config;
