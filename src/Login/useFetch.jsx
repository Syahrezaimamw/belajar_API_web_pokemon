import React, { useEffect, useState } from 'react'
import axios from 'axios'
const useFetch = (url) => {
    const [data,setData]=useState([])
    const [isPending,setPending]=useState(true)
    const [isError,setError]=useState(null)
   async function datas(){
    return await axios.get(url)
    .then((a)=>{
        console.log(a)
        setPending(false)
        setData(a.data)}
        )
        .catch(a=>{
            setPending(false)

            if(a.status > 200){
               
                throw new Error( setError('ada yang salah'))
            }
            setError(a)
        })
    }
   useEffect(()=>{
    datas()
   },[])
  
    return {data,isPending,isError}
}

export default useFetch
