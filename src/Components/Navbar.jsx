
import { Link, useLocation } from 'react-router-dom';
import React, { useContext, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Card from "../Components/Card";
import axios from "axios";
import { useAppContext } from "./context/appContext";

const Navbar = () => {
  // const location = useLocation();

  // const titles = {
  //   '/': 'LATEST BOOKS',
  //   '/favorites': 'YOUR FAVORITE BOOKS',
  //   '/about': 'READ MORE ABOUT US'
  // };
  
  // const title = titles[location.pathname] || '';
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);

  const {favorites,addToFavorites,removeFromFavorites}=useAppContext();

  console.log('Favorites are',favorites)

  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search + "&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU" +"&maxResults=40"
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };

  return (
    <nav className='bg-secondary p-2 mb-2 text-center justify-end  md:ml-0'>
      
        <div className='flex items-center'>
          <img src="/images/library.jpg" alt="Logo" className='h-10 ' />
          <span className='text-[24px] font-bold'>
            <Link to='/'>eBOOKS</Link>
          </span>
        </div>
        <div className="">
        <h2 className="text-primary text-4xl">Find Your Book</h2>
        <div className="flex items-center justify-center">
          <input
            type="text"
            placeholder="Enter your Book Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={searchBook}
          />
          <button className="bg-white text-white px-2 ">
            <i className="fas fa-search text-gray-400"></i>
          </button>
        </div>
      </div>
        
      <div className="w-[650px] mx-auto mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 box-border mb-4">
      {<Card book={bookData} />}
      </div>
      
    </nav>
  );
};

export default Navbar;


