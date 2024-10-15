
import React, { useState } from "react";
import BookDetails from "./BookDetails";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { useAppContext } from "./context/appContext";  

const Card = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState(null);
  
 
  const { addToFavorites } = useAppContext();

  return (
    < div className="h-full w-[650px] mx-auto mt-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-3">
      {book.map((items) => {
        let thumbnail = items.volumeInfo.imageLinks && items.volumeInfo.imageLinks.smallThumbnail;
        let amount = items.saleInfo.listPrice && items.saleInfo.listPrice.amount;
        
        
        if (thumbnail && amount) {
          return (
            <div key={items.id} className="bg-secondary transition duration-500 hover:scale-90 hover:bg-white  ">
              
              <div onClick={() => { setShow(true); setItem(items); }}>
                <img
                  src={thumbnail}
                  alt="Book cover"
                  className="w-full h-full text-center relative overflow-hidden rounded-lg p-1"
                />
              </div>
              
              
              <MdOutlineFavoriteBorder
                onClick={() => addToFavorites(items)}  
                className="absolute top-2 right-2 text-xl text-red-400 cursor-pointer"
              />
  
              <BookDetails show={show} items={bookItem} onClose={() => setShow(false)} />
            </div>
          );
        }

    
      })}
    </div>
  );
};

export default Card;



