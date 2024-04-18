import * as React from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import {useSignInRequest} from './useSignInRequest';

export const SignInForm = () => {
  const {handleSubmit} = useSignInRequest();

  return (
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
        size='large'
      >
        Entrar
      </Button>
    </Box>
  );
};
