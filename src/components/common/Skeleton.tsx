import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { CommonStyle, CommonStylePropsType } from './CommonStyle';
import { handleSize } from '~/utils/handleResponsiveStyle';
import { CONTAINER_SIZE } from '~/constants/design';

export interface SkeletonPropsType extends CommonStylePropsType {
  circle?: boolean;
  animation?: boolean;
  inline?: boolean;
}

const wave = keyframes`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
`;

const Skeleton = styled.div(
  ({ width = 10, height = 1, ...props }: SkeletonPropsType) => `
  ${CommonStyle}
  
  display: ${props.inline ? 'inline-block' : 'block'};

  width: ${
    props.circle
      ? `max(${handleSize(width, 'base')}, ${handleSize(height, 'base')})`
      : handleSize(width, 'base')
  };
  height: ${
    props.circle
      ? `max(${handleSize(width, 'base')}, ${handleSize(height, 'base')})`
      : handleSize(height, 'base')
  };
  border-radius: ${props.circle ? '50%' : '0.125rem'};

  background-color: var(--adaptive300);

  animation: ${wave} 2s infinite linear paused alternate;

  animation-play-state: ${props.animation ? 'running' : 'pasued'};

  @media screen and (width <= ${CONTAINER_SIZE['sm']}) {
    width: ${
      props.circle
        ? `max(${handleSize(width, 'sm')}, ${handleSize(height, 'sm')})`
        : handleSize(width, 'sm')
    };
    height: ${
      props.circle
        ? `max(${handleSize(width, 'sm')}, ${handleSize(height, 'sm')})`
        : handleSize(height, 'sm')
    };
  }

  @media screen and (width > ${CONTAINER_SIZE['sm']}) {
    width: ${
      props.circle
        ? `max(${handleSize(width, 'md')}, ${handleSize(height, 'md')})`
        : handleSize(width, 'md')
    };
    height: ${
      props.circle
        ? `max(${handleSize(width, 'md')}, ${handleSize(height, 'md')})`
        : handleSize(height, 'md')
    };
  }

  @media screen and (width > ${CONTAINER_SIZE['md']}) {
    width: ${
      props.circle
        ? `max(${handleSize(width, 'lg')}, ${handleSize(height, 'lg')})`
        : handleSize(width, 'lg')
    };
    height: ${
      props.circle
        ? `max(${handleSize(width, 'lg')}, ${handleSize(height, 'lg')})`
        : handleSize(height, 'lg')
    };
  }

  @media screen and (width > ${CONTAINER_SIZE['lg']}) {
    width: ${
      props.circle
        ? `max(${handleSize(width, 'xl')}, ${handleSize(height, 'xl')})`
        : handleSize(width, 'xl')
    };
    height: ${
      props.circle
        ? `max(${handleSize(width, 'xl')}, ${handleSize(height, 'xl')})`
        : handleSize(height, 'xl')
    };
  }
`
);

export default Skeleton;
