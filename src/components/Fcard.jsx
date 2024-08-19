import React from "react";

function Fcard(props) {
  return (
    <div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div className="cardcontainer relative w-1/2 h-[70vh]">
            {/* heading of card 1 */}
            <div className="headingofcard flex justify-start items-center gap-2 mb-4">
              <div className="bg-zinc-100 rounded-full w-3 h-3"></div>
              <p className="font-light uppercase">{props.title1}</p>
            </div>
            {/* card 1 */}
            <div className=" card absolute text-[#cdea68] z-[9] text-7xl leading-none tracking-tighter left-full -translate-x-1/2 top-1/2 -translate-y-1/2">
              {/* {"FYDE".split("").map((item, index) => (
                <motion.span initial={{y:"100%"}} className="inline-block">{item}</motion.span>
              ))} */}
              <h1 className="absolute text-[#cdea68] z-[9] text-7xl leading-none tracking-tighter right-full translate-x-1/2 top-1/2 -translate-y-1/2">
                <span className="block-item text-7xl uppercase">
                  {props.title3}
                </span>
                {/* {"FYDE".split("").map((item, index) => (
                  <span className="block-item">{item}</span>
                ))} */}
              </h1>
            </div>
            <div className="card h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full  bg-cover"
                src={props.img1}
                alt=""
              />
            </div>
          </div>

          {/* containrew 2 */}
          <div className="cardcontainer relative w-1/2 h-[70vh]">
            <div className="headingOfCard flex justify-start items-center gap-2 mb-4">
              <div className="bg-zinc-100 rounded-full w-3 h-3"></div>
              <p className="font-light uppercase">{props.title2}</p>
            </div>

            <div className="card w-full h-full rounded-xl overflow-hidden">
              <h1 className="absolute text-[#cdea68] z-[9] text-7xl leading-none tracking-tighter right-full translate-x-1/2 top-1/2 -translate-y-1/2">
                <span className="block-item text-7xl uppercase">
                  {props.title4}
                </span>
                {/* {"VISE".split("").map((item, index) => (
                  <span>{item}</span>
                ))} */}
              </h1>
              <img className="w-full h-full bg-cover" src={props.img2} alt="" />
            </div>
          </div>
        </div>
        {/* bottom  */}
        <div className="bottom mt-16 flex justify-between items-center gap-20">
          <div className="leftcard flex gap-3 uppercase tracking-tighter leading-none w-1/2">
            <h1 className="border-zinc-400 border-[1px] rounded-full px-2 py-1">
              {props.left1}
            </h1>
            <h1 className="border-zinc-400 border-[1px] rounded-full px-3 py-1">
            {props.left2}
            </h1>
            <h1 className="border-zinc-400 border-[1px] rounded-full px-3 py-1">
            {props.left3}
            </h1>
            <h1 className="border-zinc-400 border-[1px] rounded-full px-3 py-1">
            {props.left4}
            </h1>
          </div>

          <div className="rightcard flex gap-3 uppercase tracking-tighter leading-none w-1/2">
            <h1 className="border-zinc-400 border-[1px] rounded-full px-3 py-1">
            {props.right1}
            </h1>
            <h1 className="border-zinc-400 border-[1px] rounded-full px-3 py-1">
            {props.right2}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fcard;
