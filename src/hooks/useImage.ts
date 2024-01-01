import { useCallback, useEffect, useRef, useState } from 'react';
const LOAD_IMG_EVENT_TYPE = 'loadImage';

const useImage = (lazy: boolean, threshold: number) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const onIntersection: IntersectionObserverCallback = useCallback(
    (entries, io) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          io.unobserve(entry.target);
          entry.target.dispatchEvent(new CustomEvent(LOAD_IMG_EVENT_TYPE));
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

    const handleLoadImage = () => setLoaded(true);

    const imgElement = imgRef.current;
    imgElement &&
      imgElement.addEventListener(LOAD_IMG_EVENT_TYPE, handleLoadImage);
    return () => {
      imgElement &&
        imgElement.removeEventListener(LOAD_IMG_EVENT_TYPE, handleLoadImage);
    };
  }, [lazy]);

  useEffect(() => {
    if (!lazy) return;

    observerRef.current = new IntersectionObserver(onIntersection, {
      threshold,
    });
    imgRef.current && observerRef.current.observe(imgRef.current);
  }, [lazy, threshold, onIntersection]);

  return { loaded, imgRef };
};

export default useImage;
