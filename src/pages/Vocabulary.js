import  React from 'react';
import Header from '../components/Header';
import Container from '@material-ui/core/Container';
import VocabularyList from '../components/VocabularyList';

const Vocabulary = () => {
  return (
    <div className="App">
      <Header title='Vocabulary'/>
      <Container className='container'>
        <VocabularyList />
      </Container>
    </div>
  );
};

export default Vocabulary;