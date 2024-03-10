import React, { useContext } from 'react'
import { appContext } from './Belajar'
const Thema = () => {
  const [,dispatch]=useContext(appContext)
  return (
    <button onClick={()=>dispatch({type:'aritmatika'})}>ssss</button>
    )
}

export default Thema
