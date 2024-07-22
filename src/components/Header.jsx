import React from 'react';
import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header className='bg-slate-200 shadow nd'>
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to={'/'}>
        <h1 className='font-bold text-sm: text-xl flex-wrap'>
            <span > Online Judge</span>
            <span> by Bidesh</span>
        </h1>
        </Link>

        
    
        <form className='text-black-700 bg-slate-100 p-3 rounded-lg flex items-center' >
            <input type="text" placeholder='Search Problems' className='bg-transparent focus outline-none w-24 sm:w-64'/>
            <FaSearch className='text-slate-600'/>
        </form>
        <ul className='flex gap-4'>
        <Link to='/'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
        </Link>
        <Link to='/sign-in'>
            <li className='hover:underline'>Sign In</li>
        </Link>
        <Link to='/about'>
            <li className='hidden sm:inline hover:underline'>About</li>
        </Link>
            
            
        </ul>
    </div>
        
    </header>
  )
}

export default Header
