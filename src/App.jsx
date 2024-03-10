import React, { useEffect, useState } from 'react'
import Ca from './components/Ca'
import { dataPokemon } from './service/api'
import { Ctx } from './Context/Ctx'
import Button from 'react-bootstrap/esm/Button'
import Tombol from './components/Tombol'
import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";
import Na from './components/Na'
const App = () => {
  const [data, setData] = useState([])
  const [param,setParam]=useState(0)
  useEffect(() => {
    dataPokemon(param).then(a =>setData(a))
    console.log(param)
  }, [])
  console.log(param)
  // console.log(data)
  let dataAmbil = {
    name: 'www'
  }

  const [loading,setLoadingg]=useState(false)
function nextPage(){
  setParam(param + 20)
  setLoadingg(true)
}
function previousPage(){
  setParam(param <=0?param - 0: param-20 )
  setLoadingg(true)
  
}
console.log(data)

document.body.style.backgroundColor='rgb(232,232,232)'
  return (
    <Ctx.Provider value={setLoadingg}>
    <>
    <Na/>
      <div className='container p-0 d-flex justify-content-center' >
        <div className='col-xl-12 mt-4  justify-content-between'>
          <div className='col-12 gap-3 justify-content-between d-flex flex-wrap' >

            {
              data.map((a,index) => (
                <div key={index}>


                <Ca name={a.name} index={index} url={a.url} next={nextPage} prev={previousPage}  loading={loading} setLoadingg={setLoadingg}/>

                </div>
              ))
            }


          </div>

      <div className='col-12 d-flex justify-content-end mt-5 pb-4'>

        <button className='border-0 me-3 bg-transparent' onClick={previousPage} ><FaAnglesLeft style={{fontSize:"30px"}} color={'rgb(244,196,4)'}/></button>
        <button className='border-0 bg-transparent' onClick={nextPage}><FaAnglesRight style={{fontSize:"30px"}} color='rgb(244,196,4)'/></button>
      </div>
        </div>
      </div>
      </>
     </Ctx.Provider>
  )
}

export default App
