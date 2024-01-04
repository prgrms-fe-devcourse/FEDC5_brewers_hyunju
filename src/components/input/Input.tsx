import styled from 'styled-components';
import Text from '~/components/common/Text';
import Flex from '~/components/common/Flex';
import ColorType from '~/types/design/color';
import Container from '../common/Container';
import { FontSizeType } from '~/types/design/font';
import { FONT_SIZE } from '~/constants/design';

export interface InputPropsType {
  width?: number;
  label?: string;
  type?: string;
  placeholder?: string;
  message?: string;
  messageColor?: ColorType;
  // highlightColor?: ColorType;
  // handleBlur?: () => void;
  children?: React.ReactNode;
}

interface BorderPropsType {
  borderColor?: ColorType;
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
  border: 0.0625rem solid var(--adaptive900);
  border-radius: 1rem;
`;

const Input = ({
  width,
  label,
  type = 'text',
  placeholder,
  message,
  messageColor,
  // handleBlur, //TODO
  children,
}: InputPropsType) => {
  const iconSize = children ? 1 : 0;
  const gap = 0.75;
  const labelFontSize = 'sm' as FontSizeType;
  const inputFontSize = 'lg' as FontSizeType;
  const messageFontSize = 'sm' as FontSizeType;

  //TODO
  const onHandleBlur = () => {};

  return (
    <Container maxWidth='sm'>
      <Flex direction='column'>
        <Border>
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
                width={width}
                iconSize={iconSize}
                type={type}
                placeholder={placeholder}
                onBlur={onHandleBlur}
                inputFontSize={inputFontSize}
              />
            </Flex>
          </Flex>
        </Border>
        <Container
          maxWidth='md'
          style={{ padding: ' 0 0 0 0.75rem', margin: 0 }}
        >
          <Text
            size={messageFontSize}
            color={messageColor}
          >
            {message}
          </Text>
        </Container>
      </Flex>
    </Container>
  );
};
export default Input;
