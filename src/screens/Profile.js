import  React from 'react';

import { Avatar, Chip, Divider, TextField, Button, FormControl } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import StarIcon from '@material-ui/icons/Star';

const Profile = () => {
  return (
    <>
      <h2>Profile</h2>

      <div className='profile'>
        <Avatar>
          <AccountCircle/>
        </Avatar>
        <div className='profile-data'>
          <div className='profile-name'>Mehmet Oliver</div>
          <Chip
            variant="outlined"
            size="small"
            icon={<StarIcon />}
            label="89 cards"
            color="primary"
          />
        </div>
      </div>
      <Divider />
      <form>
        <p className='form-top-text'>Edit your account data.</p>

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
          <Button type='submit' variant="contained" size="small" color="primary">
            Edit
          </Button>
        </FormControl>

      </form>

      <Divider/>

      <p>You can delete your account here.</p>

      <Button edge='start' color="secondary">Delete account</Button>
    </>
  );
};

export default Profile;