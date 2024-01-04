import { ReactNode, useContext } from 'react';
import Flex from '~/components/common/Flex';
import Container from '~/components/common/Container';
import { FontSizeType, FontWeightType } from '~/types/design/font';
import { TabsStyleContext } from './TabsProvider';

interface TabHeaderProps {
  children: ReactNode;
  weight?: FontWeightType;
  fontSize?: FontSizeType;
  gap?: number;
}
const TabHeader = ({ children }: TabHeaderProps) => {
  const { gap } = useContext(TabsStyleContext);
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
        justifyContent='flex-start'
        gap={gap}
        style={{ boxSizing: 'border-box' }}
      >
        {children}
      </Flex>
    </Container>
  );
};

export default TabHeader;
