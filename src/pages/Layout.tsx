import Header from '@/components/Header'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div className='flex flex-col items-center min-h-screen w-screen bg-background text-foreground border-2'>
        <Header />
        <Outlet />
    </div>
  )
}

export default Layout