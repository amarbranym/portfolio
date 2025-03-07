import React from 'react'
import clsx from 'clsx'

const Heading = ({ text,className }: { text: string, className?: string }) => {
    return (
        <h4 
        data-aos="fade-right"
             className={clsx('text-green text-2xl font-ztc-font1 opacity-80', className)}>
            {text}
        </h4>
    )
}

export default Heading