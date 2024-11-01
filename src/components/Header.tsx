import { Menu, Sun, Moon } from 'lucide-react';
import { useTheme } from "@/components/theme-provider"
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
interface HeaderProps {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}
const Header: React.FC<HeaderProps> = ({isLoggedIn,setIsLoggedIn}) => {
  const { setTheme } = useTheme()
  const navigate = useNavigate()

  const handleLogOut = () => {
    if(isLoggedIn){
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
    navigate('/home')
  }else{
    navigate('/home')
  }
  }

  return (
    <div className='w-full flex-initial flex flex-row justify-between items-center h-20 px-5 fixed top-0 z-50 bg-background'>
        <Menu className='cursor-pointer' onClick={handleLogOut}/>   
        <Link to='/Home'><button className='border-none rounded-xl text-xl font-bold select-none'>Expense Tracker</button></Link>
        
        <Sun className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 cursor-pointer" onClick={() => setTheme("light")}/>
        <Moon className="absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 cursor-pointer" onClick={() => setTheme("dark")}/>
    </div>
  )
}

export default Header