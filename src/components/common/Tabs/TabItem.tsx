import { useContext, ReactNode } from 'react';
import styled from 'styled-components';
import {
  TabsActionContext,
  TabsStyleContext,
  TabsValueContext,
} from './TabsProvider';
import Text from '~/components/common/Text';
import { FontSizeType } from '~/types/design/font';
import { FONT_SIZE_UNIT } from '~/constants/design';

export interface TabItemPropsType {
  id: number;
  disabled?: boolean;
  icon?: ReactNode;
  text?: string;
  handleClick?: () => void;
}
const TabItem = ({
  id,
  disabled,
  text,
  icon,
  handleClick,
}: TabItemPropsType) => {
  const valueContext = useContext(TabsValueContext);
  const setSelectedId = useContext(TabsActionContext);
  const { fontSize, fontWeight, isFull } = useContext(TabsStyleContext);
  const selected = valueContext ? valueContext.selectedId === id : false;

  const mergeHandleClick = () => {
    if (!setSelectedId || (valueContext && valueContext.selectedId === id)) {
      return;
    }
    setSelectedId(id);
    handleClick && handleClick();
  };
  return (
    <TabItemStyle
      $selected={selected}
      disabled={disabled}
      onClick={mergeHandleClick}
      $fontSize={fontSize}
      $isFull={isFull}
    >
      {icon && icon}
      {text && (
        <HoverText
          $selected={selected}
          size={fontSize}
          weight={fontWeight}
        >
          {text}
        </HoverText>
      )}
    </TabItemStyle>
  );
};

export default TabItem;

const TabItemStyle = styled.button<{
  $selected: boolean;
  $isFull: boolean;
  $fontSize: FontSizeType;
}>`
  flex-grow: ${({ $isFull }) => ($isFull ? '1' : '0')};

  min-width: 2.5rem;
  padding: 0.125rem;
  padding-bottom: 0.3125rem;
  border: none;
  border-bottom: ${({ $selected }) =>
    $selected ? 'solid var(--primaryColor)' : 'solid var(--transparent)'};
  border-width: ${({ $fontSize }) =>
    FONT_SIZE_UNIT.findIndex((unit) => unit === $fontSize) >= 2
      ? '0.1875rem'
      : '0.125rem'};

  background-color: transparent;

  color: ${({ $selected }) =>
    $selected ? 'var(--primaryColor)' : 'var(--adaptive400)'};

  cursor: pointer;
  transition: 0.2s border-color ease-in;

  &:hover {
    color: ${({ $selected }) => !$selected && 'var(--adaptive950)'};
  }

  transition: 0.2s color ease-in;
`;

const HoverText = styled(Text)<{ $selected: boolean }>`
  color: inherit;
`;
