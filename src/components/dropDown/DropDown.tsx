import styled, { css } from 'styled-components';
import Text from '~/components/common/Text';
import useDetectClose from '~/hooks/useDetectClose';

export interface DropDownListItemType {
  title: string;
  action: string;
}

export interface DropDownPropsType {
  list: DropDownListItemType[];
  handleClick: (action: string) => void;
}

interface DropDownMenuProps {
  isDropped: boolean;
}

const DropDown = ({ list, handleClick }: DropDownPropsType) => {
  const [moreIsOpen, moreRef, moreHandler] = useDetectClose(false);

  return (
    <DropDownContainer>
      <DropDownButton
        onClick={moreHandler}
        ref={moreRef}
      >
        <Text size='md'>···</Text>
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
  cursor: pointer;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 0.25rem;
  border: none;
`;

const DropDownContent = styled.div<DropDownMenuProps>`
  position: absolute;
  top: 3.25rem;
  left: 50%;
  display: flex;
  width: 10.625rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: var(--adaptive50);
  gap: 1px;
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.875rem 0 var(--adaptiveOpacity200);
  visibility: hidden;
  transform: translate(-50%, -20px);
  transition:
    opacity 0.4s ease,
    transform 0.4s ease,
    visibility 0.4s;
  z-index: 9;

  ${({ isDropped }) =>
    isDropped &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translate(-50%, 0);
      left: 50%;
    `};
`;

const DropDownUl = styled.ul`
  width: 100%;
  :not(:last-child) {
    border-bottom: 1px solid var(--adaptive300);
  }
  :first-child {
    border-radius: 0.5rem 0.5rem 0 0;
  }
  :last-child {
    border-radius: 0 0 0.5rem 0.5rem;
  }
`;

const DropDownLi = styled.li`
  cursor: pointer;
  display: block;
  padding: 0.75rem 1rem;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    background-color: var(--adaptive300);
  }
`;

export default DropDown;
