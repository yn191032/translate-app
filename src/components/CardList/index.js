import React from 'react';
import Card from './Card';

const CardList = () => {
  return (
    <>
      <div className='list-header'>4 cards was found</div>
      <Card saved={true}/>
      <Card loading={true}/>
      <Card saved={true} loading={true}/>
      <Card/>
      <Card/>
      <div className='bottom'>end</div>
    </>
  );
};

export default CardList;