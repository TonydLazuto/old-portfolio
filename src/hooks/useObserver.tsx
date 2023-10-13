import React, { RefObject, useEffect, useRef, useState } from 'react'

export interface UseObserver {
	animationProps: string
  obsRef: React.RefObject<HTMLDivElement>
}

const useObserver = (props : UseObserver) => {
  const { animationProps, obsRef } = props;
  const [elementVisibility, setElementVisibility] = useState(false);
  const [animation, setAnimation] = useState('');
  const [opacity, setOpacity] = useState('opacity-0');

  useEffect(() => {
    if (elementVisibility) {
      setAnimation(animationProps);
      setOpacity('opacity-1');
    }
    else {
      setAnimation('');
      setOpacity('opacity-0');
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
      threshold: 1
    })
    if(obsRef.current) observer.observe(obsRef.current);
  }, []);

  return [animation, opacity];
}

export default useObserver
