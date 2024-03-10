import React, { useState } from 'react'
import logo from '../Images/download.png'
import Bulet from '../Images/boola.png'
import Terbuka from '../Images/downloads.jpg'
import { useRef } from 'react'
const Na = () => {
    const ball=useRef(null)
    const kotak=useRef(null)
    const lebar=useRef(null)
    const isi=useRef(null)
    const [kondisi,setKondisi]=useState(true)
    const [gambarTak,setGambarTak]=useState(Bulet)
    function handleball(){
        if(kondisi==true){

            ball.current.classList.toggle('pokeballDom')
            kotak.current.classList.toggle('kotakDom')
            lebar.current.classList.toggle('lebarDom')
            setTimeout(()=>{
                setGambarTak(Terbuka)
                
                isi.current.classList.toggle('isiDom')
                setKondisi(false)
            },1000)
        }else{
            setTimeout(()=>{
                setGambarTak(Bulet)
                ball.current.classList.toggle('pokeballDom')
                kotak.current.classList.toggle('kotakDom')
                lebar.current.classList.toggle('lebarDom')
                
                setKondisi(true)
            },1000)
            isi.current.classList.toggle('isiDom')
        }


    }
  return (
    <div className='container-fluid bg-white d-flex justify-content-center' style={{height:"150px"}}>
        <div className='col-10 p-0 position-relative d-flex justify-content-between align-items-center' >
            <div className='col-2'>
            <img src={logo} alt=""className='img-fluid' />
            </div>
            <div className='me-5  d-flex justify-content-start kotak 'ref={kotak} style={{height:'60px',zIndex:99}}>
                <img src={gambarTak} className='img-fluid h-100 pokeball ' alt="" onClick={handleball} ref={ball} style={{zIndex:99}}/>

            </div>
            <div className='position-absolute me-5 py-1 lebar '  style={{right:0,bottom:48}} ref={lebar}></div>
            <div className=' position-absolute me-5 isi' style={{right:0,zIndex:99,width:"403px"}} ref={isi}>

    
            </div>
        </div>
      
    </div>
  )
}

export default Na
