import React,{useState} from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Favourites from './Components/Favourites';
import { Routes, Route } from 'react-router-dom';
import BookDetails from './Components/BookDetails';

const App = () => {
  const[bookData,setBookData]=useState([]);
  return (
    <>
      <Navbar  />
      
      <Home setBookData={setBookData}/>
      
      <Footer />
      </>
    
  );
}

export default App;
