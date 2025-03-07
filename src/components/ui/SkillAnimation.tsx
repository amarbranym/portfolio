'use client'
import React from 'react'
import { motion } from "framer-motion";
import { div } from 'framer-motion/client';


const ForDesktop = ({backend, frontend, other}:{backend:string[], frontend:string[], other:string[]}) => {
    return (
        <div className=" hidden  md:flex items-center justify-center">
            <motion.svg
                className="w-full h-auto "
                viewBox="0 0 300 150"
                preserveAspectRatio="xMidYMid meet"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ ease: "easeOut", duration: 1.5 }}
            >
                {/* 🔹 Top Left Line */}
                <motion.path
                    d="M150 0 V20 H75 V40"
                    stroke="#56cd55"
                    strokeWidth="0.2"
                    fill="none"
                    strokeDasharray="200"
                    strokeDashoffset="200"
                    initial={{ strokeDashoffset: 200 }}
                    whileInView={{ strokeDashoffset: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 2 }}
                />

                {/* 🔹 Top Right Line */}
                <motion.path
                    d="M150 20 H225 V40"
                    stroke="#56cd55"
                    strokeWidth="0.2"
                    fill="none"
                    strokeDasharray="200"
                    strokeDashoffset="200"
                    initial={{ strokeDashoffset: 200 }}
                    whileInView={{ strokeDashoffset: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 2, delay: 0.2 }}
                />

                {/* 🔹Front end Skills  Left Box */}
                <motion.path
                    d="M75 40 H1 V80 H145 V40 H75 Z"
                    stroke="#56cd55"
                    strokeWidth="0.2"
                    fill="none"
                    strokeDasharray="500"
                    strokeDashoffset="500"
                    initial={{ strokeDashoffset: 500 }}
                    whileInView={{ strokeDashoffset: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 1.5, delay: 1.3 }}
                />
                {/* ✅ Frontend Skills Inside Left Box */}
                <foreignObject x="5" y="44" width="136" height="32">
                    <motion.div className="flex flex-wrap gap-1" initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 1, delay: 1 }} >
                        {frontend.map((item, index) => (
                            <motion.span
                                key={index}
                                className="text-[4px] text-black bg-gradient-primary px-[4px] py-[2px] text-center leading-[8px] uppercase font-bold rounded-sm cursor-pointer hover:bg-gradient-secondary transition-all duration-300"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {item}
                            </motion.span>
                        ))}
                    </motion.div>
                </foreignObject>

                {/* 🔹 Vertical Line */}
                <motion.path
                    d="M75 80 V100"
                    stroke="#56cd55"
                    strokeWidth="0.2"
                    fill="none"
                    strokeDasharray="75"
                    strokeDashoffset="75"
                    initial={{ strokeDashoffset: 75 }}
                    whileInView={{ strokeDashoffset: 0 }}
                    viewport={{ once: false, amount: 0.2 }} // Scroll hone par trigger hoga
                    transition={{ duration: 1.5, delay: 2.4 }}
                />

                {/* 🔹 Bottom Left Box */}
                <motion.path
                    d="M75 100 H1 V140 H145 V100 H75 Z"
                    stroke="#56cd55"
                    strokeWidth="0.2"
                    fill="none"
                    strokeDasharray="500"
                    strokeDashoffset="500"
                    initial={{ strokeDashoffset: 500 }}
                    whileInView={{ strokeDashoffset: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 1.5, delay: 2.5 }}
                />

                {/* 🔹 Right Box */}
                <motion.path
                    d="M225 40 H299 V80 H155 V40 H225 Z"
                    stroke="#56cd55"
                    strokeWidth="0.2"
                    fill="none"
                    strokeDasharray="500"
                    strokeDashoffset="500"
                    initial={{ strokeDashoffset: 500 }}
                    whileInView={{ strokeDashoffset: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                />
                {/* ✅ Backend Skills Inside Right Box */}
                <foreignObject x="159" y="44" width="136" height="82">
                    <motion.div className="flex flex-wrap gap-1 justify-center " initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 1, delay: 2 }}>
                        {backend.map((item, index) => (
                            <motion.span
                                key={index}
                                className="text-[4px] text-black bg-gradient-primary px-[4px] py-[2px] text-center leading-[8px] uppercase font-bold rounded-sm cursor-pointer hover:bg-gradient-secondary transition-all duration-300"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {item}
                            </motion.span>
                        ))}
                    </motion.div>
                </foreignObject>
                {/* ✅ Other Skills - Animated */}
                <foreignObject x="5" y="104" width="136" height="32" >
                    <motion.div className="flex flex-wrap gap-1 justify-center"
                    //  initial={{ opacity: 0, y: 20 }}
                    //     whileInView={{ opacity: 1, y: 0 }}
                    //     viewport={{ once: false, amount: 0.2 }}
                    //     transition={{ duration: 1, delay: 2.5 }}
                        >
                        {other.map((item, index) => (
                            <motion.span
                                key={index}
                                className="text-[4px] text-black bg-gradient-primary px-[4px] py-[2px] text-center leading-[8px] uppercase font-bold rounded-sm cursor-pointer hover:bg-gradient-secondary transition-all duration-300"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 1, delay: index * 0.1 }}
                            >
                                {item}
                            </motion.span>
                        ))}
                    </motion.div>
                </foreignObject>
            </motion.svg>
        </div>
    )
}

