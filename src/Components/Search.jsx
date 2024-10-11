import React, { useContext, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Card from "./Card";
import axios from "axios";
import { useAppContext } from "./context/appContext";

const Search = () => {
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
  );
}

export default Search;
