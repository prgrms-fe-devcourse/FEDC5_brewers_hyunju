import React, { useState } from 'react';
import Container from '~/components/common/Container';
import Flex from '~/components/common/Flex';
import Radio from './Radio';

export interface RadioGroupPropsType {
  options: { label: string; value: string }[];
  defaultValue?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  name: string;
}

const RadioGroup: React.FC<RadioGroupPropsType> = ({
  options,
  defaultValue,
  disabled,
  onChange,
  name,
}) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    defaultValue
  );

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <Container maxWidth='sm'>
      <Flex
        justifyContent='space-between'
        alignItems='flex-start'
        style={{ padding: '0  0.25rem' }}
      >
        {options.map((option) => (
          <Radio
            key={option.value}
            value={option.value}
            name={name}
            checked={selectedValue === option.value}
            disabled={disabled}
            onChange={() => handleRadioChange(option.value)}
          >
            {option.label}
          </Radio>
        ))}
      </Flex>
    </Container>
  );
};

export default RadioGroup;
