import { createContext, useState } from 'react';
import { FontSizeType, FontWeightType } from '~/types/design/font';
import { TabsPropsType } from '.';

export const TabsValueContext = createContext<
  { selectedId: number } | undefined
>(undefined);
export const TabsActionContext = createContext<
  React.Dispatch<React.SetStateAction<number>> | undefined
>(undefined);
export const TabsStyleContext = createContext<{
  gap: number;
  fontSize: FontSizeType;
  fontWeight: FontWeightType;
  isFull: boolean;
}>({
  gap: 1,
  fontSize: 'lg',
  fontWeight: 400,
  isFull: false,
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
      <TabsValueContext.Provider value={{ selectedId }}>
        <TabsStyleContext.Provider
          value={{ gap, fontSize, fontWeight, isFull }}
        >
          {children}
        </TabsStyleContext.Provider>
      </TabsValueContext.Provider>
    </TabsActionContext.Provider>
  );
};

export default TabsProvider;
