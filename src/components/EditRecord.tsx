import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
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
import { editExpense, editIncome } from '@/api/api';

interface EditRecordProps{
    id:string;
    amount: string;
    description: string;
    name: string;
    type: string;
    categoryId: any;
    setRefresh: any;
  }
const EditRecord = ({id,amount, datetime, description, name, categoryId, type, categories, setRefresh}:any) => {
    const [editedAmount, setEditedAmount] = useState(amount)
    const [editedDescription, setEditedDescription] = useState(description)
    const [isLoading, setIsLoading] = useState(false)
    const [open, setOpen] = useState(false)
    const [newCategoryId, setNewCategoryId] = useState('0')
    const handleEditRecord = async() => {
      if(type === 'income'){
        const parsedIncomeId = parseInt(id)
        const parsedCategoryId = parseInt(newCategoryId)
        const parsedAmount = parseFloat(editedAmount)
        const response = await editIncome(parsedIncomeId, parsedCategoryId ,parsedAmount, editedDescription)
        if(response.ok){
          setRefresh((prev: any)=>!prev)
          setOpen(false)
        }
         
      }else if(type === 'expense'){
        const parsedExpenseId = parseInt(id)
        const parsedCategoryId = parseInt(newCategoryId)
        const parsedAmount = parseFloat(editedAmount)
        const response = await editExpense(parsedExpenseId, parsedCategoryId ,parsedAmount, editedDescription)
        if(response.ok){
          setRefresh((prev: any)=>!prev)
          setOpen(false)
        }
      }   
      
    }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
    <DialogTrigger><PencilIcon className='w-5 h-5 hidden group-hover:block hover:cursor-pointer'/></DialogTrigger>
    <DialogContent className='p-10'>
      <DialogHeader>
        <DialogTitle>Edit {type}</DialogTitle>
        <DialogDescription>
          <div className="grid w-full items-center gap-4 mt-5">
            <div className="flex flex-col space-y-1.5 items-start">
              <Input id="amount" placeholder="Amount" type="number" value={editedAmount} onChange={(e) => setEditedAmount(e.target.value)} className='text-foreground'/>
              <Input id="description" placeholder="Description" type="text" value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} className='text-foreground'/>
              <CategoriesSelect categories={categories} setCategoryId={setNewCategoryId} type={type} categoryId={categoryId}/>
            </div>
              <Button disabled = {editedAmount === '' || editedDescription === '' || newCategoryId === '0' || isLoading } onClick={handleEditRecord}>
              {isLoading && <LoaderCircle className="h-4 w-4 mx-2 animate-spin"/>}
              {!isLoading && "Edit Record"}
              </Button>
              <Button variant='destructive'>
                Delete Record
              </Button>
          </div>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
  )
}

export default EditRecord