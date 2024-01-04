import styled from 'styled-components';
import Text from '~/components/common/Text';
import Flex from '~/components/common/Flex';
import ColorType from '~/types/design/color';
import Container from '../common/Container';

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
  width?: number;
  iconSize: number;
}

const InputField = styled.input<InputFieldPropsType>`
  width: calc(100% - ${(props) => props.iconSize}rem - 0.25rem);
  padding: 0;
  outline: none;
  border: 0;
`;

const Border = styled.div<BorderPropsType>`
  width: 25rem;
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
  // highlightColor = '--primaryColor',
  // handleBlur, //TODO
  children,
}: InputPropsType) => {
  const iconSize = children ? 1 : 0;

  //TODO
  const onHandleBlur = () => {};

  return (
    <Flex direction='column'>
      <Border>
        <Flex direction='column'>
          <Text>{label}</Text>
          <Flex>
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
            />
          </Flex>
        </Flex>
      </Border>
      <Container
        maxWidth='md'
        style={{ padding: ' 0 0.75rem' }}
      >
        <Text color={messageColor}>{message}</Text>
      </Container>
    </Flex>
  );
};
export default Input;
