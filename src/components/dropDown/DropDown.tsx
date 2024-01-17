import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { IconDots } from '@tabler/icons-react';
import Text from '../common/Text';
import useDetectClose from '~/hooks/useDetectClose';

export interface DropDownListItemType {
  title: string;
  action: string;
}

export interface DropDownPropsType {
  icon?: ReactNode;
  list: DropDownListItemType[];
  handleClick: (action: string) => void;
}

interface DropDownMenuProps {
  isDropped: boolean;
}

const DropDown = ({ icon, list, handleClick }: DropDownPropsType) => {
  const [moreIsOpen, moreRef, moreHandler] = useDetectClose(false);

  return (
    <DropDownContainer>
      <DropDownButton
        onClick={moreHandler}
        ref={moreRef}
      >
        <Text
          size='md'
          color='--adaptive600'
        >
          {icon ? icon : <IconDots />}
        </Text>
      </DropDownButton>
      <DropDownContent isDropped={moreIsOpen}>
        <DropDownUl>
          {list.map((item) => (
            <DropDownLi
              key={item.title}
              onClick={() => handleClick(item.action)}
            >
              {item.title}
            </DropDownLi>
          ))}
        </DropDownUl>
      </DropDownContent>
    </DropDownContainer>
  );
};

const DropDownContainer = styled.div`
  position: relative;
  width: 2.75rem;
`;

const DropDownButton = styled.button`
  width: 2.75rem;
  height: 2.75rem;
  border: none;
  border-radius: var(--radius-xs);

  background-color: var(--transparent);

  cursor: pointer;

  &:hover {
    background-color: var(--adaptive200);
    transition: 125ms;
  }
`;

const DropDownContent = styled.div<DropDownMenuProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  visibility: hidden;
  position: absolute;
  top: 3.25rem;
  left: 50%;
  z-index: 9;

  width: 10.625rem;
  border-radius: var(--radius-sm);
  box-shadow: 0 0.25rem 0.875rem 0 var(--adaptiveOpacity200);

  background-color: var(--adaptive50);

  gap: 1px;

  transform: translate(-50%, -20px);
  transition:
    opacity 0.4s ease,
    transform 0.4s ease,
    visibility 0.4s;

  ${({ isDropped }) =>
    isDropped &&
    `
      visibility: visible;
      left: 50%;

      opacity: 1;
      transform: translate(-50%, 0);
  `}
`;

const DropDownUl = styled.ul`
  width: 100%;

  :not(:last-child) {
    border-bottom: 1px solid var(--adaptive300);
  }

  :first-child {
    border-radius: var(--radius-sm) var(--radius-sm) 0 0;
  }

  :last-child {
    border-radius: 0 0 var(--radius-sm) var(--radius-sm);
  }
`;

const DropDownLi = styled.li`
  display: block;

  width: 100%;
  padding: 0.75rem 1rem;

  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background-color: var(--adaptive300);
  }
`;

export default DropDown;
