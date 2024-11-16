
import { useState } from "react";
import { CreditCard } from 'lucide-react';
import Login from "@/components/Login";
import Signup from "@/components/Signup";
// import Login from "./Login"
// import Signup from "./Signup";
const Home = () => {
  const [loginSignup, setLoginSignup] = useState(false)
  return (
    <div className="w-full flex flex-col items-center justify-center h-full">
      <div className="flex flex-row border-[1px] border-secondary justify-center items-center h-auto lg:h-3/4 rounded-2xl overflow-hidden lg:w-3/5">           
          <div className="w-1/2 hidden lg:flex lg:flex-col items-center justify-center border-r-[1px] border-secondary h-full relative overflow-hidden bg-[#18181B]">
              <div className="relative z-10  flex flex-col items-center justify-start w-full h-full text-white">
                <div className="text-left flex w-full font-bold p-5 items-center"><CreditCard className="w-5 h-5 mr-1"/><p className="">SRBank</p></div>
                <div className=" flex flex-col items-end justify-end  h-full">
                  <p className="lg:text-lg m-5 lg:text-left">
                    Start <strong>smart-tracking</strong> your finances to allow you spend and save in a smart way
                  </p>
                </div>
              </div>
              
          </div>
          
          <div className="w-full lg:w-1/2 min-h-full flex flex-col justify-center items-center">
          <div className="w-full flex items-center justify-end p-5" onClick={() => setLoginSignup(!loginSignup)}><p className="cursor-pointer">{!loginSignup && 'Signup'}{loginSignup && 'Login'}</p></div>
            {!loginSignup && <Login />}{loginSignup && <Signup setLoginSignup={setLoginSignup}/>}
          </div>
        </div>
    </div>
  )
}

export default Home
