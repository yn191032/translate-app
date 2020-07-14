import React from 'react';

import { Card as MUICart } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import CardActionArea from '@material-ui/core/CardActionArea';

import StarIcon from '@material-ui/icons/Star';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';

const Card = ({ saved = false, loading = false, card }) => {
  return (
    <MUICart className={saved ? 'card saved' : 'card'}>
      <CardActionArea>
        <div className='card-header'>
          <div className='card-header-langs'>
            <div>{ card.lang.from }</div>
            <ChevronRightIcon className='card-header-langs-icon'/> 
            <div>{ card.lang.to }</div>
          </div>
          <div className='card-header-status'>
            <div className='card-header-status-text'>{ loading ? 'Loading...' : saved ? 'Saved' : 'Tap to save' }</div>
            { loading ? <CircularProgress size={12} thickness={6} color='inherit'/> : <StarIcon className='card-header-status-icon'/> }
          </div>
        </div>

        <div className='card-from'>
          <h3 className='card-from-word'>{ card.to.word }</h3>
          <p className='card-from-example'>{ card.from.example }</p>
        </div>

        <div className='card-to'>
          <SubdirectoryArrowRightIcon fontSize='small'/>
          <div className='card-to-wrapper'>
            <h3 className='card-to-word'>{ card.from.word }</h3>
            <p className='card-to-example'>{ card.to.example }</p>
          </div>
        </div>
      </CardActionArea>
    </MUICart>
  );
};

export default Card;