import React , {useState , useEffect , useMemo} from 'react';
import axios from 'axios';

const useApi = (url) => {
  const [data , setData] = useState([])
  const [filter , setFilter] = useState(data)
  const [loading , setLoading] = useState(false)
  let componentMounted = true

  useEffect(() => {
    if(data){
      getData(url)
    }

  },[url])

  const getData = async () => {
    setLoading(true)
    const response = await axios.get(url)
    if(componentMounted){
        setData(response.data)
        setFilter(response.data)
        setLoading(false)
      }
      return () => {
        componentMounted = false
      }
  }
  return [data , loading , filter , setFilter]
}

export default useApi
