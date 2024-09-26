import React,{useState} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Card from './Card';
import axios from 'axios';


const Home = () => {
  const[search,setSearch]=useState("");
  const searchBook=(evt)=>{
    if(evt.key==="Enter")
    {
      console.log("hello")
    }
  }
  return (
   <>
      <div className='bg-primary w-full h-[500px] custom-shadow p-6 flex items-center relative '>
        <h1 className='text-3xl text-secondary text-center ml-9'> A room without a book is like  <br/> a body without soul.</h1>
        <img src='../images/books.jpg'alt='' className='w-1/2 mt-8'/>
      </div>
      <div className='absolute top-[95px] right-[150px] text-center p-12'>
        <h2 className='text-secondary'>Find Your Book</h2>
        <div className='flex items-center justify-center'>
            <input type='text' placeholder='Enter your Book Name'
            value={search} onChange={e=>setSearch(e.target.value)}
            onKeyPress={searchBook}/>
            <button className='bg-white text-white  px-2 '>< i class="fas fa-search"></i></button>
        </div>
       
      </div> 
      <div className='w-[650px] mx-auto mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 box-border'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
   </>
  );
}

export default Home;
