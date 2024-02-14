import styled from '@emotion/styled';
import { FONT_SIZE } from '~/constants/design';

interface SelectPropsType {
  data: (string | { label: string; value: string })[];
  label: string;
  placeholder: string;
  invalid?: boolean;
  required?: boolean;
  disabled?: boolean;
  handleChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const Select = ({
  data,
  label,
  placeholder,
  invalid = false,
  required = false,
  disabled = false,
  handleChange,
}: SelectPropsType) => {
  const formattedData = data.map((item) =>
    typeof item === 'string' ? { label: item, value: item } : item
  );

  const options = formattedData.map((item) => (
    <option
      key={item.value}
      value={item.value}
    >
      {item.label}
    </option>
  ));

  if (placeholder) {
    options.unshift(
      <option
        key='placeholder'
        value=''
        hidden
      >
        {placeholder}
      </option>
    );
  }

  return (
    <Wrapper>
      <Label>{label}</Label>
      <StyledSelect
        invalid={invalid}
        required={required}
        disabled={disabled}
        onChange={handleChange}
      >
        {options}
      </StyledSelect>
    </Wrapper>
  );
};

export default Select;

const Wrapper = styled.div(
  () => `
  display: flex;
  flex-direction: column;
  align-items: end;

  gap: 0.375rem;
`
);

const Label = styled.label`
  display: block;

  font-weight: 800;
  font-size: ${FONT_SIZE['md']};
`;

const StyledSelect = styled.select(
  (props: { invalid: boolean }) => `
  padding: var(--padding-xs) var(--padding-sm);
  border: 1px solid ${props.invalid ? 'var(--red600)' : 'var(--adaptive400)'};
  border-radius: var(--radius-xs);

  box-sizing: border-box;
  outline: none;
`
);
