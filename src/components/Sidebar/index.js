import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Drawer from '@material-ui/core/Drawer';
import { SidebarContext } from './context';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Avatar, Chip } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';

const Sidebar = () => {
  const { menu, toggleMenu } = useContext(SidebarContext);

  return (
    <Drawer open={menu} onClose={toggleMenu(false)}>
      <div className='sidebar'>

        <div className='sidebar-profile'>
          <Avatar>
            <AccountCircle/>
          </Avatar>
          <div className='sidebar-profile-name'>Mehmet Oliver</div>
          <Chip
            variant="outlined"
            size="small"
            icon={<StarIcon />}
            label="89 cards"
            color="primary"
          />
        </div>

        <ul className='sidebar-list'>
          <li className='sidebar-list-item'><Link to='/profile' onClick={toggleMenu(false)}>Profile</Link></li>
          <li className='sidebar-list-item disabled'><span>Settings</span></li>
          <li className='sidebar-list-item disabled'><span>Export</span></li>
          <li className='sidebar-list-item disabled'><span>Import</span></li>
          <li className='sidebar-list-item'><Link to='/signup' onClick={toggleMenu(false)}>Sign up</Link></li>
          <li className='sidebar-list-item'><Link to='/login' onClick={toggleMenu(false)}>Log in</Link></li>
          <li className='sidebar-list-item'><Link to='/logout' onClick={toggleMenu(false)}>Log out</Link></li>
          {/* <li className='sidebar-list-item'><Link to='/'>Translate</Link></li> */}
          {/* <li className='sidebar-list-item'><Link to='/vocabulary'>Vocabulary</Link></li> */}
          {/* <li className='sidebar-list-item disabled'><span>Practice</span></li> */}
        </ul>

      </div>
    </Drawer>
  );
};

export default Sidebar;