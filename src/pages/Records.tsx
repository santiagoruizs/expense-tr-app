
import RecordList from '@/components/RecordsList'
import { getUserMovements } from '@/api/api'
import { useEffect, useState } from 'react'
interface RecordsProps {
    movements: any;
  }
  

const Records:React.FC<RecordsProps> = ({movements}) => {
    const [parsedMovements, setParsedMovements] = useState([])
    //const [userId, setUserId] = useState(second)
    useEffect(() => {
        const getMovements = async (userId:number) => {
            const response = await getUserMovements(userId)
            const mvm = await response.json()
            setParsedMovements(mvm)
            //console.log(mvm)
        }
        const userId = localStorage.getItem('userId') 
        const userIdInt = parseInt(userId ? userId : '0')
        if (userId){
        const userIdInt = parseInt(userId)
        getMovements(userIdInt)
    }
    },[])

    return (
            <RecordList movements={parsedMovements}/>
    )
    }

export default Records