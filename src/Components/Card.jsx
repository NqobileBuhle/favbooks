import React, { useState } from "react";
import BookDetails from "./BookDetails";
import { MdFavorite } from "react-icons/md";

const Card = ({ book }) => {
  const[show,setShow]=useState(false);
  const[bookItem,setItem]=useState();
  return (
    <>
      {
      book.map((items) => {
        let thumbnail=items.volumeInfo.imageLinks && items.volumeInfo.imageLinks.smallThumbnail;
        let amount=items.saleInfo.listPrice && items.saleInfo.listPrice.amount;
        if (thumbnail!=undefined && amount !=undefined)
        return (
          < >

            <div  onClick={() => {setShow(true),setItem(items)}} className="bg-secondary transition duration-500   hover:scale-90 hover:bg-white ">
              <img
                src={thumbnail}
                alt=""
                className=" w-full h-full   text-center relative overflow-hidden rounded-lg p-1"
                
               />
               <MdFavorite className="absolute top-2 right-2 text-xl text-red-400" />
                
              
              
              {/* <div className="flex flex-col">
                <h3 className="text-sm mb-3">{items.volumeInfo.title}</h3>
                <div>
                  <button className="bg-primary text-secondary text-sm  relative mb-4">AddToFavorites</button></div>

                <p className='absolute bottom-1.5 left-2.5 right-1.5 bg-primary text-secondary font-bold" style="font-size:13px '>&#8377;{amount}</p>
                
              
                
              </div> */}
              
            </div>
            
            
            <BookDetails show={show} items={bookItem} onClose={()=>setShow(false)}/>
            
              
          </>
          
        );
        

      })
      }
      
    </>
    
  );
};

export default Card;
