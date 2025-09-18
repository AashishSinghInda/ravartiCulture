import React from 'react'
import { CiHeart } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineStar } from "react-icons/md";
import { FaIndianRupeeSign } from "react-icons/fa6";



export default function AddToCart({ data, title } ) {

    
  return (
    <>
       {/* text section design */}
          <div className='bg-[#f8f7f2] py-[30px] my-[50px]'>
          <h1 className='text-center text-4xl text-[#2c2122] customfont font-bold'>{title}</h1>
          <div className='flex justify-center items-center'>
            <p className='border border-[#e68569] w-[100px] text-center my-[20px]'></p>
            <div className='bg-[#eebd2b] h-[12px] w-[12px] rounded-2xl mx-[20px]'></div>
            <p className='border border-[#e68569] w-[100px] text-center my-[20px]'></p>
          </div>
          <p className='text-center text-[#af9bac] font-semibold'>Discover our latest collection of authentic Rajputi poshaks, crafted with traditional <br /> techniques and modern elegance</p>
    
          {/* card section design */}
          <div className='max-w-[100%] mx-auto lg:px-[40px] grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-[40px] py-[40px] px-[10px]'>
            {data.map((items,index)=> (
            <div key={index}>
              <div className='h-[500px] group shadow-2xl '>
                <div className='  bg-center w-full h-[300px] p-[20px] rounded-t-lg shadow-[inset_0_-100px_50px_-40px_rgba(0,0,0,0.3)]   cursor-pointer  transition-all duration-500 ease-in-out group-hover:scale-105 
        bg-[length:100%_100%] group-hover:bg-[length:110%_110%] flex flex-col justify-between  ' style={{ backgroundImage: `url(${items.image})`  }}>
               <div className='flex justify-between h-60'>
                <div>
                  <div className='bg-[#c91d39] text-white px-[10px] text-[15px] rounded-2xl font-semibold '>NEW</div>
                  <div className='bg-[#f08b42]  px-[10px] text-[15px] rounded-2xl font-semibold my-[10px]'>FREE SHIPPING</div>
                </div>
                <div className='h-[40px] w-[40px] text-2xl rounded-3xl flex justify-center items-center bg-[#f08b42] hover:bg-[#c91d39] hover:text-white opacity-0 group-hover:opacity-100 '><CiHeart /></div>
               </div> 
               <div className=' opacity-0 group-hover:opacity-100 flex justify-center items-center bg-[#c91d39] text-white rounded-2xl gap-[10px] py-[3px] '><FiShoppingBag  />Add to Cart</div>
        </div>
              <div className=' bg-[#ffffff] h-[200px] transition-all duration-500 ease-in-out group-hover:scale-105     bg-[length:100%_100%] group-hover:bg-[length:110%_110%] rounded-b-lg p-[20px]'>
                
                <div className=' py-[5px] flex text-[#eebd2b] text-xl'><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /></div>
                <h1 className=' customfont text-xl text-[#432122] group-hover:text-[#c91d39] font-bold'>{items.heading}</h1>
                <p className='text-[#c9a29e] py-[10px]'>{items.title}</p>
                <div className='flex justify-between '>
                  <h1 className='text-[#c91d39] font-semibold text-xl flex items-center  '><FaIndianRupeeSign /> {items.price}
                  <span className='text-[#c9a29e] flex items-center text-[15px] px-[10px]'><FaIndianRupeeSign /><del>{items.delprice}</del></span></h1>
                  <p className='text-[#f09263] text-[12px] font-semibold'>FREE Shipping</p>
                </div>
              </div>
              </div>
              
            </div>
            ))}
           
          </div>
             <button className='text-white bg-gradient-to-r to-[#e77240] from-[#d53f3d] p-[10px_25px] rounded-3xl font-semibold flex justify-center items-center  mx-auto   cursor-pointer'>VIEW ALL PRODUCTS </button>
    
    </div>

    </>
  )
}
