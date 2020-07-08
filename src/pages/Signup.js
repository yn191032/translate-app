import  React from 'react';
import Header from '../components/Header';
import Container from '@material-ui/core/Container';
import { TextField, Button, FormControl, Paper } from '@material-ui/core';

const Signup = () => {
  return (
    <div className="App">
      <Header title='Sign up'/>

      <Container className='container'>
        <Paper style={{padding: 30}} elevation={0} component='form'>
          <h2>Sign up</h2>
          <p className='form-top-text'>Create your account.</p>

          <TextField
            size='small'
            id="user-email"
            type='email'
            label="Email*"
            variant="outlined"
            margin="normal"
            fullWidth
          />

          <TextField
            size='small'
            id="user-name"
            label="Name*"
            variant="outlined"
            margin="normal"
            fullWidth
          />

          <TextField
            size='small'
            id="user-password"
            type='password'
            label="Password*"
            variant="outlined"
            margin="normal"
            fullWidth
          />

          <TextField
            size='small'
            id="user-password-repeat"
            type='password'
            label="Repeat password*"
            variant="outlined"
            margin="normal"
            fullWidth
          />

          <FormControl margin="normal">
            <Button type='submit' variant="contained" size="meddium" color="primary">
              Sign up
            </Button>
          </FormControl>

        </Paper>
      </Container>
    </div>
  );
};

export default Signup;