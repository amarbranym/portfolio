import React from 'react'
import { Input } from './input'
import { Textarea } from './textarea'
import { Button } from './button'
import WaveAnimation from './WaveAnimation '

const ContactForm = () => {
    return (
        <form className=" p-4 flex flex-col gap-6 bg-black-700/50 rounded-sm border border-black-300">
            <h2 className="text-white font-bold text-3xl uppercase opacity-80"><WaveAnimation text="Leave A Message" /></h2>
            <Input data-aos="fade-up"
            data-aos-delay="400"
                type="text" placeholder="Name" />
            <Input data-aos="fade-up"
            data-aos-delay="500" type="number" placeholder="Phone Number" />
            <Input data-aos="fade-up"
            data-aos-delay="600" type="email" placeholder="Email Address" />
            <Textarea data-aos="fade-up"
            data-aos-delay="700" cols={6} placeholder="Message" />
            <div className=" flex justify-end overflow-hidden ">
                <Button data-aos="fade-left"
            data-aos-delay="800" size={"lg"} className="bg-gradient-primary font-bold "> submit now</Button>
            </div>
        </form>
    )
}

export default ContactForm