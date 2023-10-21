import {useSizeChange} from '@/hook/useSizeChange';
import {PropsWithChildren, createContext, useState} from 'react';

export type DashboardContextType = {
  isMobile: boolean;
  drawer: boolean;
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
};

const defaultContext: DashboardContextType = {
  isMobile: false,
  drawer: false,
  handleDrawerOpen: () => {},
  handleDrawerClose: () => {},
};

export const DashboardContext = createContext(defaultContext);

export const DashboardProvider = ({children}: PropsWithChildren) => {
  const {isMobile} = useSizeChange();
  const [drawer, setDrawer] = useState(!isMobile);

  const handleDrawerOpen = () => {
    setDrawer(true);
  };

  const handleDrawerClose = () => {
    setDrawer(false);
  };

  return (
    <DashboardContext.Provider
      value={{drawer, isMobile, handleDrawerOpen, handleDrawerClose}}
    >
      {children}
    </DashboardContext.Provider>
  );
};
