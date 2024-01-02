import styled from 'styled-components';
import useIntersectionObserver from '~/hooks/useIntersectionObserver';

export type ImageModeType = 'cover' | 'contain' | 'fill';
export interface ImagePropsType {
  lazy?: boolean;
  threshold?: number;
  placeholder?: string;
  src?: string;
  block?: boolean;
  width: number;
  height: number;
  alt: string;
  mode: ImageModeType;
}

interface ImageStylePropsType {
  block?: boolean;
  mode: ImageModeType;
}
const Image = ({
  lazy,
  threshold = 0.5,
  width,
  height,
  placeholder = `https://via.placeholder.com/${width}X${height}?text=brewers`,
  src = placeholder,
  block,
  alt,
  mode,
}: ImagePropsType) => {
  const { loaded, targetRef } = useIntersectionObserver<HTMLImageElement>(
    'imageLoad',
    lazy ? lazy : false,
    threshold
  );
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    if (targetRef.current) {
      targetRef.current.src = placeholder;
    } else {
      e.currentTarget.src = placeholder;
    }
  };
  return (
    <ImageStyled
      width={width}
      height={height}
      ref={targetRef}
      src={loaded ? src : placeholder}
      alt={alt}
      block={block}
      mode={mode}
      onError={handleImageError}
    />
  );
};

export default Image;

const ImageStyled = styled.img<ImageStylePropsType>`
  display: ${({ block }) => (block ? 'block' : undefined)};
  object-fit: ${({ mode }) => mode};
`;
