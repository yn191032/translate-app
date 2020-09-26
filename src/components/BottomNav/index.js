import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import BottomNavigation  from '@material-ui/core/BottomNavigation';
import BottomNavigationAction  from '@material-ui/core/BottomNavigationAction';

import TranslateIcon from '@material-ui/icons/Translate';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const BottomNav = () => {
  const { pathname } = useLocation();

  return (
    <BottomNavigation 
      className='bottom-nav'
      value={
        pathname.includes('/phrasebook') ? 'phrasebook' :
        pathname.includes('/profile') ? 'profile' :
        pathname.includes('/practice') ? 'practice' :
        pathname.includes('/add') ? 'add' :
        'search'
      }
    >
      <BottomNavigationAction value='search' label='Search' component={Link} to='/' icon={<TranslateIcon />} />
      <BottomNavigationAction value='phrasebook' label='Phrasebook' component={Link} to='/phrasebook' icon={<ListAltIcon />} />
      <BottomNavigationAction value='practice' label='Practice' component={Link} to='/practice' icon={<PlayArrowIcon />} disabled />
      <BottomNavigationAction value='add' label='Add' component={Link} to='/add' icon={<AddCircleOutlineIcon />} disabled />
      <BottomNavigationAction value='profile' label='Profile' component={Link} to='/profile' icon={<AccountCircleIcon />} />
    </BottomNavigation>
  );
};

export default BottomNav;
