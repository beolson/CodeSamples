import { useState, useEffect } from 'react';

type TailWindSizes = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
const tailWindMediaQueries: { [K in TailWindSizes]: string } = {
  xxl: '(min-width: 1536px)',
  xl: '(min-width: 1280px)',
  lg: '(min-width: 1024px)',
  md: '(min-width: 768px)',
  sm: '(min-width: 640px)',
};

const matchTailwindSizes = (): TailWindSizes => {
  let sizes: keyof typeof tailWindMediaQueries;
  for (sizes in tailWindMediaQueries) {
    if (window.matchMedia(tailWindMediaQueries[sizes]).matches) {
      return sizes;
    }
  }

  return 'sm';
};

const useTailwindMediaQuery = () => {
  const [matches, setMatches] = useState<TailWindSizes>(matchTailwindSizes());

  useEffect(() => {
    const listener = () => {
      console.log('resized', matchTailwindSizes());
      setMatches(matchTailwindSizes());
    };
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, []);

  return matches;
};

export { useTailwindMediaQuery };
export type { TailWindSizes };
