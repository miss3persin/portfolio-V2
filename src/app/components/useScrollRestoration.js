'use client'

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const useScrollRestoration = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const hash = searchParams.get('hash');
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, searchParams]);

  return null;
};

export default useScrollRestoration;
