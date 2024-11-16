import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
// import { depositFunds } from '../api/api'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
// import { useToast } from '../components/ui/use-toast'
import { LoaderCircle } from 'lucide-react';
import { Plus } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { CategoriesSelect } from './CategoriesSelect';
// import { DialogClose } from '@radix-ui/react-dialog'

const AddIncome = ({categories, handleAddIncome, userId}:any) => {
  const [amount, setAmount] = useState('')
  const [description, setDescription] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [categoryId, setCategoryId] = useState(null)
//   const { toast } = useToast()
  // const { setUpdate } = useOutletContext<any>()
  const navigate = useNavigate()

  // const handleDeposit = async() => {
  //   navigate('/account')
  // }
  return (
      <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger><Plus className='w-10 h-10 m-2 rounded-full border-2 p-1 border-slate-700 cursor-pointer'/></DialogTrigger>
      <DialogContent className='p-10'>
        <DialogHeader>
          <DialogTitle>Add Income</DialogTitle>
          <DialogDescription>
            <div className="grid w-full items-center gap-4 mt-5">
              <div className="flex flex-col space-y-1.5 items-start">
                {/* <Label htmlFor="email">Email</Label> */}
                <Input id="amount" placeholder="Amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
                <Input id="description" placeholder="Description" type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
                <CategoriesSelect categories={categories} setCategoryId={setCategoryId} type="income"/>
              </div>
              {/* <DialogClose asChild> */}
                <Button disabled = {amount === '' || isLoading} onClick={() => {
                  handleAddIncome(userId, amount, categoryId, description)
                  setAmount('')
                  setDescription('')
                  setCategoryId(null)
                  setOpen(false)}}>
                {isLoading && <LoaderCircle className="h-4 w-4 mx-2 animate-spin"/>}
                {!isLoading && "Add Income"}
                </Button>
              {/* </DialogClose> */}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>

  )
}

export default AddIncome