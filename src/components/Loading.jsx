import React from 'react'
import './sty.css'
import Spinner from 'react-bootstrap/Spinner';
const Loading = () => {
  return (
    <div className='rounded-1 loadingg position-absolute d-flex justify-content-center align-items-center w-100' style={{height:"240px",zIndex:99}}>
       <Spinner animation="border" variant='seccondary' size='lg' role="status " style={{color:'gray',fontSize:'19px'}}>
    </Spinner>
      
    </div>
  )
}

export default Loading
