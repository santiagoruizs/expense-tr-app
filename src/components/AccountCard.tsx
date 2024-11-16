import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"

import ExpenseChart from "./ExpenseChart"

export const description = "A donut chart with text"

interface AccountCardProps {
  balance: number;
  categories: any;
  expenses: any;
}

const AccountCard: React.FC<AccountCardProps>  = ({balance, categories, expenses}) => {
  const [tab, setTab] = useState('month') 

  return (
    <Card className="flex flex-col sm:w-10/12 w-full ">
      <CardHeader className="items-center pb-0 mb-3">
        <CardTitle className="text-2xl">Main Account</CardTitle>
        <CardDescription>Balance - Expenses</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0 ">
        <ExpenseChart categories={categories} chartData={expenses[tab]} balance={balance}/>
        <CardFooter >
          <div className="flex flex-row m-auto gap-3">
            <Badge className="cursor-pointer" variant={tab === 'day' ? 'default' : 'outline'} onClick={() => setTab('day')}>Day</Badge>
            <Badge className="cursor-pointer" variant={tab === 'week' ? 'default' : 'outline'} onClick={() => setTab('week')}>Week</Badge>
            <Badge className="cursor-pointer" variant={tab === 'month' ? 'default' : 'outline'} onClick={() => setTab('month')}>Month</Badge>
          </div>
        </CardFooter>
      </CardContent>
    </Card>
  )

}

export default AccountCard













