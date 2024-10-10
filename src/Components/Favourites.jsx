import React from "react";
import { useAppContext } from "./context/appContext"; // Adjust path as necessary
import { MdRemoveCircle } from "react-icons/md";

const Favorites = () => {
  // Access favorites and removeFromFavorites function from context
  const { favorites, removeFromFavorites } = useAppContext();

  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-4">Your Favorite Books</h1>
      {favorites.length === 0 ? (
        <p>You have no favorite books yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((book) => (
            <div key={book.id} className="relative bg-primary rounded-lg p-3 shadow-lg">
              <img
                src={book.volumeInfo.imageLinks.smallThumbnail}
                alt={book.volumeInfo.title}
                className="w-1/2 h-auto rounded-lg mb-3"
              />
              {/* <h2 className="text-lg font-semibold">{book.volumeInfo.title}</h2>
              <p className="text-sm text-gray-600">{book.volumeInfo.authors?.join(", ")}</p> */}

              {/* Remove from favorites icon */}
              <MdRemoveCircle
                onClick={() => removeFromFavorites(book.id)}
                className="absolute top-2 right-2 text-2xl text-pink-500 cursor-pointer"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;

