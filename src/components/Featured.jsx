import { motion } from "framer-motion";
import React from "react";
import Fcard from "./Fcard";

function Featured() {
  return (
    <div className="w-full py-28">
                          {/* heading  */}
      <div className="w-full px-20 border-b-[1px] border-zinc-600 pb-12">
        <h1 className='text-7xl font-["Neue Montreal"] tracking-tighter'>
          Featured Projects
        </h1>
      </div>
                        {/* cards  */}
      <div>
        <Fcard
          img1="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
          img2="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
          title1="fyde"
          title2="vise"
          title3="fyde"
          title4="vise"
          left1="audit"
          left2="copyright"
          left3="sales deck"
          left4="slides deck"
          right1="agency"
          right2="company presentations"
        />

        <Fcard 
          img1="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png"
          img2="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png"
          title1="CARDBOARD SPACESHIP"
          title2="hello"
          title3="CARDBOARD SPACESHIP"
          title4="AH2 & MATTHORN"
          left1="branded template"
          left2="sales deck"
          left3="social template"
          left4="try"
          right1="pitch deck"
          right2="seminars"
        />
      </div>
                        {/* bottom  */}
      <button className="px-8 py-4 mt-24 ml-[39vw] bg-zinc-100 rounded-full uppercase text-black flex gap-10 items-center">
        view all case studies
        <div className="w-2 h-2 bg-zinc-900 rounded-full"></div>
      </button>
    </div>
  );
}

export default Featured;
