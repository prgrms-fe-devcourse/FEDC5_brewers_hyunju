import { createContext, useState } from 'react';
import { TabsPropsType } from '.';
import { FontSizeType, FontWeightType } from '~/types/design/font';

export const TabsValueContext = createContext<{ selectedId: number }>({
  selectedId: 0,
});
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

type TabsProviderPropsType = {
  [K in keyof TabsPropsType]-?: TabsPropsType[K];
};
const TabsProvider = ({
  isFull,
  children,
  gap,
  fontSize,
  fontWeight,
  defaultId,
}: TabsProviderPropsType) => {
  const [selectedId, setSelectedId] = useState(defaultId);

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
