import styled from 'styled-components';
import Text from '~/components/common/Text';
import Flex from '~/components/common/Flex';
import ColorType from '~/types/design/color';
import { FontSizeType, FontWeightType } from '~/types/design/font';

interface InputPropsType {
  label?: string;
  labelFontSize: FontSizeType;
  labelFontWeight: FontWeightType;
  placeholder?: string;
  errorMessage?: string;
  errorMessageFontColor?: ColorType;
  errorMessageFontSize?: FontSizeType;
  errorFontWeight: FontWeightType;
  labelFontColor?: ColorType;
  borderColor?: ColorType;
  backgroundColor?: ColorType;
  // highlightColor?: ColorType;
  // handleBlur?: () => void;
}

interface BorderPropsType {
  borderColor?: ColorType;
}

const InputField = styled.input`
  outline: none;
  border: 0;
`;

const Border = styled.div<BorderPropsType>`
  width: 25rem;
  height: fit-content;
  padding: 0.75rem;
  border: 0.0625rem solid
    ${({ borderColor }) =>
      borderColor ? `var(${borderColor})` : 'var(--adaptive900)'};
  border-radius: 1rem;
`;

const Input = ({
  label,
  labelFontSize = 'sm',
  labelFontWeight = 400,
  placeholder,
  errorMessage,
  errorMessageFontColor = '--red600',
  errorMessageFontSize = 'sm',
  errorFontWeight = 400,
  labelFontColor = '--adaptive900',
  borderColor,
  // highlightColor = '--primaryColor',
  // handleBlur, //TODO
}: InputPropsType) => {
  //TODO
  const onHandleBlur = () => {};

  return (
    <Flex direction='column'>
      <Border borderColor={borderColor}>
        <Flex direction='column'>
          <Text
            weight={labelFontWeight}
            size={labelFontSize}
            color={labelFontColor}
          >
            {label}
          </Text>
          <InputField
            type='text'
            placeholder={placeholder}
            onBlur={onHandleBlur}
          />
        </Flex>
      </Border>
      <Text
        color={errorMessageFontColor}
        weight={errorFontWeight}
        size={errorMessageFontSize}
      >
        {errorMessage}
      </Text>
    </Flex>
  );
};
export default Input;
