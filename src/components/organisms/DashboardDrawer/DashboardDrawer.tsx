import {ListMenuDrawer} from '@/components/molecules/ListMenuDrawer/ListMenuDrawer';
import {DashboardContext} from '@/context/DashboardContext';
import {styled, useTheme} from '@mui/material';
import Drawer from '@mui/material/Drawer';
import {useContext} from 'react';
import IconButton from '@mui/material/IconButton';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export const DashboardDrawer = () => {
  const {handleDrawerClose, drawer} = useContext(DashboardContext);
  const theme = useTheme();

  console.log(drawer);

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant='persistent'
      anchor='left'
      open={drawer}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <ListMenuDrawer />
    </Drawer>
  );
};
