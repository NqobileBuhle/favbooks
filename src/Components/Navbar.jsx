import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-secondary p-6'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex items-center'>
      
          <img src="/images/books.jpg" alt="Logo" className='h-10 ' />
          <span className='text-[24px] font-bold'>
            <Link to='/'>CodeX</Link>
          </span>
        </div>
        <ul className='flex space-x-8'>
          <li>
            <Link to='/' className='hover:text-yellow-600'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/booklist' className='hover:text-yellow-600'>
              BookList
            </Link>
          </li>
          <li>
            <Link to='/about' className='hover:text-yellow-600'>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

