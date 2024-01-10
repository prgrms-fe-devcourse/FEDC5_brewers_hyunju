import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import ColorType from '~/types/design/color';
import { ButtonSizeType, ButtonVariantType } from '~/types/design/button';
import { FONT_SIZE, FONT_SIZE_UNIT } from '~/constants/design';
import { CommonStyle, CommonStylePropsType } from './CommonStyle';

export interface ButtonPropsType extends CommonStylePropsType {
  variant: ButtonVariantType;
  size: ButtonSizeType;
  color: ColorType;
  leftItem?: ReactNode;
  rightItem?: ReactNode;
}

const StyledButton = styled.button(
  (props: ButtonPropsType) => `
  ${CommonStyle}
  
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5em 1em;
  border: 0.125rem solid;
  border-radius: 0.25rem;

  background-color: ${
    props.variant === 'filled' ? `var(${props.color})` : 'var(--transparent)'
  };

  color: ${props.variant === 'filled' ? 'var(--white)' : `var(${props.color})`};
  font-weight: 600;
  font-size: ${
    FONT_SIZE[
      FONT_SIZE_UNIT.find((_, i, arr) => arr[i + 1] === props.size) ??
        props.size
    ]
  };

  border-color: ${
    props.variant === 'outlined' ? `var(${props.color})` : 'var(--transparent)'
  };

  box-sizing: border-box;

  cursor: pointer;
  font-family: inherit;
  gap: 0.5rem;
  transition-duration: 250ms;
  transition-property: filter, background-color;

  &:disabled {
    background-color: ${
      props.variant === 'filled' ? 'var(--adaptive200)' : 'var(--transparent)'
    };

    color: var(--adaptive400);

    border-color: ${
      props.variant === 'outlined' ? 'var(--adaptive300)' : 'var(--transparent)'
    };

    cursor: not-allowed;
  }

  &:enabled:hover {
    ${
      props.variant === 'filled'
        ? `filter: saturate(0.8);`
        : `background-color: var(--adaptive200);`
    }
  }
`
);

const Button: React.FC<React.ComponentProps<typeof StyledButton>> = ({
  ...args
}) => {
  return (
    <StyledButton {...args}>
      {args.leftItem}
      {args.children}
      {args.rightItem}
    </StyledButton>
  );
};

export default Button;
