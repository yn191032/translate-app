import  React from 'react';

import { TextField, Button, FormControl, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Paper style={{padding: 30}} elevation={0} component='form'>
      <h2>Log in</h2>
      <p className='form-top-text'>Sign in or <Link to='/signup'>create an account</Link>.</p>
      <TextField 
        size='small'
        id="user-email"
        type='email'
        label="Email*"
        fullWidth
        variant="outlined"
        margin="normal"
      />
      <TextField
        size='small'
        id="user-password"
        type='password'
        label="Password*"
        fullWidth
        variant="outlined"
        margin="normal"
      />
      <FormControl margin="normal">
        <Button type='submit' variant="contained" size="meddium" color="primary">
          Log in
        </Button>
      </FormControl>
    </Paper>
  );
};

export default Login;