import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { LoaderCircle } from 'lucide-react';
import { userLogin } from "@/api/api";
import { FormEvent, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useToast } from "@/hooks/use-toast"
import { useAuth } from "@/context/AuthContext";

const Login = () => {
  const { toast } = useToast()
  const { setIsLoggedIn } = useOutletContext<any>();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    setIsLoading(true)
    event.preventDefault();  
    const payload = {username, password}
    console.log("Logging in with:", {payload});
    try {
      const res = await userLogin(username, password)
      const data = await res.json()
      if(!res.ok){
        toast({
          variant: "destructive",
          title: "Log In",
          description: data.message,
        })
        throw new Error(data.message)
      }
      console.log(data)
      toast({
        title: "Log In",
        description: data.message,
      })
      setIsLoading(false)
      login(data.username, data.user_id)
    } catch (error) {
      toast({
        variant: 'destructive',
        title: "Log In",
        description: "There was an error in the request"
      })
      console.error('Error:', error)
      setIsLoading(false)
    }
  }

  return (
    <div className="flex-auto flex items-center justify-center">
    <Card className="w-[350px] border-none">
      <CardHeader>
        <CardTitle className="text-center">Log In</CardTitle>
        <CardDescription className="text-center">Provide your credentials to log in.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={(e) => handleLogin(e)}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5 items-start">
              {/* <Label htmlFor="email">Email</Label> */}
              <Input id="username" placeholder="Username" type="text" onChange={e => setUsername(e.target.value)}/>
            </div>
            <div className="flex flex-col space-y-1.5 items-start">
                {/* <Label htmlFor="password">Password</Label> */}
                <Input id="password" placeholder="Password" type="password" onChange={e => setPassword(e.target.value)}/>
            </div>
            <Button disabled={isLoading || !username || !password}>
              {isLoading && <LoaderCircle className="h-4 w-4 mx-2 animate-spin"/>}
             {!isLoading && "LogIn"}
              </Button>
          </div>
        </form>
      </CardContent>
    </Card>
    </div>
  );
};

export default Login;
