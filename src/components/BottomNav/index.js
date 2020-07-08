import React from 'react';
import { Link } from 'react-router-dom';

import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';

import TranslateIcon from '@material-ui/icons/Translate';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

const BottomNav = () => {
  return (
    <BottomNavigation className='bottom-nav'>
      <BottomNavigationAction to='/' component={Link} label="Translate" value="translate" icon={<TranslateIcon />} />
      <BottomNavigationAction disabled to='/practice' component={Link} label="Practice" value="practice" icon={<PlayCircleFilledIcon />} />
      <BottomNavigationAction to='/vocabulary' component={Link} label="Vocabulary" value="vocabulary" icon={<ListAltIcon />} />
    </BottomNavigation>
  );
};

export default BottomNav;
