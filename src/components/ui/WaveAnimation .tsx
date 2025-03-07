'use client'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const WaveAnimation  = ({
    text,
    className = '',
}: {
    text: string;
    className?: string;
}) => {
    const splittedText = text.split('');

    const pullupVariant = {
        initial: { y: 10, opacity: 0 },
        animate: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.05,
            },
        }),
    };
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
    return (
        <div className='flex flex-wrap'>
            {splittedText.map((current, i) => (
                <motion.span
                    key={i}
                    ref={ref}
                    variants={pullupVariant}
                    initial="initial"
                    animate={isInView ? 'animate' : ''}
                    custom={i}
                    className={className}
                >
                    {current == ' ' ? <span>&nbsp;</span> : current}
                </motion.span>
            ))}
        </div>
    );
}


export default WaveAnimation 