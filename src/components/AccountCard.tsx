import {
    Card,
    CardContent,
    CardHeader,
  } from "@/components/ui/card";
import { WalletMinimal } from "lucide-react";
import CountUp from "react-countup";

const AccountCard = () => {
  return (
    <Card className='mb-5 cursor-pointer p-5'>
        <CardHeader className='flex flex-row justify-between items-center'>
          <h3 className='font-bold text-2xl'>Main Account</h3>
          <WalletMinimal className='w-6'/>
        </CardHeader>
        <CardContent>
            <CountUp
            end={123456789}
            decimal='.' 
            decimals={2} 
            prefix="$"
            duration={1}
            className='font-bold text-2xl'
        />

        </CardContent>
      </Card>
  )
}

export default AccountCard