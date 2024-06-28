import React from 'react'
import BannereImg from "../../assets/Bannerimg.jpg"

import { FaFacebookF,FaInstagram,FaWhatsapp,FaYoutube } from "react-icons/fa";
const Banner = () => {
   
  return (
    <>
    
  <div className=' relative w-full flex items-center justify-between h-[100vh] pt-16 px-[8%] bg-cover bg-center'>
     <div>
        <h3 className='text-3xl font-bold text-main_bg_color slistexttop'>Hello, Its Me</h3>
        <h1 className='text-[46px] my-[-3px] font-bold text-main_bg_color slistextLeft'>ACCEN ARAFAT</h1>
        <h3 className='text-3xl font-bold text-main_bg_color slistexttop'>And Im a </h3>
        <p className='text-[20px] font-normal text-main_bg_color slistextRight'>Notes about your order, e.g. special notes for delivery. Notes about your order, e.g. special notes for delivery. </p>
      <div className='flex items-center gap-x-5 slistextRight'>
         <a href="#" className='w-10 h-10 rounded-full border-2 border-[#0ef] flex justify-center items-center text-[20px] text-[#0ef] my-5 hover:bg-[#0ef] hover:text-[#000000]'><FaFacebookF/></a>
         <a href="#" className='w-10 h-10 rounded-full border-2 border-[#0ef] flex justify-center items-center text-[20px] text-[#0ef] my-5 hover:bg-[#0ef] hover:text-[#000000]'><FaInstagram/></a>
         <a href="#" className='w-10 h-10 rounded-full border-2 border-[#0ef] flex justify-center items-center text-[20px] text-[#0ef] my-5 hover:bg-[#0ef] hover:text-[#000000]'><FaWhatsapp/></a>
         <a href="#" className='w-10 h-10 rounded-full border-2 border-[#0ef] flex justify-center items-center text-[20px] text-[#0ef] my-5 hover:bg-[#0ef] hover:text-[#000000]'><FaYoutube/></a>
      </div>
      <div className='slistexttop'>
        <button className='py-4 px-8 text-[20px] font-bold bg-[#0ef] border-2 border-[#0ef] hover:text-[#0ef] rounded-md hover:bg-transparent '>
              More About Me
        </button>
      </div>
    </div>
    <div className='max-w-[600px] p-[100px] slistextRight'>
        <img src={BannereImg} alt={BannereImg} className='w-full h-full object-cover rounded-full box_shodoe ' />
    </div>
    
</div>


    </>
  )
}

export default Banner