import React from 'react'
import Heading from '../ui/Heading'
import SubHeading from '../ui/SubHeading'
import AnimatedHeading from '../ui/AnimatedHeading'
import Timeline from '../ui/Timeline'

const Projects = ({ name, title, strokeText, projects }: any) => {
    return (
        <div className=" h-auto overflow-hidden">
            <Heading text={name} />
            <SubHeading text={title} strokeText={strokeText}  />

            <div className="text-center mt-6">

                <AnimatedHeading >
                    <h3 data-aos="zoom-in" className=" italic text-4xl uppercase text-transparent bg-gradient-primary font-ztc-font2 font-bold bg-clip-text  ">
                        PORTFOLIO
                    </h3>
                </AnimatedHeading>
            </div>
            <div className="mt-10">
                <Timeline projects={projects} />
            </div>

        </div>
    )
}

export default Projects