import styled, { css } from 'styled-components';

export interface DropDownListItemType {
  title: string;
  action: string;
}

export interface DropDownPropsType {
  isDropped: boolean;
  list: DropDownListItemType[];
  onDropDownItemClick: (actionType: string) => void;
}

interface DropDownMenuProps {
  isDropped: boolean;
}

const DropDown = ({
  isDropped,
  list,
  onDropDownItemClick,
}: DropDownPropsType) => {
  const handleClick = (actionType: string) => {
    if (onDropDownItemClick) {
      onDropDownItemClick(actionType);
    }
  };

  return (
    <DropDownContainer>
      <DropDownContent isDropped={isDropped}>
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
  max-width: 2.75rem;
  margin: 0 auto;
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
  gap: 1px;
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.875rem 0 var(--adaptiveOpacity200);
  visibility: hidden;
  transform: translate(-50%, -20px);
  transition:
    opacity 0.4s ease-in-out,
    transform 0.4s ease-in-out,
    visibility 0.4s;
  z-index: 10;

  ${({ isDropped }) =>
    isDropped &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translate(-50%, 1.25rem);
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
