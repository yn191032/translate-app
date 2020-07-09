import React from 'react';
import VocabularyItem from './VocabularyItem';

const VocabularyList = () => {
  return (
    <>
      <div className='list-header'>4 cards was found</div>
      <ul className='list'>
        <li className='list-item'><VocabularyItem from='complementary' to='translation'/></li>
        <li className='list-item'><VocabularyItem from='function' to='translation'/></li>
        <li className='list-item'><VocabularyItem from='theme' to='translation'/></li>
        <li className='list-item'><VocabularyItem from='spacing' to='translation'/></li>
      </ul>
      <div className='list-bottom'>End</div>
    </>
  );
};

export default VocabularyList;