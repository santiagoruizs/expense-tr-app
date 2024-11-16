import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { LoaderCircle, LogOutIcon } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { SidebarMenuButton, SidebarMenuItem } from './ui/sidebar';
import { useAuth } from '@/context/AuthContext';
import { useSidebar } from './ui/sidebar';


export const LogOutDialog = () => {
    const {toggleSidebar} = useSidebar()
    const [open, setOpen] = useState(false)
    const { logout } = useAuth();

    const handleLogOut = () => {
        setOpen(false)
        toggleSidebar()
        logout()
    }
  
  return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
             {/* <Minus className='w-10 h-10 m-2 rounded-full border-2 p-1 border-slate-700 cursor-pointer'/> */}
             <SidebarMenuItem >
                    <SidebarMenuButton asChild>
                        <a href='#'>
                        <LogOutIcon />
                        <span>Logout</span>
                        </a>
                    </SidebarMenuButton>
                </SidebarMenuItem>
        </DialogTrigger>
      <DialogContent className='pt-10 text-center w-[350px]'>
        <DialogHeader className='text-center'>
          <DialogTitle className='text-center mb-2'>Log Out</DialogTitle>
          <DialogDescription className='text-center'>
                Are you sure you want to Log Out?     
            </DialogDescription>      
        </DialogHeader>
            
            <div className='flex flex-row gap-2 items-center justify-center'>
                <Button onClick={() => setOpen(false)} variant="outline">Cancel</Button>
                <Button onClick={handleLogOut} variant="destructive">LogOut</Button>
            </div>  
      </DialogContent>
    </Dialog>

  )
}

export default LogOutDialog