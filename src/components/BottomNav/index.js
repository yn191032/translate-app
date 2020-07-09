import React from 'react';
import { Link } from 'react-router-dom';

import BottomNavigation  from '@material-ui/core/BottomNavigation';
import BottomNavigationAction  from '@material-ui/core/BottomNavigationAction';

import TranslateIcon from '@material-ui/icons/Translate';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

const BottomNav = () => {
  return (
    <BottomNavigation className='bottom-nav'>
      <BottomNavigationAction component={Link} to='/' icon={<TranslateIcon />} />
      <BottomNavigationAction component={Link} to='/practice' icon={<PlayCircleFilledIcon />} disabled />
      <BottomNavigationAction component={Link} to='/vocabulary' icon={<ListAltIcon />} />
    </BottomNavigation>
  );
};

export default BottomNav;
