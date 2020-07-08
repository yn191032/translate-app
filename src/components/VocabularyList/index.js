import React from 'react';
import VocabularyItem from './VocabularyItem';

const VocabularyList = () => {
  return (
    <>
      <div className='list-header'>4 cards was found</div>
      <div className='vocabulary-list'>
        <VocabularyItem from='complementary' to='translation'/>
        <VocabularyItem from='function' to='translation'/>
        <VocabularyItem from='theme' to='translation'/>
        <VocabularyItem from='spacing' to='translation'/>
      </div>
      <div className='bottom'>End</div>
    </>
  );
};

export default VocabularyList;