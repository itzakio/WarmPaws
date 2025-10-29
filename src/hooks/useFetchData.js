import axios from "axios"
import { useEffect, useState } from "react"

const useFetchData = (url) =>{
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    

    useEffect(()=>{
        if(!url) return;
        setLoading(true)
        axios(url)
        .then(data => setData(data.data))
        .catch(err => setError(err))
        .finally(()=> setLoading(false))
    },[url])
    // console.log({services, loading, error})

    return {data, loading, error}
}

export default useFetchData