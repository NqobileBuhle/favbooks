import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Favourites from './Components/Favourites';
import { Routes, Route } from 'react-router-dom';
import BookDetails from './Components/BookDetails';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/favourites' element={<Favourites />} /> */}
        
      </Routes>
      
      <Footer />
      </>
    
  );
}

export default App;
