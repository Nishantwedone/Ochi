import { motion } from "framer-motion";
import React from "react";

function Review() {

  return (
    
    <div className="bg-zinc-100 text-black">
      <div className="w-full px-20 border-b-[1px] py-8 border-zinc-300 pb-12">
        <h1 className='text-6xl text-black mt-12 font-["Neue Montreal"] tracking-tighter leading-none'>
          Client's Review
        </h1>
      </div>

      <div className="flex gap-10 justify-around items-center mt-8">
        {["Karman ventures", "Services", "william barnes", "read"].map(
          (item, index) => (
            // ye is index===4 se 4 ke baad gap mil jayega hume
            <a
              href="#"
              key={index}
              className={`text-md capitalize font-light hover:border-b-[1px] py-0.6 border-zinc-500 ease-out delay-75 duration-150 ${
                index === 3 && "ml-48"
              }`}
            >
              {item}
            </a>
          )
        )}
      </div>

      <div className="w-full h-1/2 flex gap-10">
        <div className="w-1/2 ">
          <h1 className="border-zinc-400 ml-[30vw] mt-16 font-light uppercase w-[11vw] mb-[1vh] border-[1px] rounded-full px-2 py-1
           hover:bg-zinc-800 hover:text-white">
            investor deck
          </h1>
          <h1 className="border-zinc-400  ml-[30vw] font-light uppercase w-[9vw] border-[1px] rounded-full px-2 py-1
          hover:bg-zinc-800 hover:text-white">
            sales deck
          </h1>
        </div>
        <div className="w-1/2">
          <img
            className="w-[8vw] rounded-xl mt-20 mb-8"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
            alt=""
          />
          <p className="w-2/3 font-light">
            They were transparent about the time and the stages of the project.
            The end product is high quality, and I feel confident about how they
            were handholding the client through the process. I feel like I can
            introduce them to someone who needs to put a sales deck together
            from scratch, and they would be able to handhold the client
            experience from 0 to 100 very effectively from story to design. 5/5
          </p>
        </div>
      </div>
      <div className="w-full px-20 border-b-[1px] py-4 border-zinc-300  pb-12"></div>

        <div className="flex w-full">
            <div className="left font-light w-1/2">
                <h1 className="w-full px-20 border-b-[1px] py-4 border-zinc-300" >Planetly</h1>
                <h1 className="w-full px-20 border-b-[1px] py-4 border-zinc-300" >Workiz Easy</h1>
                <h1 className="w-full px-20 border-b-[1px] py-4 border-zinc-300" >Premium Blend</h1>
                <h1 className="w-full px-20 border-b-[1px] py-4 border-zinc-300" >Hypercare Systems</h1>
                <h1 className="w-full px-20 border-b-[1px] py-4 border-zinc-300" >Officevibe</h1>
                <h1 className="w-full px-20 border-b-[1px] py-4 border-zinc-300" >Orderlion</h1>
                <h1 className="w-full px-20 border-b-[1px] py-4 border-zinc-300" >PlaBlack Booknetly</h1>
                <h1 className="w-full px-20 border-b-[1px] py-4 border-zinc-300" >PlanTrawa Energyetly</h1>
            </div>
            <div className="right flex w-1/2 ">
                <div className="font-light w-full">
                    <h1 className="w-full px-8 border-b-[1px] py-4 border-zinc-300">Nina Walloch</h1>
                    <h1 className="w-full px-8 border-b-[1px] py-4 border-zinc-300">Tomer Levy</h1>
                    <h1 className="w-full px-8 border-b-[1px] py-4 border-zinc-300">Ellen Kim</h1>
                    <h1 className="w-full px-8 border-b-[1px] py-4 border-zinc-300">Brendan Goss</h1>
                    <h1 className="w-full px-8 border-b-[1px] py-4 border-zinc-300">Raff Labrie</h1>
                    <h1 className="w-full px-8 border-b-[1px] py-4 border-zinc-300">Stefan Strohmer</h1>
                    <h1 className="w-full px-8 border-b-[1px] py-4 border-zinc-300">Jaci Smith</h1>
                    <h1 className="w-full px-8 border-b-[1px] py-4 border-zinc-300">David Budde</h1>
                </div>
                <div className="font-light w-full">
                    <h1 className="w-full px-20 border-b-[1px] py-4 border-zinc-300">READ</h1>
                    <h1 className="w-full px-20 border-b-[1px] py-4 border-zinc-300">READ</h1>
                    <h1 className="w-full px-20 border-b-[1px] py-4 border-zinc-300">READ</h1>
                    <h1 className="w-full px-20 border-b-[1px] py-4 border-zinc-300">READ</h1>
                    <h1 className="w-full px-20 border-b-[1px] py-4 border-zinc-300">READ</h1>
                    <h1 className="w-full px-20 border-b-[1px] py-4 border-zinc-300">READ</h1>
                    <h1 className="w-full px-20 border-b-[1px] py-4 border-zinc-300">READ</h1>
                    <h1 className="w-full px-20 border-b-[1px] py-4 border-zinc-300">READ</h1>
                </div>
            </div>
        </div>
 
    </div>
  );
}

export default Review;
