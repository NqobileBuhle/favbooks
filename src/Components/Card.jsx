import React, { useState } from "react";
import BookDetails from "./BookDetails";
import { MdFavorite } from "react-icons/md";
import { useAppContext } from "./context/appContext";  // Adjust path as necessary

const Card = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState(null);
  
  // Access the addToFavorites function from context
  const { addToFavorites } = useAppContext();

  return (
    <>
      {book.map((items) => {
        let thumbnail = items.volumeInfo.imageLinks && items.volumeInfo.imageLinks.smallThumbnail;
        let amount = items.saleInfo.listPrice && items.saleInfo.listPrice.amount;
        
        
        if (thumbnail && amount) {
          return (
            <div key={items.id} className="bg-secondary transition duration-500 hover:scale-90 hover:bg-white ">
              
              <div onClick={() => { setShow(true); setItem(items); }}>
                <img
                  src={thumbnail}
                  alt="Book cover"
                  className="w-full h-full text-center relative overflow-hidden rounded-lg p-1"
                />
              </div>
              
              {/* Favorite icon */}
              <MdFavorite 
                onClick={() => addToFavorites(items)}  // Add the specific book to favorites
                className="absolute top-2 right-2 text-xl text-red-400 cursor-pointer"
              />
              
              {/* Book details modal */}
              <BookDetails show={show} items={bookItem} onClose={() => setShow(false)} />
            </div>
          );
        }

        return null;  // Return nothing for books without thumbnail/amount
      })}
    </>
  );
};

export default Card;
