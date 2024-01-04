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
}

const Tabs = ({
  isFull = true,
  children,
  gap = 1,
  fontSize = 'lg',
  fontWeight = 400,
}: TabsPropsType) => {
  return (
    <TabsProvider
      isFull={isFull}
      gap={gap}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      {children}
    </TabsProvider>
  );
};

Tabs.Item = TabItem;
Tabs.Header = TabHeader;
export default Tabs;
