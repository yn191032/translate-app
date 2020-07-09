import React from 'react';
import Card from './Card';

const CardList = () => {
  return (
    <>
      <div className='list-header'>4 cards was found</div>
      <ul className='list'>
        <li className='list-item'><Card saved={true}/></li>
        <li className='list-item'><Card loading={true}/></li>
        <li className='list-item'><Card saved={true} loading={true}/></li>
        <li className='list-item'><Card/></li>
        <li className='list-item'><Card/></li>
      </ul>
      <div className='list-bottom'>end</div>
    </>
  );
};

export default CardList;