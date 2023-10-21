'use client';

import * as React from 'react';
import Box from '@mui/material/Box';

import {DashboardProvider} from '@/context/DashboardContext';
import {DashboardMainContainer} from '@/components/organisms/DashboardMainContainer/DashboardMainContainer';
import {DashboardDrawer} from '@/components/organisms/DashboardDrawer/DashboardDrawer';
import {DashboardHeader} from '@/components/molecules/DashboardHeader/DashboardHeader';

export default function Dashboard() {
  return (
    <Box sx={{display: 'flex'}}>
      <DashboardProvider>
        <DashboardHeader />
        <DashboardDrawer />
        <DashboardMainContainer />
      </DashboardProvider>
    </Box>
  );
}
