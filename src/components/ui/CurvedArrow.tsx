"use client";
import { motion } from "framer-motion";
import React from "react";

const transition = { duration: 4, ease: "easeInOut" };

export default function CurvedArrow() {
    return (
        <div style={{ position: "relative" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">
                {/* Small Loop + Curved Arrow */}
                <motion.path
                    d="M 20 100 C 50 50, 80 50, 100 100 C 120 150, 150 160, 200 130 S 270 110, 280 120"
                    fill="transparent"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={transition}
                />
                {/* Arrowhead */}
                <motion.path
                    d="M 280 120 L 265 115 M 280 120 L 265 125"
                    fill="transparent"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.5, duration: 0.3 }}
                />
            </svg>

            {/* Moving Dot */}
            <motion.div
                style={dotStyle}
                initial={{ offsetDistance: "0%", opacity: 1 }}
                animate={{ offsetDistance: "100%", opacity: 0 }}
                transition={{ ...transition, opacity: { delay: 3.8, duration: 0.2 } }}
            >
                ➤
            </motion.div>
        </div>
    );
}

const dotStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: "16px",
    offsetPath: `path("M 20 100 C 50 50, 80 50, 100 100 C 120 150, 150 160, 200 130 S 270 110, 280 120")`,
};
