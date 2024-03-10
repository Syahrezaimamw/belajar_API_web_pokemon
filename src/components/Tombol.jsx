import React from 'react'

const Tombol = ({click}) => {
    console.log(click)
  return (
   <button onClick={click}>
    KLik Here
   </button>
  )
}

export default Tombol
