import React from 'react'
import AboutImg from '../../assets/AboutImg.jpeg'
const About = () => {
  return (
    
    <div className='bg-secondary_bg_color p-[8%]'>
        <div className='flex  items-center justify-center mb-10'>
        <h1 className='text-[46px] my-[-3px] font-bold text-main_bg_color'>About <span className='text-[#0ef]'>Me</span></h1>
        </div>

        <div className=' flex items-center justify-between '>
       <div className='w-[500px]'>
        <img src={AboutImg} alt={AboutImg} className='w-full h-full object-cover ' />
       </div>
       <div className='w-[600px]'>
        
        <h3 className='text-3xl font-bold text-main_bg_color '>Frontend Developord</h3>
        <p className='text-[20px]  text-main_bg_color leading-6  font-normal'>ey there, Im MD Arafat Mai, a Computer Science graduate and certified frontend web developer with over 3 years of hands-on experience. I specialize in turning ideas into reality through HTML, CSS, JavaScript, React, Next.js, GSAP, Three.js, WordPress, and Webflow.

Throughout my career, Ive served as a frontend engineer and project manager at leading agencies such as 5D Solutions LLC, Unchained Robotics, and Uptrend Agency. With a track record of developing frontend solutions for over 59 websites, I bring a wealth of expertise to every project.

Lets collaborate and bring your project to life. Drop me a message, and let's get started!

#FrontendDeveloper #WebDevelopment #HTMLCSS #JavaScript #ReactJS #NextJS #GSAP #ThreeJS #WordPress #Webflow...



</p>
<div className='mt-3'> <button className='py-3 px-8 text-[20px] font-bold bg-[#0ef] border-2 border-[#0ef] hover:text-[#0ef] rounded-md hover:bg-transparent '>
              More About Me
        </button></div>
       </div>
    </div>
    </div>
  )
}

export default About