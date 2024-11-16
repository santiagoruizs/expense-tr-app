import AccountCard from '@/components/AccountCard'
import AddExpense from '@/components/AddExpense'
import AddIncome from '@/components/AddIncome'

import { getUserBalance, getCategories, addUserExpense, addUserIncome, getDayUserExpenses, getWeekUserExpenses, getMonthUserExpenses } from '@/api/api'
import { useEffect, useState } from 'react'
const Account = () => {
  const [userId, setUserId] = useState(null)
  const [balance, setBalance] = useState(0)
  const [categoriesChart, setCategoriesChart] = useState({amount: {
                                                  label: "amount",
                                                }} )
  const [movementsChart, setMovementsChart] = useState([])
  const [categories, setCategories] = useState([])
  const [expensesSum, setExpensesSum] = useState({
                                                  'day': [],
                                                  'week': [],
                                                  'month': []
                                                  })
  const [refresh, setRefresh] = useState(false)

  const handleAddExpense  =  async (user_id : number, amount:number, category_id:number, description:string) => {
    //console.log({user_id, amount, category_id, description})
    const response = await addUserExpense(user_id, amount, category_id, description)
    const data = await response.json()
    if(!response.ok){
      throw new Error(`There was an error in the request : ${data.message}`)
    }
    //console.log('expense tracked correctly')
    setRefresh(prev => !prev)
  }

  const handleAddIncome =  async (user_id : number, amount:number, category_id:number, description:string) => {
    const response = await addUserIncome(user_id, amount, category_id, description)
    const data = await response.json()
    if(!response.ok){
      throw new Error(`There was an error in the request : ${data.message}`)
    }
    //console.log('Income Registered correctly')
    setRefresh(prev => !prev)
  }

  useEffect(() => {
    const getAccountBalance = async (userId:number) => {
      
      const response = await getUserBalance(userId)
      const balance = await response.json()
      //console.log(balance.balance)
      setBalance(balance.balance)
    }
    const getCategoriesInfo = async () => {
      
      const response = await getCategories()
      const cat = await response.json()
      setCategories(cat)
      //console.log(cat)
      if(cat){
        cat.map((c, i) => {
          setCategoriesChart(prev => ({...prev, [c.name] : {label: c.name, color: "hsl(var(--chart-"+i+"))"}}))
        })
      }
    }
    const getMovements = async (userId:number) => {
      const resDay = await getDayUserExpenses(userId)
      const resWeek = await getWeekUserExpenses(userId)
      const resMonth = await getMonthUserExpenses(userId)

      const day = await resDay.json()
      const week = await resWeek.json()
      const month = await resMonth.json()

      const formatedDay = day.map(d => {
        return {category: d.name, amount: parseFloat(d.sum), fill:  `var(--color-${d.name})`}
      })
      const formatedWeek = week.map(d => {
        return {category: d.name, amount: parseFloat(d.sum), fill:  `var(--color-${d.name})`}
      })
      const formatedMonth = month.map(d => {
        return {category: d.name, amount: parseFloat(d.sum), fill:  `var(--color-${d.name})`}
      })

      setExpensesSum({
        'day': formatedDay,
        'week': formatedWeek,
        'month': formatedMonth
      })
    }
    const userId = localStorage.getItem('userId') 
    const userIdInt = parseInt(userId ? userId : '0')
    const userName = localStorage.getItem('username') 
    setUserId(userIdInt)
    if (userId){
      const userIdInt = parseInt(userId)
      getAccountBalance(userIdInt)
      getMovements(userIdInt)
      getCategoriesInfo()
    } 
    
  },[refresh])

  return (
    <div className='flex-1 flex flex-col gap-5 w-11/12 sm:px-10 sm:w-[600px] items-center justify-center'>
      <AccountCard balance={balance} categories={categoriesChart} movements={movementsChart} expenses = {expensesSum}/>
      <div className='flex flex-row items-center justify-center'>
        <AddExpense categories={categories} handleAddExpense={handleAddExpense} userId={userId}/>
        <AddIncome categories={categories} handleAddIncome={handleAddIncome} userId={userId}/>
      </div>
    </div>
  )
}

export default Account