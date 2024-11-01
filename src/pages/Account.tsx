import AccountCard from '@/components/AccountCard'
import AddExpense from '@/components/AddExpense'
import AddIncome from '@/components/AddIncome'
// import TransactionHistory from '@/components/TransactionHistory'
import { getUserBalance } from '@/api/api'
import { useEffect, useState } from 'react'

const Account = () => {
  const [balance, setBalance] = useState(0)

  useEffect(() => {
    const getAccountBalance = async (userId:number) => {
      
      const response = await getUserBalance(userId)
      const balance = await response.json()
      console.log(balance.balance)
      setBalance(balance.balance)
    }
    const userId = localStorage.getItem('userId') 
    if (userId){
      const userIdInt = parseInt(userId)
      getAccountBalance(userIdInt)
    }
    
  },[])

  return (
    <div className='w-11/12 sm:px-10 sm:w-[600px] pt-[100px]'>
      <AccountCard balance={balance}/>
      <div className='flex flex-row items-center justify-center mt-5'>
        <AddExpense />
        <AddIncome />
      </div>
      {/* <h2 className='text-xl font-bold'>Records</h2>
      <div>
       <TransactionHistory /> 
      </div> */}
    </div>
  )
}

export default Account