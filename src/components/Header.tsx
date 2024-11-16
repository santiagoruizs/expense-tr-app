import { Menu, Sun, Moon } from 'lucide-react';
import { useTheme } from "@/components/theme-provider"
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSidebar } from "@/components/ui/sidebar"
import { LogOutDialog } from './LogOutDialog';
import { useAuth } from '@/context/AuthContext';
import { useEffect } from 'react';

// interface HeaderProps {
//   isLoggedIn: boolean;
//   setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
// }
const Header = () => {
  const { setTheme } = useTheme()
  // const navigate = useNavigate()
  const { isAuthenticated } = useAuth()

  const {
    setOpen,
    toggleSidebar,
  } = useSidebar()

  useEffect(() => {
    setOpen(false)
    console.log(isAuthenticated)
  }, [isAuthenticated])

  return (
    <div className='w-full flex-initial flex flex-row justify-between items-center h-20 px-5 top-0 z-50 bg-background'>
        <button className='cursor-pointer' onClick={toggleSidebar} disabled={!isAuthenticated}><Menu /></button>   
        <Link to={isAuthenticated ? '/Account' : '/Home'}><button className='border-none rounded-xl text-xl font-bold select-none'>Expense Tracker</button></Link>
        <Sun className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 cursor-pointer" onClick={() => setTheme("dark")}/>
        <Moon className="absolute right-5 h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 cursor-pointer" onClick={() => setTheme("light")}/>
    </div>
  )
}

export default Header