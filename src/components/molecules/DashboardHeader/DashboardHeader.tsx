import {DashboardContext} from '@/context/DashboardContext';
import {useContext} from 'react';
import {styled} from '@mui/material/styles';

import MuiAppBar, {
  AppBarProps,
  AppBarProps as MuiAppBarProps,
} from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({theme, open}) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const DashboardHeader = () => {
  const {drawer, handleDrawerOpen} = useContext(DashboardContext);

  return (
    <AppBar position='fixed' open={drawer}>
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={handleDrawerOpen}
          edge='start'
          sx={{mr: 2, ...(drawer && {display: 'none'})}}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h5' noWrap component='div'>
          Frida
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
