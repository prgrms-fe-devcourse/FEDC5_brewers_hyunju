import { FontSizeType, FontWeightType } from '~/types/design/font';
import TabHeader from './TabHeader';
import TabItem from './TabItem';
import TabsProvider from './TabsProvider';

export interface TabsPropsType {
  isFull?: boolean;
  children: React.ReactNode;
  gap?: number;
  fontSize?: FontSizeType;
  fontWeight?: FontWeightType;
  defaultId?: number;
}

const Tabs = ({
  isFull = true,
  children,
  gap = 1,
  fontSize = 'lg',
  fontWeight = 400,
  defaultId = 0,
}: TabsPropsType) => {
  return (
    <TabsProvider
      isFull={isFull}
      gap={gap}
      fontSize={fontSize}
      fontWeight={fontWeight}
      defaultId={defaultId}
    >
      {children}
    </TabsProvider>
  );
};

Tabs.Item = TabItem;
Tabs.Header = TabHeader;
export default Tabs;
