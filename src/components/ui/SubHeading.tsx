import clsx from 'clsx'
import React from 'react'

const SubHeading = ({ text, strokeText, className }: { text: string, strokeText: string, className?: string }) => {
    return (
        <h1
        data-aos="zoom-in"
            className={clsx(' mt-6 text-3xl md:text-4xl xl:text-6xl text-black-100 font-ztc-font1 uppercase font-semibold opacity-80 ', className)}>
            {text} <span className='text-stroke'>{strokeText}</span>
        </h1>
    )
}

export default SubHeading