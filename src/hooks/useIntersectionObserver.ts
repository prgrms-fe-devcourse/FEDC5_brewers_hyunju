import { useCallback, useEffect, useRef, useState } from 'react';

const useIntersectionObserver = <T extends HTMLElement>(
  customEventType: string,
  lazy: boolean,
  threshold: number
) => {
  const [loaded, setLoaded] = useState(false);
  const targetRef = useRef<T>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const onIntersection: IntersectionObserverCallback = useCallback(
    (entries, io) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          io.unobserve(entry.target);
          entry.target.dispatchEvent(new CustomEvent(customEventType));
        }
      });
    },
    []
  );

  useEffect(() => {
    if (!lazy) {
      setLoaded(true);
      return;
    }

    const handleLoad = () => setLoaded(true);

    const targetElement = targetRef.current;
    targetElement &&
      targetElement.addEventListener(customEventType, handleLoad);
    return () => {
      targetElement &&
        targetElement.removeEventListener(customEventType, handleLoad);
    };
  }, [lazy, customEventType]);

  useEffect(() => {
    if (!lazy) return;

    observerRef.current = new IntersectionObserver(onIntersection, {
      threshold,
    });
    targetRef.current && observerRef.current.observe(targetRef.current);
  }, [lazy, threshold, onIntersection]);

  return { loaded, targetRef };
};

export default useIntersectionObserver;
