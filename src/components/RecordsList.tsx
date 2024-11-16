import Record from '@/components/Record'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from '@radix-ui/react-separator'

interface RecordlistProps {
    movements: any;
  }


const RecordList:React.FC<RecordlistProps> = ({movements}) => {
    console.log(movements)
  return (
    <Tabs defaultValue="expenses" className="max-w-[600px] w-11/12 h-full flex flex-col justify-center ">
        <TabsList className='w-full'>
            <TabsTrigger value="expenses" className='w-1/2'>Expenses</TabsTrigger>
            <TabsTrigger value="income" className='w-1/2'>Income</TabsTrigger>
        </TabsList>
        <TabsContent value="expenses">
            <Card className="flex flex-col w-full h-[500px]">
                <CardHeader className="items-center pb-0 mb-3">
                    <CardTitle className="text-xl">Expenses Records</CardTitle>
                </CardHeader>
                <CardContent className="pb-0 flex flex-col gap-1 items-center overflow-scroll no-scrollbar">
                    {movements && movements.map(m=> m.type === 'expense' && (<Record amount={m.amount} datetime ={m.datetime} description ={m.description} name ={m.name} type={m.type}/>))}

                </CardContent>
            </Card>
        </TabsContent>
        <TabsContent value="income">
            <Card className="flex flex-col w-full h-[500px]">
                <CardHeader className="items-center pb-0 mb-3">
                    <CardTitle className="text-xl">Income Records</CardTitle>
                </CardHeader>
                <CardContent className="pb-0 flex flex-col gap-1 items-center overflow-scroll no-scrollbar">
                  {movements && movements.map(m=> m.type === 'income' && <Record amount={m.amount} datetime ={m.datetime} description ={m.description} name ={m.name} type={m.type}/>)}
                </CardContent>
            </Card>
        </TabsContent>
    </Tabs>
  )
}

export default RecordList