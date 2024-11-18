import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"
import { Card } from './ui/card'
import {   PencilIcon, ReceiptEuro, Utensils, ShoppingCart, ShoppingBasket, Banknote, House, TrainFront } from 'lucide-react';
import { Separator } from '@radix-ui/react-separator';
import EditRecord from './EditRecord';
interface RecordProps{
  id: any;
  amount: string;
  datetime: string;
  description: string;
  name: string;
  categoryId: any;
  type: string;
  categories: any;
  setRefresh:any;
}
const Record:React.FC<RecordProps> = ({id, amount, datetime, description, name, categoryId, type, categories, setRefresh}) => {

  let date = new Date(datetime)
  let formattedDate = date.toDateString() 
  //console.log(categoryId)
  return (
    <div className='group flex w-full items-center justify-around pl-4'>
      <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3`} style={{ backgroundColor: `hsl(var(--chart-${name}))` }}>
        {name == 'shopping' &&<ShoppingCart className='w-5 h-5 text-white'/>}
        {name == 'groceries' &&<ShoppingBasket className='w-5 h-5 text-white'/>}
        {name === 'rent' &&<House className='w-5 h-5 text-white'/>}
        {name === 'salary' &&<ReceiptEuro className='w-5 h-5 text-white'/>}
        {name === 'food' &&<Utensils className='w-5 h-5 text-white'/>}
        {name === 'transfers' &&<Banknote className='w-5 h-5 text-white'/>}
        {name === 'transportation' &&<TrainFront className='w-5 h-5 text-white'/>}
      </div>
        <div className=' flex w-11/12 items-center justify-around py-4 border-b-2 '>
          <div className='flex flex-col w-1/4 gap-3'>
            <p className='font-bold'>{name[0].toUpperCase() + name.slice(1)}</p>
            <p className='overflow text-sm text-muted-foreground'>{description}</p>
          </div>
          <div  className='flex flex-col w-2/3 gap-3 text-right'>
            <p className={`font-bold ${type === 'income' && ''} `}>€ {amount}</p>
            <p className='overflow text-sm text-muted-foreground'>{formattedDate}</p>
          </div>
          <Separator />
        </div>
        <div className='w-8 h-8  hover:bg-muted rounded-full flex items-center justify-center ml-3'>
        <EditRecord id = {id} amount ={amount} description = {description} name={name} categoryId={categoryId} type = {type} categories={categories} setRefresh={setRefresh}/>
      </div>
    </div>
  )
}

export default Record

{/* <div className="flex items-center space-x-4">
<Skeleton className="h-12 w-12 rounded-full" />
<div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
</div>
</div> */}