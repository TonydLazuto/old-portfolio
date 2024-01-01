import React, { useEffect, useState } from 'react'

export interface ArrowObserver {
  obsRef: React.RefObject<HTMLDivElement>
}

const arrowObserver = (props : ArrowObserver) => {
  const { obsRef } = props;
  const [elementVisibility, setElementVisibility] = useState<boolean>();
  const [animation, setAnimation] = useState('');
  const [hidden, setHidden] = useState('hidden');

  useEffect(() => {
    if (elementVisibility === undefined) return;
    if (elementVisibility) {
      setHidden('hidden');
      setAnimation('fade-out');
    }
    else {
      setHidden('');
      setAnimation('animate-arrowPop');
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
      rootMargin: '7%',
      threshold: 0.3
    })
    if(obsRef.current) observer.observe(obsRef.current);
  }, []);

  return [animation, hidden];
}

export default arrowObserver;
