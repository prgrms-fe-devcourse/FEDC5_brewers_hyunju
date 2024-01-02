import styled from 'styled-components';

export interface RadioPropsType {
  children?: string;
  value: string;
  name: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  checked?: boolean;
}

const RadioButtonInput = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  width: 2.5rem;
  height: 2.5rem;
  outline: none;
  border: 3px solid var(--radioGray);
  border-radius: 50%;

  color: var(--radioGray);

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
}: RadioPropsType) => {
  return (
    <label>
      <RadioButtonInput
        type='radio'
        value={value}
        name={name}
        defaultChecked={defaultChecked}
        disabled={disabled}
        checked={checked}
      ></RadioButtonInput>
      {children}
    </label>
  );
};

export default Radio;
