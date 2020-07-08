import React from 'react';

import { Card as MUICart, CircularProgress } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import StarIcon from '@material-ui/icons/Star';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';

const Card = ({ saved = false, loading = false }) => {
  return (
    <MUICart className={saved ? 'card saved' : 'card'}>
      <CardActionArea>

      <div className='card-header'>
        <div className='card-header-langs'>
          <div>EN</div>
          <ChevronRightIcon className='card-header-langs-icon'/> 
          <div>pl</div>
        </div>
        <div className='card-header-status'>
          <div className='card-header-status-text'>{ loading ? 'Loading...' : saved ? 'Saved' : 'Tap to save' }</div>
          { loading ? <CircularProgress size={12} thickness={6} color='inherit'/> : <StarIcon className='card-header-status-icon'/> }
        </div>
      </div>

      <div className='card-from'>
        <h3 className='card-from-word'>translation</h3>
        <p className='card-from-example'>Lorem ipsum dolor sit amet, consectuer adipiscing elit. </p>
      </div>

      <div className='card-to'>
        <SubdirectoryArrowRightIcon fontSize='small'/>
        <div className='card-to-wrapper'>
          <h3 className='card-to-word'>Lorem</h3>
          <p className='card-to-example'>Lorem ipsum dolor sit amet, consectuer adipiscing elit. </p>
        </div>
      </div>
      </CardActionArea>
    </MUICart>
  );
};

export default Card;