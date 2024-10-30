
import { Card, CardContent } from './ui/card'
import { Utensils, Beer, HandCoins, ShoppingBasket, TrainFront } from 'lucide-react'

const records = [
    {
        type: "bar",
        comment: "Beers at pub",
        amount: 200
    },
    {
        type: "food",
        comment: "Dinner at dominos",
        amount: 20
    },
    {
        type: "salary",
        comment: "Monthly payment",
        amount: 2000
    },
]
const TransactionHistory = () => {
  return (
    <div className='flex flex-col gap-1 items-center justify-center'>
        {records.map(r => (
            <Card className='w-[300px]'>
                <CardContent className='flex flex-row items-center justify-between p-5'>
                    <div className='flex'>
                       { r.type === 'bar' && <Beer className='mr-2'/> }
                       { r.type === 'food' && <Utensils className='mr-2'/> }
                       { r.type === 'salary' && <HandCoins className='mr-2'/> }
                        <h3>{r.type}</h3>
                    </div>
                    <p>€ {r.amount}</p>
                </CardContent>
            </Card>
        ))}
    
    </div>
  )
}

export default TransactionHistory