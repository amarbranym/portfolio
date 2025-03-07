"use client"
import { motion, useAnimationControls, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface TimelineItem {
    id: number;
    date: string;
    title: string;
    description: string;
    img: any;
}



export default function Timeline({projects}:{projects:TimelineItem[]}) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end center"]
    });

    const pathLength = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

    return (
        <div className="relative    min-h-screen ">
            {/* Vertical line */}
            <motion.div
                style={{ scaleY: pathLength }}
                className="absolute z-10 left-[9px]  md:left-1/2 md:top-0 h-full w-1 origin-top bg-gradient-primary"
            />

            <div ref={ref} className="relative w-full  grid grid-cols-1 gap-4  ">
                {projects.map((item, index) => (
                    <TimelineItem key={item.id} item={item} index={index} />
                ))}
            </div>
        </div>
    );
}

interface TimelineItemProps {
    item: TimelineItem;
    index: number;
}

function TimelineItem({ item, index }: TimelineItemProps) {
    const isEven = index % 2 === 0;
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      setIsMobile(window.innerWidth < 768);
    }, []);
    return (
        <div
            className={`relative   w-full  min-h-[300px]  lg:min-h-[400px]   flex md:${!isEven ? 'justify-end' : 'justify-start'} `}
        >
            <motion.span initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.9, }} className=" border border-green absolute  top-14 z-10 h-6 w-6 md:h-10 md:w-10 aspect-square rounded-full bg-black-300 md:left-[48.5%] transform -translate-x-1/2  flex items-center justify-center text-xs md:text-md font-bold text-green font-ztc-font1  ">
                0{index + 1}
            </motion.span>

            {/* Content container */}
            <div className={`absolute group-hover: h-full right-0  flex   ${isEven ? 'md:left-1/2 md:ml-14 justify-end  md:justify-start' : 'md:right-1/2 md:mr-14 justify-end'} w-[90%] md:w-[40%]  `}>

                <div
                   data-aos={isMobile ? "fade-left" : isEven ? "fade-left" : "fade-right" }
                   data-aos-duration="500"
                    className=" relative border border-black-300  h-[75%] w-[100%] md:w-[80%] md:mt-6 rounded-md group ">

                    <span className={`w-4 h-2 absolute top-[4rem] md:top-12 bg-green    ${isEven ? "-left-[8px] md:-left-[16px]" : "    right-[97.6%] md:!-right-[16px] "}`}>

                    </span>
                    <Image src={item.img} alt="projects" fill className=" !rounded-md object-cover" />
                    <div
                    
                        className={` absolute border border-black-300 -bottom-[32%] md:-bottom-[24%] ${isEven ? " md:-right-[25%] group-hover:right-0" : "md:-left-[25%] group-hover:left-0"}  w-full h-[100px] lg:h-[150px] bg-black-300/50 rounded-md backdrop-blur-md transition-all duration-300   `}>
                    </div>

                </div>
            </div>
        </div>
    );
}