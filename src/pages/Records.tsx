
import RecordList from '@/components/RecordsList'
import { getCategories, getUserMovements } from '@/api/api'
import { useEffect, useState } from 'react'
interface RecordsProps {
    movements: any;
  }
  

const Records:React.FC<RecordsProps> = ({movements}) => {
    const [parsedMovements, setParsedMovements] = useState([])
    const [categories, setCategories] = useState({})
    const [refresh, setRefresh] = useState(false)
    //const [userId, setUserId] = useState(second)
    useEffect(() => {
        const getMovements = async (userId:number) => {
            const response = await getUserMovements(userId)
            const mvm = await response.json()
            setParsedMovements(mvm)
            console.log(mvm)
        }
        const getCategoriesInfo = async () => {
      
            const response = await getCategories()
            const cat = await response.json()
            setCategories(cat)
            //console.log(cat)
            
          }

        const userId = localStorage.getItem('userId') 
        const userIdInt = parseInt(userId ? userId : '0')
        if (userId){
        //const userIdInt = parseInt(userId)
        getCategoriesInfo()
        getMovements(userIdInt)
    }
    },[refresh])

    return (
            <RecordList movements={parsedMovements} categories = {categories} setRefresh = {setRefresh}/>
    )
    }

export default Records