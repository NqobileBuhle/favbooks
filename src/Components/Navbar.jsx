import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const titles = {
    '/': 'LATEST BOOKS',
    '/favorites': 'YOUR FAVORITE BOOKS',
    '/about': 'READ MORE ABOUT US'
  };
  
  const title = titles[location.pathname] || '';

  return (
    <nav className='bg-secondary p-6 '>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex items-center'>
          <img src="/images/library.jpg" alt="Logo" className='h-10 ' />
          <span className='text-[24px] font-bold'>
            <Link to='/'>eBOOKS</Link>
          </span>
        </div>
        <ul className='flex space-x-8'>
          <li>
            <Link to='/' className='hover:text-yellow-600'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/favorites' className='hover:text-yellow-600'>  {/* Updated the path */}
              Favorites
            </Link>
          </li>
          <li>
            <Link to='/about' className='hover:text-yellow-600'>
              About
            </Link>
          </li>
        </ul>
      </div>
      <h1 className="text-center text-white text-2xl md:text-3xl lg:text-4xl mt-4">{title}</h1>
    </nav>
  );
};

export default Navbar;


