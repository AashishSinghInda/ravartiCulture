"use client"
// import Image from "next/image";
// import "flowbite";
// import { useEffect } from "react";
import Header from './common/Header'
import { FaArrowRight } from "react-icons/fa";
import AddToCart from "./common/AddToCart"
import Footer from "./common/Footer"



const PRODUCTS = [
  {id : 1, name:"PURE POSHAK", title:"Authentic traditional poshaks with pure fabrics", image:"/images/image.png"},
  {id : 2, name:"SEMI PURE POSHAK", title:"Elegant semi-pure designs with rich embroidery", image:"/images/image1.png"},
    {id : 3, name:"STITCHED POSHAK", title:"Ready-to-wear stitched traditional outfits", image:"/images/image3.png"}
]

const NEWARRIVALS = [
  {id : 1, heading:"GULABBAAH POSHAK", image:"/images/image.png", title:"Natural crep poshak with intricate thread embroidery and traditional patterns", price:"5,999", delprice:"7,999"},
   {id : 2, heading:"FULBAHAR POSHAK", image:"/images/image1.png", title:"Thread embroidery with zari and sequence work, perfect for special occasions", price:"3,800", delprice:"4,500"},
    {id : 3, heading:"ROYAL MAROON POSHAK", image:"/images/image3.png", title:"Traditional royal maroon poshak with golden thread work and mirror embellishments", price:"4,200", delprice:"5,200"}
]

export default function Home() {

/*  useEffect(() => {
    import("flowbite"); // Flowbite JS load
  }, []);  */

  return (
    <>
    <Header/>



      {/* banner section */}
     <div className='relative'>
          <img src="images\banner_optimized.png"  alt="" className='  banner-image-h h-[80vh] w-[100%] '/>
          <div className='absolute top-0 left-[50%] translate-x-[-50%] text-center lg:py-[90px] py-[30px]'>
          <h1 className=' py-[30px] lg:text-6xl text-3xl  text-white font-semibold  lg:leading-18 leading-10 customfont' >ADD A <span className='text-[#EEBD2B]'>FRESH TOUCH </span> TO <br />
              YOUR WARDROBE WITH</h1>
          <h2 className='  lg:text-[100px] text-[50px]  font-semibold leading-12 lg:leading-22  text-center text-[#E6531E] customfont  '>RAVARTI <br />
          CULTURE</h2>
          <button className='text-white bg-gradient-to-r to-[#e77240] from-[#d53f3d] p-[10px_25px] rounded-3xl font-semibold flex justify-center items-center gap-[10px] mx-auto my-[20px] text-xl cursor-pointer'>SHOP NOW <FaArrowRight /></button>
        </div>
        </div>  

      
        
        {/* Product Card section*/}
        < ProductCard/>

        {/* New Arrivals section */}
        < AddToCart data={NEWARRIVALS}/>


              {/* Best Selling Products */}
            < AddToCart     data={NEWARRIVALS} />

            <Footer/>
      
 </> 
)}



   {/* Product Card section*/}
  function ProductCard(){
    return(
    <div  className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 px-[10px] max-w-[100%] mx-auto lg:px-[40px] py-[40px] gap-[40px]">
      {PRODUCTS.map((items,index) => (
    <div key={index} className='  bg-center w-full h-[350px] p-[20px] rounded-lg shadow-[inset_0_-200px_50px_-40px_rgba(0,0,0,0.3)] group  cursor-pointer  transition-all duration-500 ease-in-out hover:scale-105 
    bg-[length:100%_100%] hover:bg-[length:110%_110%] ' style={{ backgroundImage: `url(${items.image})` }}>
      <div className='h-[60px] w-[60px] border-2 border-[#eebd2b] hidden group-hover:block  '></div>
      <div className='flex justify-between items-end h-79  group-hover:h-64 '>
        <div>
          <h1 className='text-white text-3xl font-semibold customfont   group-hover:text-[#eebd2b]'>{items.name}</h1>
          <p className='text-white '>{items.title}</p>
        </div>
        <div className='h-[60px] w-[60px] border-2 border-[#eebd2b]  hidden group-hover:block '></div>
      </div>
      </div>
      ))} 
    </div>
   
    )}





  

