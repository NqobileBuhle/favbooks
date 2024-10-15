import React, { useContext, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Card from "../Components/Card";
import axios from "axios";
import { useAppContext } from "./context/appContext";

const Home = () => {
 

  return (
    
    <div className=" w-full h-full object-cover bg-primary custom-shadow">
      <div className="  p-8 flex items-center relative mb-2">
        <h1 className=" font-Poppins text-3xl text-secondary text-center ml-9 ">
          A room without a book is like <br /> a body without soul.
        </h1>
        <img src="../images/books.jpg" alt="" className="w-1/4 mt-8 ml-96  " />
      </div>
      
    </div>
  );
};

export default Home;

