import styled from 'styled-components';
import { Property } from 'csstype';
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

interface SpacerPropsType {
  padding: Property.Padding;
}

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
  borderColor = '--adaptive900',
  // highlightColor = '--primaryColor',
  // handleBlur, //TODO
}: InputPropsType) => {
  //TODO
  const onHandleBlur = () => {};

  const Border = styled.div`
    width: 25rem;
    height: fit-content;
    border: 0.0625rem solid var(${borderColor});
    border-radius: 1rem;
  `;

  const Spacer = styled.div<SpacerPropsType>`
    padding: ${(props) => `${props.padding}`};
  `;

  return (
    <Flex direction='column'>
      <Border>
        <Spacer padding={'0.75rem'}>
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
        </Spacer>
      </Border>
      <Spacer padding={'0 0.75rem'}>
        <Text
          color={errorMessageFontColor}
          weight={errorFontWeight}
          size={errorMessageFontSize}
        >
          {errorMessage}
        </Text>
      </Spacer>
    </Flex>
  );
};
export default Input;
