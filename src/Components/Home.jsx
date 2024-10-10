import React, { useContext, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Card from "./Card";
import axios from "axios";
import { useAppContext } from "./context/appContext";

const Home = () => {
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
    <div className="">
      <div className="bg-primary w-full h-full custom-shadow p-8 flex items-center relative">
        <h1 className="text-3xl text-secondary text-center ml-9">
          A room without a book is like <br /> a body without soul.
        </h1>
        <img src="../images/books.jpg" alt="" className="w-1/4 mt-8 ml-96  " />
      </div>

      <div className="absolute top-[95px] right-[150px] text-center p-12 md:ml-0">
        <h2 className="text-secondary text-4xl">Find Your Book</h2>
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
    </div>
  );
};

export default Home;

