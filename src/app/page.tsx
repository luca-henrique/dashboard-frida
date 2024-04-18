'use client';

import * as React from 'react';
import Grid from '@mui/material/Grid';
import {ContainerSignIn} from '@/components/organisms/ContainerSignIn/ContainerSignIn';

export default function Page() {
  return (
    <Grid container component='main' sx={{height: '100vh'}}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://fakeimg.pl/900)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <ContainerSignIn />
    </Grid>
  );
}
