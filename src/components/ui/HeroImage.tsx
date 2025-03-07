import Image from 'next/image'
import React from 'react'

const HeroImage = ({ image }: any) => {
    return (

        <div className=" relative w-full h-full aspect-square  flex justify-center items-center    ">
            {/* <div className='w-[70%] h-[70%] aspect-square relative    bg-gradient-primary opacity-75 rotate-45 '>
           
            
            </div> */}
            {/* <div className="h-[20%] w-full absolute left-0 right-0 top-1/2 -translate-y-1/2 bg-gradient-primary opacity-40 -rotate-[14deg]   z-[4] "></div> */}
            <div className=' animate-bounce transition-all duration-2000 absolute  top-16 -right-10  rounded-md    flex py-2  px-4  gap-2  justify-center items-center    bg-white  shadow-md  z-[3] '>
                <span className=' text-3xl md:text-4xl  font-bold text-green '>2 </span>
                <div className='flex flex-col'>
                    <span className=' font-bold text-sm  leading-4 '>Years of  </span>
                    <span className=' font-bold text-sm  leading-4 '>Success  </span>
                </div>
            </div>
            {/* <div className=' absolute  -bottom-10 -left-10  rounded-md    flex py-2  px-4  gap-2  justify-center items-center    bg-white  shadow-md  z-[3] '>
                <span className=' text-3xl md:text-4xl   font-bold text-green '>10</span>
                <div className='flex flex-col'>
                    <span className=' font-bold text-sm  leading-4 '>Projects  </span>
                    <span className=' font-bold text-sm  leading-4 '>Completed  </span>
                </div>
            </div> */}


            {image.src && <img
                src={image.src}
                alt={image?.alt ? image.alt : "Amarjeet Singh "}

                className=" shadow-2xl "
            />}
        </div>
    )
}

export default HeroImage