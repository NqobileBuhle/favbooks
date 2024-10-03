import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


const BookDetails = ({show,items,onClose}) => {
  if(!show)
  {
    return null;
  }
  let thumbnail=items.volumeInfo.imageLinks && items.volumeInfo.imageLinks.smallThumbnail;
  return (
    <>
    <div className='min-h-screen w-full fixed left-0 right-0 top-0 bottom-0 bg-gradient-to-br from-black/20 to-black/10 flex items-center justify-center'>
      <div className='bg-white w-[700px] h-[550px] p-2 relative box-border overflow-hidden text-[1.3rem]'>
        <button onClick={onClose} className='absolute top-4 right-4 outline-none border-none text-[17px] bg-transparent'><i className='fas fa-times'></i> </button>
        <div className='mt-8 flex justify-center'>
          <img className='mr-8 w-[150px] h-[200px] pb-2' src={thumbnail} alt=''/>
          <div className='info'>
            <h1 className='font-bold'>{items.volumeInfo.title}</h1>
            <h3 className='mt-2 text-green-600 p-4'>{items.volumeInfo.authors}</h3>
            <h4 className='text-blue-600 p-4'>{items.volumeInfo.publisher}<span>{items.volumeInfo.publishedDate}</span></h4>
            <a href={items.volumeInfo.previewLink}>< button className='outline-none border-none w-[80px] rounded-[5px] bg-blue-400 text-white p-[0.1rem] ml-4'>More</button></a>

          </div>

        </div>
            <h4 className='mt-8 text-sm text-justify'>{items.volumeInfo.description}</h4>
       

      </div>

    </div>
      
    </>
  );
}

export default BookDetails;
