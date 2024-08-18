import React from "react";

function Featured() {
  return (
    <div className="w-full py-28">
      <div className="w-full px-20 border-b-[1px] border-zinc-600 pb-12">
        <h1 className='text-7xl font-["Neue Montreal"] tracking-tighter'>
          Featured Projects
        </h1>
      </div>

      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div className="cardcontainer relative w-1/2 h-[70vh]">
            <div className="flex justify-start items-center gap-2 mb-4">
              <div className="bg-zinc-100 rounded-full w-3 h-3"></div>
              <p className="font-light">FYDE</p>
            </div>

            <h1 className="absolute text-[#cdea68] z-[9] text-7xl leading-none tracking-tighter left-full -translate-x-1/2 top-1/2 -translate-y-1/2">
              {"FYDE".split("").map((item, index) => (
                <span>{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
                alt=""
              />
            </div>
          </div>

          <div className="cardcontainer relative w-1/2 h-[70vh]">
            <div className="flex justify-start items-center gap-2 mb-4">
              <div className="bg-zinc-100 rounded-full w-3 h-3"></div>
              <p className="font-light">VISE</p>
            </div>

            <div className="card w-full h-full rounded-xl overflow-hidden">
              <h1 className="absolute text-[#cdea68] z-[9] text-7xl leading-none tracking-tighter right-full translate-x-1/2 top-1/2 -translate-y-1/2">
                {"VISE".split("").map((item, index) => (
                  <span>{item}</span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className=" bottom mt-16 flex justify-between items-center gap-20">
          <div className="left flex gap-3 uppercase tracking-tighter leading-none">
            <h1 className="border-zinc-400 border-[1px] rounded-full px-3 py-1">
              audit
            </h1>
            <h1 className="border-zinc-400 border-[1px] rounded-full px-3 py-1">
              copyright
            </h1>
            <h1 className="border-zinc-400 border-[1px] rounded-full px-3 py-1">
              sales deck
            </h1>
            <h1 className="border-zinc-400 border-[1px] rounded-full px-3 py-1">
              slides deck
            </h1>
          </div>

          <div className="right flex gap-3 uppercase tracking-tighter leading-none mr-48">
            <h1 className="border-zinc-400 border-[1px] rounded-full px-3 py-1">
              agency
            </h1>
            <h1 className="border-zinc-400 border-[1px] rounded-full px-3 py-1">
              company presentations
            </h1>
          </div>
        </div>
      </div>
      <button className="px-8 py-4 mt-24 ml-[39vw] bg-zinc-100 rounded-full uppercase text-black flex gap-10 items-center">
            view all case studies
            <div className="w-2 h-2 bg-zinc-900 rounded-full"></div>
          </button>
    </div>
  );
}

export default Featured;
