import React, { useEffect, useRef, useState } from 'react'
import { getApii, getUsername } from './ambil'

const Login = () => {
    const username=useRef(null)
    const password=useRef(null)
    const [datas,setDatas]=useState({username:'',password:''})
    const data={
        username:datas.username,
        password:datas.password
    }
    // console.log(data)
    useEffect(()=>{
    },[])
    function hanldeLogin(){
        getApii(data,(status, res)=>{
            if(status){
                localStorage.setItem('token',res)
            }else{
                console.log('ini salah',res.response.data)
            }

        })
    }
    const token=localStorage.getItem('token')
    useEffect(()=>{
        getUsername()
        // getUsername(token)
    },[])
    // console.log(token)

  return (
    <div className='container d-flex justify-content-center align-items-center vh-100'>
        <div className=' col-10 h-50  ' style={{border:'1px solid black'}}>
            <h1>Login</h1>
            <label htmlFor="username">username</label>
            <br />
            <input type="text" id='username' onChange={(e)=>{setDatas({...datas,username:e.target.value})}} ref={username}placeholder='username' />
            <br />
            <label htmlFor="password">password</label>
            <br />
            <input type="text" id='password 'onChange={(e)=>{setDatas({...datas,password:e.target.value})}} ref={password}placeholder='password' />
            <br />
            <button onClick={hanldeLogin}>haloo</button>

        </div>
        
      
    </div>
  )
}

export default Login
