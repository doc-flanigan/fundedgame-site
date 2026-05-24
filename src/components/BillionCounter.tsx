'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  target: number;
  duration?: number;
  className?: string;
};

export function BillionCounter({ target, duration = 2000, className }: Props) {
  const start = target - 2_000_000;
  const [count, setCount] = useState(start);
  const rafRef = useRef<number | undefined>(undefined);
  const startTimeRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const range = target - start;

    const step = (timestamp: number) => {
      if (startTimeRef.current === undefined) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(start + range * eased));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current !== undefined) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration, start]);

  return (
    <span className={className} suppressHydrationWarning>
      ${count.toLocaleString('en-US')}
    </span>
  );
}
