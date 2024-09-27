import React from "react";

const Card = ({ book }) => {
  console.log(book);
  return (
    <>
      {
      book.map((items) => {
        let thumbnail=items.volumeInfo.imageLinks && items.volumeInfo.imageLinks.smallThumbnail;
        let amount=items.saleInfo.listPrice && items.saleInfo.listPrice.amount;
        if (thumbnail!=undefined && amount !=undefined)
        return (
          <>
            <div className="bg-secondary rounded-lg p-2 sm:p-4 mb-2.5 sm:mb-4 shadow-md transition duration-500 text-center relative transform hover:scale-90 hover:bg-white">
              <img
                src={thumbnail}
                alt=""
                className=" w-full h-[150px] sm:h-[200px] mt-1 sm:mt-2 rounded-t-lg rounded-b-lg bg-secondary p-2 sm:p-4 mb-2.5 sm:mb-4 shadow-md transition duration-500 text-center relative"
              />
              <div className="flex flex-col">
                <h3 className="text-sm mb-3">{items.volumeInfo.title}</h3>
                <p className='absolute bottom-1.5 left-2.5 right-1.5 bg-primary text-secondary font-bold" style="font-size:13px '>&#8377;{amount}</p>
              </div>
            </div>
          </>
        );
      })
      }
    </>
  );
};

export default Card;
