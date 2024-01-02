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
  mode?: ImageModeType;
  letterBoxColor?: string;
}

interface ImageStylePropsType {
  block?: boolean;
  mode: ImageModeType;
  width: number;
  height: number;
}
const Image = ({
  lazy,
  threshold = 0.5,
  width,
  height,
  placeholder = `https://via.placeholder.com/200X200?text=brewers`,
  src = placeholder,
  block,
  alt,
  mode = 'contain',
  letterBoxColor = '--adaptive950',
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
    <LetterBoxDiv
      letterBoxColor={letterBoxColor}
      width={width}
      height={height}
    >
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
    </LetterBoxDiv>
  );
};

export default Image;

const LetterBoxDiv = styled.div<{
  letterBoxColor: string;
  width: number;
  height: number;
}>`
  width: ${({ width }) => `${width}rem`};
  height: ${({ height }) => `${height}rem`};

  background-color: ${({ letterBoxColor }) => `var(${letterBoxColor})`};

  box-sizing: border-box;
`;
const ImageStyled = styled.img<ImageStylePropsType>`
  display: ${({ block }) => (block ? 'block' : undefined)};

  width: ${({ width }) => `${width}rem`};
  height: ${({ height }) => `${height}rem`};

  object-fit: ${({ mode }) => mode};
`;
