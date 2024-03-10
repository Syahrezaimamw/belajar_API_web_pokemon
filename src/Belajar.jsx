import React, { createContext, useContext, useReducer } from 'react'
import Thema from './Thema'
export const appContext=createContext({
        name:"no name",
        kelas:'no class'
    })
    // export const datas=()=>{
    //     return datas=useContext(appContext)
    // }
const Belajar = () => {


    function handle(value,options){
        switch(options.type){
            case "change name":
                return{...value,name:'nganga'}
                case"aritmatika":
                return{...value,kelas:value.kelas + 1}
        }
        console.log('hello world')
    }
    const [value,dispatch]=useReducer(handle,{name:'udin nganga',kelas:1})

  return (
    <appContext.Provider value={[value,dispatch]}>
        
    <div>
        <div>
            <p className='m-0'>
                
        nama:{value.name}
            </p>
            <p>

        kelas: {value.kelas}
            </p>

        </div>
        <Thema/>
        hello world
      
    </div>
    </appContext.Provider>
  )
}

export default Belajar
