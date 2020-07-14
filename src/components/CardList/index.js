import React from 'react';
import Card from './Card';
import { useSearchContext } from '../../context/SearchContext';

const CardList = () => {
  const { searchState } = useSearchContext();
  return (
    <>
      <div className='list-header'>{searchState.result.length} cards was found</div>
      <ul className='list'>
        {
          searchState.result.map(card => 
            <li key={card.hash} className='list-item'><Card card={card} /></li>
          )
        }
        {/* <li className='list-item'><Card saved={true}/></li>
        <li className='list-item'><Card loading={true}/></li>
        <li className='list-item'><Card saved={true} loading={true}/></li>
        <li className='list-item'><Card/></li>
        <li className='list-item'><Card/></li> */}
      </ul>
      <div className='list-bottom'>end</div>
    </>
  );
};

export default CardList;