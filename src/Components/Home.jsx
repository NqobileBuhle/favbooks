import React, { useContext, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Card from "../Components/Card";
import axios from "axios";
import { useAppContext } from "./context/appContext";

const Home = () => {
 

  return (
    // <header className="relative w-full h-full bg-cover bg-center  style={{ backgroundImage: `url(${coverB})`}} mb-3 ">
    // <div className=" w-full h-full  bg-primary overflow-hidden relative  ">
    //   <div className=" relative z-10 text-white p-8 ">
    //     <h4 className="ml-5 font-poppins text-2xl text-secondary text-center mr-16">
    //       A room without a book is like <br/> a body without soul.<br />Find Yours Now!
    //     </h4>
    //     </div>
    //     <div className="flex flex-col-3 gap-5 w-full mb-8">
    //     <img src="../images/books.jpg" alt="" className="w-1/4    " />
    //     <img src="../images/library.jpg" alt="" className="w-1/4   " /> 
    //     <img src="../images/bookDesign.jpg" alt="" className="w-1/4   " />
    //   </div>
      
      
    // </div>
    // </header>
    <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    
    <img
      src="../images/books.jpg" alt=""
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="../images/library.jpg" alt=""
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="../images/bookDesign.jpg" alt=""
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  {/* <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> */}
</div>
  );
};

export default Home;

