import Image from 'next/image'
import React from 'react'
import clsx from 'clsx'

const AnimatedHeading = ({ children, className }: { children: any, className?: string }) => {
    return (
        <div className={clsx('py-6 px-8 border-black-300 border-[0.5px]  inline-block bg-black-800/40  rounded-sm relative ', className)}>
            {
                children
            }
            <div 
                data-aos-easing="ease-in-sine"

            data-aos="fade-right" 
                data-aos-delay="300" className=' h-3 w-3 border-green border-2 rounded-[2px] absolute -top-2 -left-2 ' ></div>
            <div data-aos="fade-left"
                data-aos-easing="ease-in-sine"

                data-aos-delay="300" className=' h-3 w-3 border-green border-2 rounded-[2px] absolute -top-2 -right-2 ' ></div>
            <div data-aos="fade-left"
                data-aos-easing="ease-in-sine"

                data-aos-delay="300" className=' h-3 w-3 border-green border-2 rounded-[2px] absolute -bottom-2 -left-2 ' ></div>
            <div data-aos="fade-right"
                data-aos-easing="ease-in-sine"

                data-aos-delay="300" className=' h-3 w-3 border-green border-2 rounded-[2px] absolute -bottom-2 -right-2 ' ></div>
        </div>
    )
}

export default AnimatedHeading