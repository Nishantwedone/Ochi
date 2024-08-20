import { motion } from 'framer-motion'
import React from 'react'

function Cards() {

  return (
    <div  className='w-full h-screen overflow-hidden'>
      <div data-scroll data-scroll-section data-scroll-speed="-.7" className='w-full h-screen bg-zinc-100 flex items-center gap-5'>
        {/* <div className='border-[1px] border-white mt-20'></div> */}
      <div className="cardcontainer w-1/2 h-[50vh] ml-8">
        <div className='card relative w-full h-full bg-[#004d43] rounded-xl flex items-center justify-center'>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute border-2 rounded-full font-light text-[12px] px-4 py-1 left-10 bottom-10 text-[#cdea68] border-[#cdea68] tracking-tighter'>&copy;2019-2022</button>
        </div>
      </div>
      <div className="cardcontainer w-1/2 h-[50vh] flex gap-5 mr-8">
      <div className='card relative w-1/2 h-full bg-[#2c3d3b] rounded-xl flex items-center justify-center '>
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
        <button className='absolute border-2 uppercase rounded-full text-[12px] px-4 py-1 font-light left-6 bottom-10 border-zinc-300 tracking-tighter'>rating 5.0 on clutch</button>
      </div>
      <div className='card relative w-1/2 h-full bg-[#0c0e0ef2] rounded-xl flex items-center justify-center '>
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        <button className='absolute border-2 uppercase rounded-full px-8  text-[12px] py-1 left-6 bottom-8 font-light border-zinc-300 tracking-tighter'>bussiness bootcamp <br /> alumini</button>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Cards
