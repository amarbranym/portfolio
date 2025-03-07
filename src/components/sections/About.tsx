import React from 'react'
import AnimatedHeading from '../ui/AnimatedHeading'
import { Button } from '../ui/button'
import HeroImage from '../ui/HeroImage'
import Heading from '../ui/Heading'
import SubHeading from '../ui/SubHeading'
import Paragraph from '../ui/Paragraph'
import Link from 'next/link'

const About = ({ name, title, strokeText, image, description, strengths, buttonText, id }: any) => {
    return (
        <div id={id} className="  grid grid-cols-2">
            <div className="col-span-2">
                <Heading text={name} className="uppercase" />
                <SubHeading text={title} strokeText={strokeText} />
            </div>
            <div className=" col-span-2 xl:col-span-1">
                <div className="mt-10">
                    <AnimatedHeading className="w-full">
                        <Paragraph text={description} className='text-xl' />
                    </AnimatedHeading>
                </div>
                <div className=" mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {
                        strengths.map((item: any, index: number) => (
                            <div data-aos="fade-up" data-aos-delay={index * 100} key={index}>
                                <h5 className="text-black-100 text-xl opacity-80 uppercase ">{item.title}</h5>
                            </div>
                        ))
                    }
                </div>
                <div className="mt-10 ">
                    <Link href={"#contact"}>
                        <Button data-aos="fade-up" className="font-bold bg-gradient-primary">
                            {buttonText}
                        </Button>
                    </Link>
                </div>

            </div>
            <div className=" py-10 xl:py-0 col-span-2 xl:col-span-1 flex justify-center items-center ">
                <div className=" w-full h-full flex justify-center items-center ">
                    {image.src && <img data-aos="zoom-in" src={image.src} alt="about-imt" />}
                </div>
            </div>

        </div>
    )
}

export default About