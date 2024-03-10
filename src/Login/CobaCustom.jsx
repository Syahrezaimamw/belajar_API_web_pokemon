import React, { useEffect, useState } from 'react'
import useFetch from './useFetch'
import axios from 'axios'
const CobaCustom = () => {
    const {data,isPending,isError}=useFetch('https://fakestoreapi.com/users')
    console.log( data)
    console.log("isPending :" + isPending)
    console.log("isError :" + isError)
   
  
    
  return (
    <div>
        hdadyat
      
    </div>
  )
}

export default CobaCustom
