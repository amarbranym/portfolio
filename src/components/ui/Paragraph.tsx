import clsx from 'clsx'
import React from 'react'

const Paragraph = ({ className, text }: { className?: string, text: string }) => {
    return (
        <p data-aos="zoom-in" className={clsx("text-black-100 text-xl opacity-80   ", className)}>
            {text}
        </p>
    )
}

export default Paragraph