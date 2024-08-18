import { motion } from 'framer-motion';
import React from 'react'
// arrow import below
import { FaArrowUp } from "react-icons/fa6";

function LandingPage() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-52 px-20'>
            {["we create","eye-opening","presentations"].map((item,index) =>{
                return (
            <div className="masker">
                <div className='w-fit flex items-center'>
                    {/* {index===1 && (<div className='w-[6.5vw] h-[5vw] relative bg-red-500'></div>)} */}
                    {index===1 && (
                        <motion.div 
                        initial={{width:0}} 
                        animate={{width:"7vw"}} 
                        transition={{ease:[0.76, 0, 0.24, 1], duration:1}} 
                        className='mr-[1vw] w-[7vw] rounded-md h-[5vw] relative bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] bg-cover bg-center'>

                        </motion.div>)}
                    
                <h1 className='flex items-center uppercase text-[6.5vw] h-full leading-[6vw] tracking-tighter font-["Founders Grotesk"] font-medium'>{item}</h1>
                {/* <h1 className='pt-[2vw] -mb-[1vw] uppercase text-[8.5vw] leading-[.7]  font-["Founders Grotesk"]'>{item}</h1> */}
                </div>
            </div>
                );
            })}
        </div>
        <div className='border-t-[1px] border-zinc-700 mt-20 flex justify-between items-center py-5 px-20'>
            {["For public and private companies" , "From the first pitch to IPO"].map((item,index)=>(
                <p className='text-md font-light tracking-tight leading-none '>{item}</p>
            ))}
            <div className="start flex items-center gap-5">
                    <div className='py-2 px-5 border-[1px] border-zinc-400 rounded-full font-light text-sm uppercase '>start the project
                    </div>
                    <div className='w-10 h-10 rounded-full border-[1px] border-zinc-400 flex items-center justify-center'>
                    <span className='rotate-[45deg]'>
                    <FaArrowUp />
                    </span>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage
