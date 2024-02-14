import styled from '@emotion/styled';
import Flex from '~/components/common/Flex';
import Text from '~/components/common/Text';

export interface RadioPropsType {
  children?: string;
  value: string;
  name: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  checked?: boolean;
  onChange: () => void;
}

const RadioButtonInput = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  width: 2.5rem;
  height: 2.5rem;
  outline: none;
  border: 3px solid var(--adaptive500);
  border-radius: 50%;

  color: var(--adaptive500);

  appearance: none;

  cursor: pointer;

  &:checked {
    border: 4px solid var(--primaryColor);
    color: var(--primaryColor);

    &::after {
      display: block;
      position: absolute;

      width: 1.24rem;
      height: 1.24rem;
      border-radius: 50%;

      background-color: var(--primaryColor);

      content: '';
    }
  }
`;

const Radio = ({
  children,
  value,
  name,
  defaultChecked,
  disabled,
  checked,
  onChange,
}: RadioPropsType) => {
  return (
    <Flex
      as='fieldset'
      direction='column'
      alignItems='center'
      gap={1}
    >
      <RadioButtonInput
        type='radio'
        value={value}
        name={name}
        defaultChecked={defaultChecked}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      ></RadioButtonInput>
      <Text
        as='label'
        size='xs'
      >
        {children}
      </Text>
    </Flex>
  );
};

export default Radio;
