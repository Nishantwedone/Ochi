import { motion, useAnimation } from "framer-motion";
// import {Power4} from "gsap/all";
import React, { useState } from "react";

function Fcard(props) {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index)=>{
    cards[index].start({y:"0"});
  }
  const handleHoverEnd = (index)=>{
    cards[index].start({y:"100%"});
  }

  return (
    <div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div
          onHoverStart={()=> handleHover(0)}
          onHoverEnd={()=> handleHoverEnd(0)}
            className="cardcontainer relative w-1/2 h-[70vh]"
          >
            {/* heading of card 1 */}
            <div className="headingOfcard flex justify-start items-center gap-2 mb-4">
              <div className="bg-zinc-100 rounded-full w-3 h-3"></div>
              <p className="font-light uppercase">{props.title1}</p>
            </div>
            {/* card 1 */}
              {/* {"FYDE".split("").map((item, index) => (
                <motion.span initial={{y:"100%"}} className="inline-block">{item}</motion.span>
              ))} */}
              <h1 className="absolute overflow-hidden text-[#cdea68] z-[9] text-7xl leading-none tracking-tighter right-0 translate-x-1/2 top-1/2 -translate-y-1/2">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  // animate={isHovering ? { y: "0" } : { y: "100%" }}
                  transition={{ease: [0.22, 1, 0.36, 1], delay: .08} }
                  className="inline-block text-7xl uppercase"
                >
                  {props.title3}
                </motion.span>
                {/* {"FYDE".split("").map((item, index) => (
                  <span className="block-item">{item}</span>
                ))} */}
              </h1>
            <div className="card h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full  bg-cover"
                src={props.img1}
                alt=""
              />
            </div>
          </motion.div>

          {/* containrew 2 */}
          <motion.div 
          onHoverStart={()=> handleHover(1)}
          onHoverEnd={()=> handleHoverEnd(1)}
          className="cardcontainer relative w-1/2 h-[70vh]">
            <div className="headingOfCard flex justify-start items-center gap-2 mb-4">
              <div className="bg-zinc-100 rounded-full w-3 h-3"></div>
              <p className="font-light uppercase">{props.title2}</p>
            </div>

            
              <h1 className="absolute overflow-hidden flex text-[#cdea68] z-[9] text-7xl leading-none tracking-tighter right-full translate-x-1/2 top-1/2 -translate-y-1/2">
                <motion.span 
                initial={{ y: "100%" }}
                animate={cards[1]}
                transition={{ease: [0.22, 1, 0.36, 1], delay: .08} }
                className="block-item text-7xl uppercase">
                  {props.title4}
                </motion.span>
                {/* {"VISE".split("").map((item, index) => (
                  <span>{item}</span>
                ))} */}
              </h1>
              <div className="card w-full h-full rounded-xl overflow-hidden">
              <img className="w-full h-full bg-cover" src={props.img2} alt="" />
            </div>
          </motion.div>
        </div>
        {/* bottom  */}
        <div className="bottom mt-16 flex justify-between items-center gap-20">
          <div className="leftcard flex gap-3 uppercase tracking-tighter leading-none w-1/2">
            <h1 className="border-zinc-400 border-[1px] rounded-full px-2 py-1
            hover:bg-zinc-100 hover:text-black">
              {props.left1}
            </h1>
            <h1 className="border-zinc-400 border-[1px] rounded-full px-3 py-1
            hover:bg-zinc-100 hover:text-black">
              {props.left2}
            </h1>
            <h1 className="border-zinc-400 border-[1px] rounded-full px-3 py-1
            hover:bg-zinc-100 hover:text-black">
              {props.left3}
            </h1>
            <h1 className="border-zinc-400 border-[1px] rounded-full px-3 py-1
            hover:bg-zinc-100 hover:text-black">
              {props.left4}
            </h1>
          </div>

          <div className="rightcard flex gap-3 uppercase tracking-tighter leading-none w-1/2">
            <h1 className="border-zinc-400 border-[1px] rounded-full px-3 py-1
            hover:bg-zinc-100 hover:text-black">
              {props.right1}
            </h1>
            <h1 className="border-zinc-400 border-[1px] rounded-full px-3 py-1
            hover:bg-zinc-100 hover:text-black">
              {props.right2}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fcard;
