import AccountCard from '@/components/AccountCard'
import AddExpense from '@/components/AddExpense'
import AddIncome from '@/components/AddIncome'

import { getUserBalance, getCategories, getUserMovements, addUserExpense, addUserIncome } from '@/api/api'
import { useEffect, useState } from 'react'
const Account = () => {
  const [userId, setUserId] = useState(null)
  const [balance, setBalance] = useState(0)
  const [categoriesChart, setCategoriesChart] = useState({amount: {
                                                  label: "amount",
                                                }} )
  const [movementsChart, setMovementsChart] = useState([])
  const [categories, setCategories] = useState([])
  const [movements, setMovements] = useState([])
  const [refresh, setRefresh] = useState(false)

  const handleAddExpense  =  async (user_id : number, amount:number, category_id:number, description:string) => {
    //console.log('A')
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
      
      const response = await getUserMovements(userId)
      const mvm = await response.json()
      setMovements(mvm)
      //console.log(mvm)
      if(mvm){
        const groupedSums = mvm.reduce((acc, transaction) => {
            const { name, amount, type } = transaction;
            
            if (type === 'expense'){
            // Initialize the category in the accumulator if not already present
            if (!acc[name]) {
                acc[name] = 0;
            }
            // Add the amount to the appropriate category
            acc[name] += parseFloat(amount);
          }
            return acc;
        }, {});
        
        //console.log(groupedSums);
        const groupedSumsKeys = Object.keys(groupedSums)
        const formatedGroupedSums = groupedSumsKeys.map(g => {
          //console.log({category: g, amount:groupedSums[g], fill:  `var(--color-${g})`})
          return {category: g, amount:groupedSums[g], fill:  `var(--color-${g})`}
        })
        //console.log(formatedGroupedSums)
        setMovementsChart(formatedGroupedSums)
        // setMovementsChart(mvm.map((m: { type: string; name: any; amount: string }) => {
        //   if(m.type === 'expense'){
        //     return {category: m.name, amount: parseFloat(m.amount), fill: `var(--color-${m.name})`}
        //   }
        // }))
      }
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
    <div className='w-11/12 sm:px-10 sm:w-[600px] pt-[100px] bg-background flex flex-col'>
      <AccountCard balance={balance} categories={categoriesChart} movements={movementsChart}/>
      <div className='flex flex-row items-center justify-center mt-5'>
        <AddExpense categories={categories} handleAddExpense={handleAddExpense} userId={userId}/>
        <AddIncome categories={categories} handleAddIncome={handleAddIncome} userId={userId}/>
      </div>
    </div>
  )
}

export default Account