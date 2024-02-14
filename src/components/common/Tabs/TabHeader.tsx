import { ReactNode, useContext } from 'react';
import Flex from '~/components/common/Flex';
import Container from '~/components/common/Container';
import { TabsStyleContext } from './TabsProvider';

interface TabHeaderProps {
  children: ReactNode;
}
const TabHeader = ({ children }: TabHeaderProps) => {
  const { gap, isFull } = useContext(TabsStyleContext);

  return (
    <Container
      maxWidth='sm'
      pb={0}
      style={{
        maxWidth: 'none',
        overflowX: 'auto',
        paddingBottom: '0',
        boxSizing: 'border-box',
      }}
    >
      <Flex
        justifyContent={isFull ? 'space-evenly' : 'flex-start'}
        gap={gap}
        style={{ boxSizing: 'border-box' }}
      >
        {children}
      </Flex>
    </Container>
  );
};

export default TabHeader;
