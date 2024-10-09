import React from 'react';
import Home  from '../Components/Home';
import Card from './Components/Card';

const BooksPage = () => {
  return (
    <div>
      <Card isHome={true}/>
      <Home isHome={true}/>
    </div>
  );
}

export default BooksPage;
