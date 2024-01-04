import { createContext, useState } from 'react';
import { FontSizeType, FontWeightType } from '~/types/design/font';
import { TabsPropsType } from '.';

export const TabsValueContext = createContext<
  { selectedId: number; isFull: boolean } | undefined
>(undefined);
export const TabsActionContext = createContext<
  React.Dispatch<React.SetStateAction<number>> | undefined
>(undefined);
export const TabsStyleContext = createContext<{
  gap: number;
  fontSize: FontSizeType;
  fontWeight: FontWeightType;
}>({
  gap: 1,
  fontSize: 'lg',
  fontWeight: 400,
});

const TabsProvider = ({
  isFull,
  children,
  gap,
  fontSize,
  fontWeight,
}: TabsPropsType) => {
  const [selectedId, setSelectedId] = useState(0);

  return (
    <TabsActionContext.Provider value={setSelectedId}>
      <TabsValueContext.Provider value={{ isFull, selectedId }}>
        <TabsStyleContext.Provider value={{ gap, fontSize, fontWeight }}>
          {children}
        </TabsStyleContext.Provider>
      </TabsValueContext.Provider>
    </TabsActionContext.Provider>
  );
};

export default TabsProvider;
