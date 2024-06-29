import React from 'react'
import CountUp from 'react-countup';
import { FaHtml5,FaCss3Alt,FaBootstrap,FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
const Skills = () => {
   

  return (
    <div className='bg-secondary_bg_color px-[8%] py-10' >
        <div>
            <div className='flex justify-center'>
                <h1 className='text-[46px] mb-10 font-bold text-main_bg_color'>My <span className='text-[#0ef]'>Skills</span></h1>
            </div>
            <div >
                <div className='mb-8 '>
                    <h2 className='text-3xl font-bold text-main_bg_color '>Technical Skills</h2>
                    <div className='w-[220px] h-1 bg-white'></div>
                </div>
                
               <div className='flex flex-col justify-start gap-y-4'>
                <div className='flex items-center gap-x-10'>
                     <div className='w-[250px]'>
                    <FaHtml5 className='text-3xl font-bold text-[#af0808] '/>
                    <span className='text-3xl font-bold text-main_bg_color '>HTML</span>
                </div>
                <div className='w-full'>
                
          
                 <h2 class="text-white font-bold text-2xl">
                  <CountUp start={0} end={95} duration={3.75}></CountUp>%</h2>
       
                
                 <div className=' bg-black w-[40%] h-2 rounded-full overflow-hidden'>
                    <div className='bg-green-400 h-2 w-[95%] slisparsenLeft'></div>

                </div>
                </div>
               
                </div>
                <div className='flex items-center gap-x-10'>
                     <div className='w-[250px]'>
                    <FaCss3Alt className='text-3xl font-bold text-[#27aa39] '/>
                    <span className='text-3xl font-bold text-main_bg_color '>CSS</span>
                </div>
                <div className='w-full'>
                
          
                 <h2 class="text-white font-bold text-2xl">
                  <CountUp start={0} end={90} duration={3.75}></CountUp>%</h2>
       
                
                 <div className='bg-black w-[40%] h-2 rounded-full overflow-hidden'>
                    <div className='bg-green-400 h-2 w-[90%] slisparsenLeft'></div>

                </div>
                </div>
               
                </div>
                <div className='flex items-center gap-x-10'>
                     <div className='w-[250px]'>
                    <FaBootstrap className='text-3xl font-bold text-[#9031bd] '/>
                    <span className='text-3xl font-bold text-main_bg_color '>Bootstrap 5</span>
                </div>
                <div className='w-full'>
                
          
                 <h2 class="text-white font-bold text-2xl">
                  <CountUp start={0} end={80} duration={3.75}></CountUp>%</h2>
       
                
                 <div className='bg-black w-[40%] h-2 rounded-full overflow-hidden'>
                    <div className='bg-green-400 h-2 w-[80%] slisparsenLeft'></div>

                </div>
                </div>
               
                </div>
                <div className='flex items-center gap-x-10'>
                     <div className='w-[250px]'>
                    <RiTailwindCssFill className='text-3xl font-bold text-[#5ac9d1] '/>
                    <span className='text-3xl font-bold text-main_bg_color '>Tailwind CSS </span>
                </div>
                <div className='w-full'>
                
          
                 <h2 class="text-white font-bold text-2xl">
                  <CountUp start={0} end={85} duration={3.75}></CountUp>%</h2>
       
                
                 <div className='bg-black w-[40%] h-2 rounded-full overflow-hidden'>
                    <div className='bg-green-400 h-2 w-[85%] slisparsenLeft'></div>

                </div>
                </div>
               
                </div>
                <div className='flex items-center gap-x-10'>
                     <div className='w-[250px]'>
                    <IoLogoJavascript className='text-3xl font-bold text-[#fff23d] '/>
                    <span className='text-3xl font-bold text-main_bg_color '>JavaScript </span>
                </div>
                <div className='w-full'>
                
          
                 <h2 class="text-white font-bold text-2xl">
                  <CountUp start={0} end={70} duration={3.75}></CountUp>%</h2>
       
                
                 <div className='bg-black w-[40%] h-2 rounded-full overflow-hidden'>
                    <div className='bg-green-400 h-2 w-[70%] slisparsenLeft'></div>

                </div>
                </div>
               
                </div>
                <div className='flex items-center gap-x-10'>
                     <div className='w-[250px]'>
                    <FaReact className='text-3xl font-bold text-[#0ef] '/>
                    <span className='text-3xl font-bold text-main_bg_color '>React JS </span>
                </div>
                <div className='w-full'>
                
          
                 <h2 class="text-white font-bold text-2xl">
                  <CountUp start={0} end={90} duration={3.75}></CountUp>%</h2>
       
                
                 <div className='bg-black w-[40%] h-2 rounded-full overflow-hidden'>
                    <div className='bg-green-400 h-2 w-[90%] slisparsenLeft'></div>

                </div>
                </div>
               
                </div>

               </div>
                
            </div>
        </div>
        <div>
            <div className='my-10'>
            <h2 className='text-3xl  font-bold text-main_bg_color '>Technical Skills</h2>
            <div className='w-[220px] h-1 bg-white'></div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='w-[200px] h-[200px]'>
                    
                    <div className=' relative flex items-center justify-center  w-[160px] h-[160px]'>
                        <div className='w-[150px] h-[150px]   bg-black rounded-full flex items-center justify-center '>
                        <div className='w-[130px] h-[130px] bg-secondary_bg_color border-2 border-black rounded-full flex items-center justify-center '>
                        <h2 class="text-white font-bold text-2xl">
                         <CountUp start={0} end={90} duration={3.75}></CountUp>%
                         </h2>
       
                        </div>
                        </div>
                        <svg xmlns='http://www.w3.org/2000/svg' version='1.1' className='w-[160px] h-[160px] absolute top-0 left-0'>
                        {/* <defs>
                            <linearGradient id='GradientColor'>

                            </linearGradient>
                        </defs> */}
                        <circle cx={"80"} cy={"80"} r={"70"} stroke-linecap="round" className='path' ></circle>
                        </svg>  
                    </div>
                     <h4 className='text-2xl font-bold text-white flex justify-center'>Creativity</h4>
                    
                </div>
                <div className='w-[200px] h-[200px]'>
                    
                    <div className=' relative flex items-center justify-center  w-[160px] h-[160px]'>
                        <div className='w-[150px] h-[150px]   bg-black rounded-full flex items-center justify-center '>
                        <div className='w-[130px] h-[130px] bg-secondary_bg_color border-2 border-black rounded-full flex items-center justify-center '>
                        <h2 class="text-white font-bold text-2xl">
                         <CountUp start={0} end={60} duration={3.75}></CountUp>%
                         </h2>
       
                        </div>
                        </div>
                        <svg xmlns='http://www.w3.org/2000/svg' version='1.1' className='w-[160px] h-[160px] absolute top-0 left-0'>
                        {/* <defs>
                            <linearGradient id='GradientColor'>

                            </linearGradient>
                        </defs> */}
                        <circle cx={"80"} cy={"80"} r={"70"} stroke-linecap="round" className='path1'></circle>
                        </svg>  
                    </div>
                     <h4 className='text-2xl font-bold text-white flex justify-center'>Communication</h4>
                    
                </div>
                <div className='w-[200px] h-[200px]'>
                    
                    <div className=' relative flex items-center justify-center  w-[160px] h-[160px]'>
                        <div className='w-[150px] h-[150px]   bg-black rounded-full flex items-center justify-center '>
                        <div className='w-[130px] h-[130px] bg-secondary_bg_color border-2 border-black rounded-full flex items-center justify-center '>
                        <h2 class="text-white font-bold text-2xl">
                         <CountUp start={0} end={75} duration={3.75}></CountUp>%
                         </h2>
       
                        </div>
                        </div>
                        <svg xmlns='http://www.w3.org/2000/svg' version='1.1' className='w-[160px] h-[160px] absolute top-0 left-0'>
                        {/* <defs>
                            <linearGradient id='GradientColor'>

                            </linearGradient>
                        </defs> */}
                        <circle cx={"80"} cy={"80"} r={"70"} stroke-linecap="round" className='path2'></circle>
                        </svg>  
                    </div>
                     <h4 className='text-2xl font-bold text-white flex justify-center'>Problem solving</h4>
                    
                </div>
                <div className='w-[200px] h-[200px]'>
                    
                    <div className=' relative flex items-center justify-center  w-[160px] h-[160px]'>
                        <div className='w-[150px] h-[150px]   bg-black rounded-full flex items-center justify-center '>
                        <div className='w-[130px] h-[130px] bg-secondary_bg_color border-2 border-black rounded-full flex items-center justify-center '>
                        <h2 class="text-white font-bold text-2xl">
                         <CountUp start={0} end={85} duration={3.75}></CountUp>%
                         </h2>
       
                        </div>
                        </div>
                        <svg xmlns='http://www.w3.org/2000/svg' version='1.1' className='w-[160px] h-[160px] absolute top-0 left-0'>
                        {/* <defs>
                            <linearGradient id='GradientColor'>

                            </linearGradient>
                        </defs> */}
                        <circle cx={"80"} cy={"80"} r={"70"} stroke-linecap="round" className='path3'></circle>
                        </svg>  
                    </div>
                     <h4 className='text-2xl font-bold text-white flex justify-center'>Teamwork</h4>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills