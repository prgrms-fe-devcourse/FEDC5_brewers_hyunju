import styled from 'styled-components';
import useIntersectionObserver from '~/hooks/useIntersectionObserver';
import ColorType from '~/types/design/color';
import { handleSizeUnit } from '~/utils/handleSizeUnit';

export type ImageModeType = 'cover' | 'contain' | 'fill';
export interface ImagePropsType {
  lazy?: boolean;
  threshold?: number;
  placeholder?: string;
  src?: string;
  block?: boolean;
  width: number | string;
  height: number | string;
  alt: string;
  mode?: ImageModeType;
  letterBoxColor?: ColorType;
}

interface ImageStylePropsType {
  block?: boolean;
  mode: ImageModeType;
  width: string;
  height: string;
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
        width={handleSizeUnit(width)}
        height={handleSizeUnit(height)}
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
  letterBoxColor: ColorType;
  width: number | string;
  height: number | string;
}>`
  width: ${({ width }) => handleSizeUnit(width)};
  height: ${({ height }) => handleSizeUnit(height)};

  background-color: ${({ letterBoxColor }) => `var(${letterBoxColor})`};

  box-sizing: border-box;
`;
const ImageStyled = styled.img<ImageStylePropsType>`
  display: ${({ block }) => (block ? 'block' : undefined)};

  width: ${({ width }) => handleSizeUnit(width)};
  height: ${({ height }) => handleSizeUnit(height)};

  object-fit: ${({ mode }) => mode};
`;
