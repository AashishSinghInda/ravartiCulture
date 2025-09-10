"use client"
// import Image from "next/image";
// import "flowbite";
// import { useEffect } from "react";
import Header from './common/Header'
import { FaArrowRight } from "react-icons/fa";

export default function Home() {

/*  useEffect(() => {
    import("flowbite"); // Flowbite JS load
  }, []);  */

  return (
    <>
    <Header/>

   <div className='bg-[url("/images/banner_optimized.png")] bg-cover bg-center h-[80vh] w-full flex flex-col justify-around items-center '>
     <h1 className='text-center lg:text-7xl text-4xl  customfont text-white '>
      ADD A <span className='text-[#EEBD2B] '>FRESH TOUCH </span> TO <br />
              YOUR WARDROBE WITH</h1>
      <h2 className='textcolor text-center lg:text-8xl text-6xl customfont'>RAVARTI <br />
          CULTURE</h2>
        <button className='text-white bg-gradient-to-r to-[#e77240] from-[#d53f3d] p-[10px_25px] rounded-3xl font-semibold flex justify-center items-center gap-[10px] mx-auto my-[40px] text-xl cursor-pointer'>SHOP NOW <FaArrowRight /></button>
        </div>

 
  {/*    <div className='relative'>
          <img src="images\banner_optimized.png"  alt="" className='  banner-image-h h-[80vh] w-[100%] '/>
          <div className='absolute top-0 lg:left-[50%] lg:translate-x-[-50%] max-sm:text-center lg:py-[90px] max-sm:py-[40px]'>
          <h1 className=' py-[30px] lg:text-6xl max-sm:text-3xl  text-white font-semibold  lg:leading-18 max-sm:leading-10 customfont' >ADD A <span className='text-[#EEBD2B]'>FRESH TOUCH </span> TO <br />
              YOUR WARDROBE WITH</h1>
          <h2 className='  lg:text-[100px] max-sm:text-[40px]  font-semibold max-sm:leading-10 lg:leading-22  text-center text-[#DE7B30] customfont  '>RAVARTI <br />
          CULTURE</h2>
          <button className='text-white bg-gradient-to-r to-[#e77240] from-[#d53f3d] p-[10px_25px] rounded-3xl font-semibold flex justify-center items-center gap-[10px] mx-auto my-[20px] text-xl cursor-pointer'>SHOP NOW <FaArrowRight /></button>
        </div>
        </div>  */}





    </> 
  )
}
