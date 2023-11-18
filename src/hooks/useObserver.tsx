import React, { RefObject, useEffect, useRef, useState } from 'react'

export interface UseObserver {
	animationProps: string
}

const useObserver = () => {
  const [elementVisibility, setElementVisibility] = useState<boolean>();
  const obsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (elementVisibility === undefined) return;
    if (elementVisibility) {
      if (obsRef.current) {
        obsRef.current.style.transition = 'opacity 300ms ease-out, transform 200ms ease-in';
        obsRef.current.style.opacity = '1';
        obsRef.current.style.transform = 'translateX(0)';
      };

    }
    else {
      if (obsRef.current) {
        obsRef.current.style.transition = 'opacity 300ms ease-out, transform 200ms ease-in';
        obsRef.current.style.opacity = '0';
        obsRef.current.style.transform = 'translateX(-6rem)';
      };
    }
  }, [elementVisibility])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      // only observe the first time
      // if (entry.isIntersecting) observer.unobserve(entry.target);
      setElementVisibility(entry.isIntersecting);
    },
    {
      rootMargin: '1%',
      threshold: 1
    })
    if(obsRef.current) observer.observe(obsRef.current);
    return () => {
      if (obsRef.current) {
        observer.unobserve(obsRef.current);
      }
    };

  }, [obsRef]);

  return obsRef;
}

export default useObserver
