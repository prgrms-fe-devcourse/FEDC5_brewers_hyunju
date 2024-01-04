import { useContext, ReactNode } from 'react';
import Container from '~/components/common/Container';
import { TabsValueContext } from './TabsProvider';

interface TabBodyPropsType {
  id: number;
  children: ReactNode;
}
const TabBody = ({ id, children }: TabBodyPropsType) => {
  const { selectedId } = useContext(TabsValueContext);

  return (
    <Container
      maxWidth='md'
      style={{
        maxWidth: 'none',
        /* stylelint-disable-next-line value-keyword-case */
        display: selectedId === id ? 'block' : 'none',
        boxSizing: 'border-box',
      }}
      color='var(--adaptive950)'
    >
      {children}
    </Container>
  );
};

export default TabBody;
