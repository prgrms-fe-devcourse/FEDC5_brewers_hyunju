import { useCallback, useRef, useState } from 'react';
import Container from '../common/Container';
import Text from '~/components/common/Text';
import Flex from '~/components/common/Flex';
import ColorType from '~/types/design/color';
import { FontSizeType } from '~/types/design/font';
import styled from 'styled-components';
import { FONT_SIZE } from '~/constants/design';

export interface InputPropsType {
  width?: number;
  label?: string;
  type?: string;
  placeholder?: string;
  message?: string;
  messageColor?: ColorType;
  onBlur?: (text: string) => boolean;
  onChange:
    | ((text: string, InputName: string) => void)
    | ((text: string) => void);
  children?: React.ReactNode;
  InputName?: string;
}

interface BorderPropsType {
  isError?: boolean;
}

interface InputFieldPropsType {
  iconSize: number;
  inputFontSize: FontSizeType;
}

const InputField = styled.input<InputFieldPropsType>`
  width: calc(100% - ${(props) => props.iconSize}rem - 0.25rem);
  padding: 0;
  outline: none;
  border: 0;

  font-size: ${(props) => FONT_SIZE[props.inputFontSize || 'sm']};
`;

const Border = styled.div<BorderPropsType>`
  height: fit-content;
  padding: 0.75rem;
  border: 0.0625rem solid
    ${(props) => `var(${props.isError ? '--red600' : '--adaptive900'})`};
  border-radius: 1rem;
`;

interface PaddingPropsType {
  height: FontSizeType;
}

const Padding = styled.div<PaddingPropsType>`
  height: ${(props) => FONT_SIZE[props.height]};
`;

const Input = ({
  width,
  label,
  type = 'text',
  placeholder,
  message,
  messageColor,
  onBlur,
  onChange,
  children,
  InputName,
}: InputPropsType) => {
  const [isError, setIsError] = useState(false);
  const ref = useRef<HTMLInputElement | null>(null);
  let timer: ReturnType<typeof setTimeout>;

  const labelFontSize = 'sm' as FontSizeType;
  const inputFontSize = 'lg' as FontSizeType;
  const messageFontSize = 'sm' as FontSizeType;

  const iconSize = children ? 1 : 0;
  const gap = 0.75;

  const handleBlur = useCallback(() => {
    if (onBlur === undefined) {
      return;
    }
    if (ref.current === null) {
      return;
    }
    const isAvailable = onBlur(ref.current.value);

    setIsError(!isAvailable);
  }, [onBlur]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    debouncing(value, name);
  };

  const debouncing = (inputValue: string, name: string) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      if (onChange !== undefined) {
        onChange(inputValue, name);
      }
    }, 500);
  };

  return (
    <Container maxWidth='sm'>
      <Flex direction='column'>
        <Border isError={isError}>
          <Flex
            direction='column'
            gap={0.25}
          >
            {label ? <Text size={labelFontSize}>{label}</Text> : null}
            <Flex
              gap={gap}
              alignItems='center'
            >
              {children ? (
                <Container
                  maxWidth='sm'
                  style={{
                    display: 'inline-block',
                    width: `${iconSize}rem`,
                    height: `${iconSize}rem`,
                    margin: 0,
                    padding: 0,
                  }}
                >
                  {children}
                </Container>
              ) : null}
              <InputField
                name={InputName}
                width={width}
                iconSize={iconSize}
                type={type}
                placeholder={placeholder}
                onBlur={handleBlur}
                inputFontSize={inputFontSize}
                onChange={handleChange}
                ref={ref}
              />
            </Flex>
          </Flex>
        </Border>
        <Container
          maxWidth='md'
          style={{ padding: ' 0 0 0 0.75rem', margin: 0, width: 'fit-content' }}
        >
          {isError ? (
            <Text
              size={messageFontSize}
              color={messageColor}
            >
              {message}
            </Text>
          ) : (
            <Padding height={messageFontSize} />
          )}
        </Container>
      </Flex>
    </Container>
  );
};
export default Input;
