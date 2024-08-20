import React from "react";

function About() {
  return (
    <div className="w-full py-16  bg-[#cdea68] rounded-tl-3xl rounded-none≠tr-3xl text-black">
      <h1 className='px-20 font-["Neue Montreal"] text-[4vw] leading-[4.5vw] tracking-tight'>
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>

      <div className="w-full border-t-[1px] border-[#a1b562] mt-20 flex items-center justify-between px-20">
        <div className="mb-[16vw] mr-36">
          <p className="font-light">What you can expect:</p>
        </div>
        <div className="w-[20vw] font-light mt-[1vw]">
          <p>
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it's live or digital,
            delivered for one or a hundred people. <br /> <br />
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </p>
        </div>
        <div className="mr-16 font-light">
          <p>
            S:
            <p>Instagram</p>
            <p>Behance</p>
            <p>Facebook</p>
            <p>Linkedin</p>
          </p>
        </div>
      </div>

      <div className="w-full border-t-[1px] pt-10 border-[#a1b562] mt-24 flex ">
        <div className="w-1/2 px-20 -mt-8">
          <h1 className="text-[4vw]">Our Approach:</h1>
          <button className="px-10 py-6 mt-4 bg-zinc-900 rounded-full uppercase text-white flex gap-10 items-center">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>

        <div className="w-1/2 -mt-4 h-[60vh] ml-20 mr-12 rounded-2xl bg-[url('https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg')] bg-cover bg-center">
        </div>
      </div>
    </div>
  );
}

export default About;
