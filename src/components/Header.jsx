import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Header() {

    const navigate = useNavigate()

    
  return (
    <div>
        <button className='largeBtn' onClick={()=>{navigate('/')}}>Home</button>
        <button className='largeBtn' onClick={()=>{navigate('/favorite')}}>Favorite</button>
    </div>
  )
}
