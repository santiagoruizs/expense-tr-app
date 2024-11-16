import Header from '@/components/Header'
import { Outlet, useNavigate } from 'react-router'
import { useState, useEffect } from 'react';
import { SideBar } from '@/components/SideBar';
import { AuthProvider } from '@/context/AuthContext';
import { SidebarProvider } from '@/components/ui/sidebar';


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
        <AuthProvider > 
          <SidebarProvider defaultOpen={false}> 
              <SideBar /> 
              <div className='flex flex-col items-center h-screen w-full bg-background text-foreground'>
                  <Header />     
                  <Outlet context={{setIsLoggedIn, isLoggedIn}} />
              </div>
          </SidebarProvider> 
        </AuthProvider>
    
  )
}

export default Layout