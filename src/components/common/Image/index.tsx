import { useMemo } from 'react';
import useImage from '~/hooks/useImage';

export type ImageModeType = 'cover' | 'contain' | 'fill';
export interface ImagePropsType {
  lazy?: boolean;
  threshold?: number;
  placeholder?: string;
  src: string;
  block?: boolean;
  width: number;
  height: number;
  alt: string;
  mode: ImageModeType;
}

const Image = ({
  lazy,
  threshold = 0.5,
  width,
  height,
  placeholder = `https://via.placeholder.com/${width}X${height}?text=brewers`,
  src,
  block,
  alt,
  mode,
}: ImagePropsType) => {
  // const [loaded, setLoaded] = useState(false);
  // const imgRef = useRef<HTMLImageElement>(null);

  const { loaded, imgRef } = useImage(lazy ? lazy : false, threshold);

  const imageStyle = useMemo(
    () => ({
      display: block ? 'block' : undefined,
      width,
      height,
      objectFit: mode,
    }),
    [block, height, mode, width]
  );

  // useEffect(() => {
  //   if (!lazy) {
  //     setLoaded(true);
  //     return;
  //   }

  //   const handleLoadImage = () => setLoaded(true);

  //   const imgElement = imgRef.current;
  //   imgElement &&
  //     imgElement.addEventListener(LOAD_IMG_EVENT_TYPE, handleLoadImage);
  //   return () => {
  //     imgElement &&
  //       imgElement.removeEventListener(LOAD_IMG_EVENT_TYPE, handleLoadImage);
  //   };
  // }, [lazy]);

  // useEffect(() => {
  //   if (!lazy) return;

  //   observer = new IntersectionObserver(onIntersection, { threshold });
  //   imgRef.current && observer.observe(imgRef.current);
  // }, [lazy, threshold]);

  return (
    <img
      ref={imgRef}
      src={loaded ? src : placeholder}
      alt={alt}
      style={imageStyle}
    />
  );
};

export default Image;
