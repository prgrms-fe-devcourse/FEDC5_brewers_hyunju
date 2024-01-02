import { ReactNode } from 'react';
import Container from '~/components/common/Container';
import Flex from '~/components/common/Flex';
import Text from '~/components/common/Text';

export interface RadioGroupPropsType {
  labels?: string[];
  children: ReactNode;
}

function RadioGroup({ labels, children }: RadioGroupPropsType) {
  return (
    <Container maxWidth='sm'>
      <Flex
        direction='column'
        justifyContent='space-between'
        style={{ width: '33rem', height: '4.5rem' }}
      >
        <Flex
          justifyContent='space-between'
          alignItems='center'
          style={{ padding: '0  0.25rem' }}
        >
          {children}
        </Flex>
        <Flex justifyContent='space-between'>
          {labels ? labels.map((label) => <Text>{label}</Text>) : ''}
        </Flex>
      </Flex>
    </Container>
  );
}

export default RadioGroup;
