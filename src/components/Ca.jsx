import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Ctx } from '../Context/Ctx';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Loading from './Loading';
import './sty.css'
import Modal from 'react-bootstrap/Modal';

import axios from 'axios';
const Ca = ({name,index,url,next,prev,loading,setloadingg}) => {
    const pr=useContext(Ctx)
    async function urll(){
        return await  axios.get(url)
        .then(a=>a.data.sprites)
    }
    const [gambar,setGambar]=useState([])
    const [move,setMove]=useState([])
    useEffect(()=>{
        urll().then((a)=>{
            setGambar(a)
            setTimeout(() => {
                pr(false)
            }, 2000);          
        })
    },[next,prev])

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <Card style={{ width: '18rem' }} key={index} className='mt-5 rounded-1 position-relative'>
        <div className=' col-12' style={{height:"240px"}}>
            {loading == true ?        <Loading/>:<></>}
     
        <Swiper
      spaceBetween={50}
      slidesPerView={1}
      className='h-100 cr'
      onSlideChange={() => {}}
      onSwiper={(swiper) =>swiper}
    >
      <SwiperSlide className='d-flex justify-content-center align-items-center h-100' ><img src={gambar.front_default}  className="img-fluid h-100"alt="" /></SwiperSlide>
      <SwiperSlide className='d-flex justify-content-center align-items-center h-100'><img src={gambar.back_default}  className="img-fluid h-100"alt="" /></SwiperSlide>
      <SwiperSlide className='d-flex justify-content-center align-items-center h-100'><img src={gambar.front_shiny}  className="img-fluid h-100"alt="" /></SwiperSlide>
      <SwiperSlide className='d-flex justify-content-center align-items-center h-100'><img src={gambar.back_shiny}  className="img-fluid h-100"alt="" /></SwiperSlide>
      ...
    </Swiper>
        </div>
    {/* <Card.Img variant="top" src={gambar} /> */}
    <Card.Body>
      <Card.Title className='fw-bold'>{name}</Card.Title>
      <div>
        <div className='d-flex align-items-center  justify-content-lg-between'>
        <a className='p-0 m-0 showdetail text-decoration-none text-dark' style={{cursor:'pointer'}} onClick={handleShow}>

       Show Detail
        </a>
       <button className='border-0 rounded-1 fw-bold px-2 py-1 ' style={{backgroundColor:"rgb(244,196,4)",color:'rgb(66,105,173)'}}>Select Card</button>
       </div>   
      </div>
      
    
    </Card.Body>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
       
      </Modal>
  </Card>
  )
}

export default Ca
