import Header from '@/components/Header'
import { Outlet, useNavigate } from 'react-router'
import { useState, useEffect } from 'react';


const Layout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {   
    if (localStorage.getItem('isLoggedIn') === 'true') {
      setIsLoggedIn(true);
      navigate('/account')
    }else{
      navigate('/home')
    }
  }, []);

  return (
    <div className='flex flex-col items-center min-h-screen w-screen bg-background text-foreground border-2'>
        <Header isLoggedIn={isLoggedIn}  setIsLoggedIn={setIsLoggedIn}/>
        <Outlet context={{setIsLoggedIn, isLoggedIn}} />
    </div>
  )
}

export default Layout