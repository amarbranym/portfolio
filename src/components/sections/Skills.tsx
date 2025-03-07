import React from 'react'
import AnimatedHeading from '../ui/AnimatedHeading'
import { ForDesktop, ForMobile } from '../ui/SkillAnimation'
import Heading from '../ui/Heading'
import SubHeading from '../ui/SubHeading'

const Skills = ({ name, title, strokeText,frontend, backend, other }: any) => {
    return (
        <div className="">
            <div className=" ">
                <Heading text={name} className="uppercase" />
                <SubHeading text={title} strokeText={strokeText}  />
            </div>
            <div className=" mt-10 text-center ">
                <AnimatedHeading >
                    <h3 data-aos="zoom-in" className=" italic text-4xl uppercase text-transparent bg-gradient-primary font-ztc-font2 font-bold bg-clip-text  ">
                        Technologies
                    </h3>
                </AnimatedHeading>
            </div>
            <ForDesktop frontend={frontend} backend={backend} other={other} />
            <ForMobile frontend={frontend} backend={backend} other={other} />
        </div>
    )
}

export default Skills