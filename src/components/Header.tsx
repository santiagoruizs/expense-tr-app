import { Menu, Sun, Moon } from 'lucide-react';
// import { useState } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='w-full flex-initial flex flex-row justify-between items-center h-20 px-5 fixed top-0 z-50 bg-background'>
        <Menu className='cursor-pointer'/>   
        <Link to='/Home'><button className='border-none rounded-xl text-xl font-bold select-none'>Expense Tracker</button></Link>
        
        <Sun className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 cursor-pointer" />
        <Moon className="absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 cursor-pointer" />
    </div>
  )
}

export default Header