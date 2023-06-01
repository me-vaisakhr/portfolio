import { RefObject, useEffect, useState } from "react";

interface Options {
  dontResetOnceVisible?: boolean;
}

const useObserver = (elementRef: RefObject<Element>, options?: Options) => {
  const [isIntersecting, setIntersectionStatus] = useState(false);

  const OPTIONS: IntersectionObserverInit = {
    root: null,
    threshold: 0.2,
  };

  useEffect(() => {
    if (!elementRef.current) return;

    const onIntersect = (entries: Array<IntersectionObserverEntry>) => {
      const [entry] = entries;

      if (!options?.dontResetOnceVisible || entry.isIntersecting)
        setIntersectionStatus(entry.isIntersecting);
    };

    const observer = new IntersectionObserver(onIntersect, OPTIONS);
    observer.observe(elementRef.current);
  }, [elementRef]);

  return [isIntersecting];
};

export default useObserver;
