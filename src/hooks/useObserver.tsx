import React, { useEffect, useRef, useState } from 'react'

export interface UseObserver {
	isMobile: boolean
}

const useObserver = (props: UseObserver) => {
  const [elementVisibility, setElementVisibility] = useState<boolean>();
  const { isMobile } = props;
  const obsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (elementVisibility === undefined) return;
    if (elementVisibility) {
      if (obsRef.current) {
        obsRef.current.style.transition = 'visibility 300ms ease-out, opacity 300ms ease-out, transform 300ms ease-in';
        obsRef.current.style.opacity = '1';
        obsRef.current.style.transform = 'translateX(0)';
        obsRef.current.style.visibility = 'visible';
      };

    }
    else {
      if (obsRef.current) {
        obsRef.current.style.transition = 'visibility 500ms ease-out, opacity 500ms ease-out, transform 500ms ease-in';
        obsRef.current.style.opacity = '0';
        obsRef.current.style.filter = 'drop-shadow(0 0 #0000)';
        obsRef.current.style.transform = 'translateX(-6rem)';
        obsRef.current.style.visibility = 'hidden';
      };
    }
  }, [elementVisibility]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      // For Mobile => only observe the first time
      if (isMobile && entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
      setElementVisibility(entry.isIntersecting);
    },
    {
      rootMargin: '7%',
      threshold: 0.5
    })
    if(obsRef.current) observer.observe(obsRef.current);
    return () => {
      if (obsRef.current) {
        observer.unobserve(obsRef.current);
      }
    };

  }, [obsRef, isMobile]);

  return obsRef;
}

export default useObserver
