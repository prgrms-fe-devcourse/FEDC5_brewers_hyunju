import { useContext, ReactNode } from 'react';
import styled from '@emotion/styled';
import Container from '~/components/common/Container';
import { TabsValueContext } from './TabsProvider';

interface TabBodyPropsType {
  id: number;
  children: ReactNode;
}
const TabBody = ({ id, children }: TabBodyPropsType) => {
  const { selectedId } = useContext(TabsValueContext);

  return selectedId === id ? (
    <AnimatedContainer
      maxWidth='md'
      style={{
        maxWidth: 'none',
        /* stylelint-disable-next-line value-keyword-case */
        boxSizing: 'border-box',
      }}
      color='--adaptive950'
      className={selectedId === id ? 'mounted' : undefined}
    >
      {children}
    </AnimatedContainer>
  ) : null;
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
