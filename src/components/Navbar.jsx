import React from 'react'
import {logo } from '../assets'
const Navbar = () => {
  return (
    <div className='bg-black   h-[10vh] flex justify-center items-center border-b-[1px] border-[#A5A5A5] '>
        <img src = {logo} alt = "logo"  className=' max-w-[70px] z-[1] aspect-auto '/>
        </div>
  )
}

export default Navbar