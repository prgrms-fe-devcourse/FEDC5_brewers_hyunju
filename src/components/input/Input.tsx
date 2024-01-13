import { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import Container from '~/components/common/Container';
import Text from '~/components/common/Text';
import Flex from '~/components/common/Flex';
import ColorType from '~/types/design/color';
import { FontSizeType } from '~/types/design/font';
import { FONT_SIZE } from '~/constants/design';

export interface InputPropsType {
  width?: number;
  label?: string;
  type?: string;
  placeholder?: string;
  message?: string;
  messageColor?: ColorType;
  isValidate?: (text: string) => boolean;
  onChange:
    | ((text: string, InputName: string) => void)
    | ((text: string) => void);
  children?: React.ReactNode;
  InputName?: string;
  inputText?: string;
}

interface BorderPropsType {
  isError?: boolean;
}

interface InputFieldPropsType {
  iconSize: number;
  inputFontSize: FontSizeType;
}

const InputField = styled.input(
  (props: InputFieldPropsType) => `
  width: calc(100% - ${props.iconSize}rem - 0.25rem);
  padding: 0;
  outline: none;
  border: 0;

  background-color: transparent;

  color: var(--adaptive900);
  font-size: ${FONT_SIZE[props.inputFontSize || 'sm']};
`
);

const Border = styled.div(
  (props: BorderPropsType) => `
  height: fit-content;
  padding: 0.75rem;
  border: 0.0625rem solid
    ${`var(${props.isError ? '--red600' : '--adaptive900'})`};
  border-radius: 1rem;
`
);

interface PaddingPropsType {
  height: FontSizeType;
}

const Padding = styled.div(
  (props: PaddingPropsType) => `
  height: ${FONT_SIZE[props.height]};
`
);

const Input = ({
  width,
  label,
  type = 'text',
  placeholder,
  message,
  messageColor,
  isValidate,
  onChange,
  children,
  InputName,
  inputText,
}: InputPropsType) => {
  const [isError, setIsError] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const labelFontSize = 'sm' as FontSizeType;
  const inputFontSize = 'lg' as FontSizeType;
  const messageFontSize = 'sm' as FontSizeType;

  const iconSize = children ? 1 : 0;
  const gap = 0.75;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (onChange !== undefined) {
      debouncing(onChange, value, name);
    }
  };

  const debouncing = (
    callback:
      | ((text: string, InputName: string) => void)
      | ((text: string) => void),
    value: string,
    name: string
  ) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => callback(value, name), 500);
  };

  useEffect(() => {
    if (!inputText) {
      setIsError(false);
      return;
    }

    if (isValidate === undefined) {
      return;
    }

    const isAvailable = isValidate(inputText);

    setIsError(!isAvailable);
  }, [inputText, isValidate]);

  return (
    <Container
      maxWidth='sm'
      style={{ padding: 0 }}
    >
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
                inputFontSize={inputFontSize}
                onChange={handleChange}
              />
            </Flex>
          </Flex>
        </Border>
        {message && (
          <Container
            maxWidth='md'
            style={{
              padding: ' 0 0 0 0.75rem',
              margin: 0,
              width: 'fit-content',
            }}
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
        )}
      </Flex>
    </Container>
  );
};
export default Input;
