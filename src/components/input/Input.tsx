import styled from '@emotion/styled';

import Box from '~/components/common/Box';
import Container from '~/components/common/Container';
import Flex from '~/components/common/Flex';
import Text from '~/components/common/Text';

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
    | ((text: string, inputName: string) => void)
    | ((text: string) => void);
  children?: React.ReactNode;
  inputName?: string;
  inputText?: string;
  disabled?: boolean;
  maxLength?: number;
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

  background-color: transparent;

  color: var(--adaptive900);
  font-size: ${(props) => FONT_SIZE[props.inputFontSize || 'sm']};
`;

const Border = styled.div<BorderPropsType>`
  height: fit-content;
  padding: 0.75rem;
  border: 0.0625rem solid
    ${(props) => `var(${props.isError ? '--red600' : '--adaptive900'})`};
  border-radius: 1rem;

  &:has(input:disabled) {
    background-color: var(--adaptiveOpacity200);
  }
`;

const Input = ({
  width,
  label,
  type = 'text',
  placeholder,
  message,
  messageColor,
  onChange,
  children,
  inputName,
  disabled,
  inputText,
  maxLength = 0,
}: InputPropsType) => {
  const labelFontSize = 'sm' as FontSizeType;
  const inputFontSize = 'lg' as FontSizeType;
  const messageFontSize = 'sm' as FontSizeType;

  const iconSize = children ? 1 : 0;
  const gap = 0.75;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (maxLength && value.length > maxLength) {
      return;
    }

    if (onChange !== undefined) {
      onChange(value, name);
    }
  };

  return (
    <Container
      maxWidth='sm'
      style={{ padding: 0 }}
    >
      <Flex direction='column'>
        <Border isError={!!message}>
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
                name={inputName}
                width={width}
                iconSize={iconSize}
                type={type}
                placeholder={placeholder}
                inputFontSize={inputFontSize}
                onChange={handleChange}
                disabled={disabled}
                value={inputText}
              />
            </Flex>
          </Flex>
        </Border>
        {message ? (
          <Container
            maxWidth='md'
            style={{
              padding: ' 0 0 0 0.75rem',
              margin: 0,
              width: 'fit-content',
            }}
          >
            <Text
              size={messageFontSize}
              color={messageColor}
            >
              {message}
            </Text>
          </Container>
        ) : (
          <Box height={0.875}></Box>
        )}
      </Flex>
    </Container>
  );
};
export default Input;
