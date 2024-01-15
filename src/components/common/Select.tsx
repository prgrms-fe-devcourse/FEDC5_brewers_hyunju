import styled from '@emotion/styled';

interface SelectPropsType {
  data: (string | { label: string; value: string })[];
  label: string;
  placeholder: string;
  block?: boolean;
  invalid?: boolean;
  required?: boolean;
  disabled?: boolean;
  handleChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const Select = ({
  data,
  label,
  placeholder,
  block = false,
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
    <Wrapper block={block}>
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
  (props: { block: boolean }) => `
  display: ${props.block ? 'block' : 'inline-block'};
`
);

const Label = styled.label`
  display: block;
  font-size: 12px;
`;

const StyledSelect = styled.select(
  (props: { invalid: boolean }) => `
  width: 100%;
  padding: 4px 8px;
  border: 1px solid ${props.invalid ? 'var(--red600)' : 'var(--adaptive400)'};
  border-radius: 4px;

  box-sizing: border-box;
`
);
