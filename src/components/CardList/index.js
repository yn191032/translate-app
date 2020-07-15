import React from 'react';

import Card from './Card';
import { useSearchContext } from '../../contexts/SearchContext';

const CardList = () => {
  const { result } = useSearchContext();

  return (
    <>
      <div className='list-header'>{result.length} cards was found</div>
      <ul className='list'>
        {
          result.map(card => 
            <li key={card.hash} className='list-item'>
              <Card card={card} />
              </li>
          )
        }
      </ul>
      <div className='list-bottom'>end</div>
    </>
  );
};

export default CardList;