import React from 'react';

import { Card as MUICart } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import CardActionArea from '@material-ui/core/CardActionArea';

import StarIcon from '@material-ui/icons/Star';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';


const ResultsListItem = ({ item }) => {
  const loading = false;
  
  const save = () => {
    console.log('saved');
  };

  const unsave = () => {
    console.log('unsaved');
  };

  return (
    <MUICart 
      elevation={0} 
      square={true} 
      className={item.saved ? 'card saved' : 'card'}
    >
      <CardActionArea onClick={item.saved ? unsave : save}>
        
        <div className='card-header'>
          <div className='card-header-langs'>
            <div>{ item.lang.from }</div>
            <ChevronRightIcon className='card-header-langs-icon'/> 
            <div>{ item.lang.to }</div>
          </div>
          <div className='card-header-status'>
            <div className='card-header-status-text'>
              { 
                loading ? 'Loading...' 
                : item.saved ? 'Saved' 
                : 'Tap to save' 
              }
            </div>
            { 
              loading ? <CircularProgress size={12} thickness={6} color='inherit'/> 
              : <StarIcon className='card-header-status-icon'/> 
            }
          </div>
        </div>

        <div className='card-phrase'>
          <h4 className='card-phrase-to'>{ item.from.word }</h4>
          <h3 className='card-phrase-from'>{ item.to.word }</h3>
        </div>

        <div className='card-example'>
          <SubdirectoryArrowRightIcon fontSize='small'/>
          <div className='card-example-wrapper'>
            <p className='card-example-from'>{ item.from.example }</p>
            <p className='card-example-to'>{ item.to.example }</p>
          </div>
        </div>

      </CardActionArea>
    </MUICart>
  );
};

export default ResultsListItem;