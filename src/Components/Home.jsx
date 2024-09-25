import React from 'react';
import 'font-awesome/css/font-awesome.min.css';


const Home = () => {
  return (
   <>
      <div className='bg-primary w-full h-[500px] custom-shadow p-4 flex items-center relative '>
        <h1 className='text-3xl text-secondary text-center ml-9'> A room without a book is like  <br/> a body without soul.</h1>
        <img src='../images/books.jpg'alt='' className='w-1/2 mt-8'/>
      </div>
      <div className='absolute top-[95px] right-[150px] text-center'>
        <h2 className='text-secondary'>Find Your Book</h2>
        <div className='flex items-center justify-center'>
            <input type='text' placeholder='Enter your Book Name'/>
            <button className='bg-white text-white  px-2 '>< i class="fas fa-search"></i></button>
        </div>
       
      </div> 
   </>
  );
}

export default Home;
