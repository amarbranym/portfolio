import React from 'react'
import HeroImage from '../ui/HeroImage'
import AnimatedHeading from '../ui/AnimatedHeading'
import { Button } from '../ui/button'
import { FaFacebookF } from 'react-icons/fa'
import Heading from '../ui/Heading'
import SubHeading from '../ui/SubHeading'
import Paragraph from '../ui/Paragraph'
import Icons from '../ui/Icons'
import CurvedArrow from '../ui/CurvedArrow'
import Link from 'next/link'

const InfoSection = ({ name, title, image, about, buttons, socials, strokeText, id }: any) => {
    return (
        <div id={id} className=" grid grid-cols-2 gap-8">
            <div className="col-span-2 ">
                <Heading text={name} className='text-white' />
                <SubHeading text={title} strokeText={strokeText}  />
            </div>
            <div className=" order-2 xl:order-1 col-span-2 xl:col-span-1 flex justify-center items-center ">
                <div className="w-[80%]">
                    <HeroImage image={image} />
                </div>
            </div>
            <div className=" order-1 xl:order-2 col-span-2 xl:col-span-1  flex  flex-col  justify-center ">

                <AnimatedHeading className={"w-full "} >
                    <Paragraph text={about} />
                </AnimatedHeading>

                <div className=" mt-10 py-2 flex gap-4 overflow-hidden">
                    {
                        buttons.map((item: any, index: number) => (
                            <Link key={index} href={item.link}  >
                            <Button     data-aos="fade-up"  data-aos-delay={index+1 * 100}  size="lg" className=" flex gap-2 font-bold bg-gradient-primary ">
                                {item.icon && <Icons name={item.icon} className='font-bold scale-150' />}  {item.text}
                            </Button>
                            </Link>
                        ))
                    }

                </div>

                <div className="mt-10 overflow-hidden">
                    <h5
                    data-aos="fade-right"
                        className="text-black-100 font-semibold text-2xl capitalize">{socials.title} </h5>
                    <div className=" mt-4 flex gap-4">
                        {
                            socials.social_btns.map((item: any, index: number) => (
                                <Link key={index} href={item.link}  target='_blank' >
                                <Button
                                data-aos="fade-up"  data-aos-delay={index+1 * 100}
                                className=" bg-black-400/90 hover:text-black-900  ">
                                    <Icons name={item.icon} className=" text-white scale-150 " />
                                </Button>
                                        </Link>
                            ))
                        }


                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoSection