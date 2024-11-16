import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
// import { depositFunds } from '../api/api'
import { useState } from 'react'
// import { useToast } from '../components/ui/use-toast'
import { LoaderCircle } from 'lucide-react';
import { PencilIcon } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { CategoriesSelect } from './CategoriesSelect';
import { TypeSelect } from './TypeSelect';
interface EditRecordProps{
    amount: string;
    description: string;
    name: string;
    type: string;
  }
const EditRecord = ({amount, datetime, description, name, type}:any) => {
    const [editedAmount, setEditedAmount] = useState(amount)
    const [editedDescription, setEditedDescription] = useState(description)
    const [editedDatetime, setEditedDatetime] = useState(datetime)
    const [isLoading, setIsLoading] = useState(false)
    const [open, setOpen] = useState(false)
    const [categoryId, setCategoryId] = useState(1)
    const [typeId, setTypeId] = useState(type)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
    <DialogTrigger><PencilIcon className='w-5 h-5 hidden group-hover:block hover:cursor-pointer'/></DialogTrigger>
    <DialogContent className='p-10'>
      <DialogHeader>
        <DialogTitle>Edit Record</DialogTitle>
        <DialogDescription>
          <div className="grid w-full items-center gap-4 mt-5">
            <div className="flex flex-col space-y-1.5 items-start">
              {/* <Label htmlFor="email">Email</Label> */}
              <TypeSelect setTypeId = {setTypeId} type={type}/>
              <Input id="amount" placeholder="Amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
              <Input id="description" placeholder="Description" type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
              <CategoriesSelect categories={[]} setCategoryId={setCategoryId} type="income"/>
            </div>
            {/* <DialogClose asChild> */}
              <Button disabled = {amount === '' || isLoading} onClick={() => {
                setEditedAmount('')
                setEditedDescription('')
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

export default EditRecord