import React from 'react'
import WaveAnimation from '../ui/WaveAnimation '
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import AnimatedHeading from '../ui/AnimatedHeading'
import ContactInfoCard from '../ui/ContactInfoCard'
import Heading from '../ui/Heading'
import SubHeading from '../ui/SubHeading'
import Icons from '../ui/Icons'
import ContactForm from '../ui/ContactForm'

const Contact = ({ name, title, strokeText, id, contacts, description, copyRightText, button }: any) => {
    return (
        <div id={id} className="py-10 ">
            <div className="grid grid-cols-3 border border-black-300 bg-black-600/85 min-h-80 p-4 lg:p-10 gap-10 ">
                <div className=" order-2 lg:order-1 col-span-3 lg:col-span-1 ">
                    <ContactForm />
                </div>
                <div className=" order-1 lg:order-2 col-span-3 lg:col-span-2">
                    <div className="flex flex-col md:flex-row md:gap-6 " >
                        <div>

                            <Heading text={name} className='uppercase font-bold' />
                            <SubHeading text={title} strokeText={strokeText}  />
                        </div>
                        <div className=" flex justify-end mt-6 md:mt-10">
                            <AnimatedHeading >
                                <h3 data-aos="zoom-in" className=" italic text-4xl uppercase text-transparent bg-gradient-primary font-ztc-font2 font-bold bg-clip-text  ">
                                    TODAY
                                </h3>
                            </AnimatedHeading>
                        </div>
                    </div>
                    <div className=" mt-6 flex flex-col gap-6">
                        <p data-aos="fade-up" className="text-white text-lg opacity-80 ">
                            {description}
                        </p>
                        <div className=" flex flex-col md:flex-row gap-6">
                            {
                                contacts.map((items: any, index: number) => (
                                    <div data-aos="fade-up" data-aos-delay={index + 1 * 100} key={index}>

                                        <ContactInfoCard id={index} items={items} />
                                    </div>

                                ))
                            }
                        </div>
                        <div>
                            <Button data-aos="fade-up" data-aos-delay={"500"} size="lg" className=" flex gap-2 bg-gradient-primary font-bold px-6">
                                <Icons name={button.icon} /> {button.text}
                            </Button>
                        </div>
                    </div>

                </div>

                <div  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="500" className=" order-3 -mb-8 col-span-3 h-[50px]">
                    <div className="h-[100px] bg-gradient-primary opacity-90 w-full flex justify-center items-center rounded-sm ">
                        <p className="text-center font-semibold  opacity-60">
                            {copyRightText}
                        </p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Contact