const ForMobile = ({backend, frontend, other}:{backend:string[], frontend:string[], other:string[]}) => {
    return (
        <div className="flex items-center justify-center md:hidden">
            <motion.svg
                className="w-full h-auto"
                viewBox="0 0 400 600"
                preserveAspectRatio="xMidYMid meet"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ ease: "easeOut", duration: 1.5 }}
            >
                {/* 🔹 Step 1: Front end Top Vartical Line */}
                <motion.path
                    d="M200 0 V40"
                    stroke="#56cd55"
                    strokeWidth="0.4"
                    fill="none"
                    strokeDasharray="75"
                    strokeDashoffset="75"
                    initial={{ strokeDashoffset: 75 }}
                    whileInView={{ strokeDashoffset: 0 }}
                    viewport={{ once: false, amount: 0.2 }} // Scroll hone par trigger hoga
                    transition={{ duration: 1.5, delay: 0.5 }}
                />
                {/* 🔹 Step 2: Frontend Skills Box (Full Width) */}
                <motion.path
                    d="M200 40 H400 V200 H0 V40 H200 Z" // Full width box
                    stroke="#56cd55"
                    strokeWidth="0.4"
                    fill="none"
                    strokeDasharray="1200"
                    strokeDashoffset="1200"
                    initial={{ strokeDashoffset: 1200 }}
                    whileInView={{ strokeDashoffset: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 1.5, delay: 1.5 }}
                />
                {/* Step 3: Frontend Skills Inside Box */}
                <foreignObject x="8" y="49" width="384" height="140" >
                    <motion.div className="flex flex-wrap gap-2 justify-center items-center "
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 1, delay: 1 }}>
                        {frontend.map((item, index) => (
                            <motion.span key={index}
                                className="text-[14px] text-black bg-gradient-primary px-[14px] py-[10px] text-center leading-[18px] uppercase font-bold rounded-sm cursor-pointer hover:bg-gradient-secondary transition-all duration-300"
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {item}
                            </motion.span>
                        ))}
                    </motion.div>
                </foreignObject>

                {/* 🔹 Step 4: Backend  Top Vartical Line */}

                <motion.path
                    d="M200 200 V240"
                    stroke="#56cd55"
                    strokeWidth="0.4"
                    fill="none"
                    strokeDasharray="75"
                    strokeDashoffset="75"
                    initial={{ strokeDashoffset: 75 }}
                    whileInView={{ strokeDashoffset: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                />
                {/* 🔹 Step 5: Backend Skills Box (Full Width) */}
                <motion.path
                    d="M200 240 H400 V400 H0 V240 H200 Z"
                    stroke="#56cd55"
                    strokeWidth="0.4"
                    fill="none"
                    strokeDasharray="1200"
                    strokeDashoffset="1200"
                    initial={{ strokeDashoffset: 1200 }}
                    whileInView={{ strokeDashoffset: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 1.5, delay: 1.5 }}
                />
                {/* 🔹 Step 6: Backend Skills Inside Box*/}
                <foreignObject x="8" y="249" width="384" height="140">
                    <motion.div className="flex flex-wrap gap-2 justify-center items-center p-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        {backend.map((item, index) => (
                            <motion.span key={index}
                                className="text-[14px] text-black bg-gradient-primary px-[14px] py-[10px] text-center leading-[18px] uppercase font-bold rounded-sm cursor-pointer hover:bg-gradient-secondary transition-all duration-300"
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {item}
                            </motion.span>
                        ))}
                    </motion.div>
                </foreignObject>


                {/* 🔹 Step 7: Other Details Top Vertical Line */}
                <motion.path
                    d="M200 400 V440"
                    stroke="#56cd55"
                    strokeWidth="0.4"
                    fill="none"
                    strokeDasharray="75"
                    strokeDashoffset="75"
                    initial={{ strokeDashoffset: 75 }}
                    whileInView={{ strokeDashoffset: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                />

                {/* 🔹 Step 8: Other Details Box */}
                <motion.path
                    d="M200 440 H400 V600 H0 V440 H200 Z"
                    stroke="#56cd55"
                    strokeWidth="0.4"
                    fill="none"
                    strokeDasharray="1200"
                    strokeDashoffset="1200"
                    initial={{ strokeDashoffset: 1200 }}
                    whileInView={{ strokeDashoffset: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 1.5, delay: 1.5 }}
                />

                {/* 🔹 Step 9: Other Details Inside Box */}
                <foreignObject x="8" y="449" width="384" height="140">
                    <motion.div className="flex flex-wrap gap-2 justify-center items-center p-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        {other.map((item, index) => (
                            <motion.span key={index}
                                className="text-[14px] text-black bg-gradient-primary px-[14px] py-[10px] text-center leading-[18px] uppercase font-bold rounded-sm cursor-pointer hover:bg-gradient-secondary transition-all duration-300"
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {item}
                            </motion.span>
                        ))}
                    </motion.div>
                </foreignObject>

            </motion.svg>
        </div>
    )
}






export { ForDesktop, ForMobile }