import React from 'react';
import { Link } from 'react-router-dom';

import BottomNavigation  from '@material-ui/core/BottomNavigation';
import BottomNavigationAction  from '@material-ui/core/BottomNavigationAction';

import TranslateIcon from '@material-ui/icons/Translate';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const BottomNav = () => {
  const [value, setValue] = React.useState(0);

  const onChangeHandler = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <BottomNavigation 
      className='bottom-nav'
      value={value}
      onChange={onChangeHandler}
    >
      <BottomNavigationAction component={Link} to='/' icon={<TranslateIcon />} />
      <BottomNavigationAction component={Link} to='/phrasebook' icon={<ListAltIcon />} />
      <BottomNavigationAction component={Link} to='/practice' icon={<PlayArrowIcon />} disabled />
      <BottomNavigationAction component={Link} to='/add' icon={<AddCircleOutlineIcon />} disabled />
      <BottomNavigationAction component={Link} to='/profile' icon={<AccountCircleIcon />} />
    </BottomNavigation>
  );
};

export default BottomNav;
