import React, { useState, useEffect } from 'react'

interface LazyImgInterface {
  lazyBgUrl: string;
  lazyBgClass: string;
  lazyImgUrl: string;
  lazyAltImg: string;
  lazyImgClass: string;
}

const LazyImg = ({
  lazyBgUrl,
  lazyBgClass,
  lazyImgUrl,
  lazyAltImg,
  lazyImgClass
}: LazyImgInterface) => {
  const [loaded, setLoaded] = useState(false);
  const [imgClass, setImgClass] = useState("opacity-0");
  const [containerImgClass, setContainerImgClass] = useState("blur-md");
  const handleLoading = () => setLoaded(true);

  useEffect(() => {
    if (loaded) {
      setImgClass("opacity-1");
      setContainerImgClass("");
    }
  }, [loaded]);

  return (
    <div
      className={`bg-[url('${lazyBgUrl}')] ${lazyBgClass}
        bg-no-repeat bg-cover ${containerImgClass}`}
    >
      <img
        src={`${lazyImgUrl}`}
        alt={lazyAltImg}
        className={`${lazyImgClass} ${imgClass}`}
        onLoad={handleLoading}
        loading="lazy"
      />
    </div>
  );
};

export default LazyImg
