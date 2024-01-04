import { useContext, ReactNode } from 'react';
import Container from '~/components/common/Container';
import { TabsValueContext } from './TabsProvider';
import styled from 'styled-components';

interface TabBodyPropsType {
  id: number;
  children: ReactNode;
}
const TabBody = ({ id, children }: TabBodyPropsType) => {
  const { selectedId } = useContext(TabsValueContext);

  const selected = selectedId === id;
  return (
    <AnimatedContainer
      maxWidth='md'
      style={{
        maxWidth: 'none',
        /* stylelint-disable-next-line value-keyword-case */
        display: selected ? 'block' : 'none',
        boxSizing: 'border-box',
      }}
      color='var(--adaptive950)'
      className={selected ? 'mounted' : undefined}
    >
      {children}
    </AnimatedContainer>
  );
};

export default TabBody;

const AnimatedContainer = styled(Container)`
  animation-fill-mode: forwards;

  &.mounted {
    animation-duration: 0.2s;
    animation-name: in;
  }

  @keyframes in {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;
