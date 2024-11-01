import AccountCard from '@/components/AccountCard'
import AddExpense from '@/components/AddExpense'
import AddIncome from '@/components/AddIncome'
// import TransactionHistory from '@/components/TransactionHistory'


const Account = () => {
  return (
    <div className='w-11/12 sm:px-10 sm:w-[600px] pt-[100px]'>
      <AccountCard />
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