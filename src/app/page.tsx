'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {useRouter} from 'next/navigation';

function Copyright(props: any) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href='#'>
        Web Intelligence
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Page() {
  const {push} = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    push('/dashboard');
  };

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
          <Typography component='h1' variant='h5'>
            Entrar
          </Typography>
          <Box component='form' noValidate onSubmit={handleSubmit} sx={{mt: 1}}>
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email'
              name='email'
              autoComplete='off'
              autoFocus
              InputLabelProps={{shrink: true}}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='off'
              InputLabelProps={{shrink: true}}
            />

            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{mt: 3, mb: 2}}
            >
              Sign In
            </Button>

            <Copyright sx={{mt: 5}} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
