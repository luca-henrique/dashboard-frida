'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import {Copyright} from '../Copyright/Copyright';
import {SignInForm} from '@/components/molecules/SignInForm/SignInForm';

export const ContainerSignIn = () => {
  return (
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <Box
        sx={{
          my: 32,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component='h3' variant='h3'>
          F.R.I.D.A
        </Typography>
        <SignInForm />
        <Copyright />
      </Box>
    </Grid>
  );
};
