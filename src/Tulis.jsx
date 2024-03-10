import React, { useContext } from 'react'
import { appContext } from './Belajar'
const Tulis = () => {
    const nama=useContext(appContext)
    const data=nama.name
    console.log(nama)
  return (
    <div>
        <input type="text" onChange={(e)=>nama.dispatch({type:'gantiNama',isian:e.target.value})} />
      
    </div>
  )
}

export default Tulis
