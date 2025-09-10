"use client"
import Image from "next/image";
import "flowbite";
import React from 'react'
import { useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";

export default function Header() {

      useEffect(() => {
    import("flowbite"); // Flowbite JS load
  }, []);

  return (
    <>
      {/* top header */}
      <div>
    <div className='  bg-gradient-to-r to-[#e77240] from-[#d53f3d]  text-white py-[5px] font-semibold text-center text-[15px]  '>FREE SHIPPING ON DOMESTIC ORDERS ABOVE RS 2,000.</div>
    
    {/* menu header  */}
    <nav className="bg-white  shadow-lg ">
    <div className="max-w-[100%]  flex flex-wrap items-center justify-between lg:px-[40px] px-[20px] mx-auto  ">
    <a href="https://flowbite.com/" className="flex items-center  rtl:space-x-reverse">
        <img src="https://rajasthani-e-boutique.vercel.app/logo.png" className="lg:h-[120px] h-[70px]" alt="Flowbite Logo" />
        
    </a>

   {/* ye only mobile menu per show hoga*/}
   <div className="md:hidden block">
   <div className=" flex gap-[10px]">
       <IoMdSearch  className="cursor-pointer p-[5px] text-3xl rounded hover:bg-gray-100" />
      <CiHeart className="cursor-pointer p-[5px] text-3xl rounded hover:bg-gray-100"/>
      <AiOutlineUser className="cursor-pointer p-[5px] text-3xl rounded hover:bg-gray-100"/>
      <FiShoppingBag className="cursor-pointer p-[5px] text-3xl rounded hover:bg-gray-100" />
   
      </div>
  </div>


    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden bg-white hover:bg-[#e77240] focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-black-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className=" flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row lg:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 lg:text-[16px] md:text-[10px]">
        <li>
          <a href="#" className="block py-2 px-1   hover:text-[#d53f3d] " aria-current="page">PRODUCTS</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-1   hover:text-[#d53f3d]">PURE POSHAK</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-1   hover:text-[#d53f3d]">SEMI PURE POSHAK</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-1   hover:text-[#d53f3d]">STITCHED POSHAKS</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-1   hover:text-[#d53f3d]">REGULAR SUIT</a>
          
        </li>
         <li>
          <a href="#" className="block py-2 px-1   hover:text-[#d53f3d]">FABRIC</a>
          
        </li>
         <li>
          <a href="#" className="block py-2 px-1   hover:text-[#d53f3d]">ACCESSORIES</a>
          
        </li>
      </ul>
    </div>
      
      {/* ye only Desktop menu per show hoga*/}
     <div  className="hidden md:block">
    <div className=" flex lg:gap-[10px] gap-[5px]">
      <CiHeart className="cursor-pointer p-[5px] text-3xl rounded hover:bg-gray-100"/>
      <AiOutlineUser className="cursor-pointer p-[5px] text-3xl rounded hover:bg-gray-100"/>
      <FiShoppingBag className="cursor-pointer p-[5px] text-3xl rounded hover:bg-gray-100" />
      </div>
    </div>
  </div>
</nav>
</div>
    </>
  )
}
