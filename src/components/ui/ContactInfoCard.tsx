import { FC } from "react";
import { LucideIcon, Phone } from "lucide-react";
import Icons from "./Icons";



const ContactInfoCard = ({ items }: any) => {
  return (
    <div  className=" border border-black-300 bg-black-700/50 flex justify-center items-center py-4 px-6 gap-6 rounded-sm">
      <div className="p-2">
        <Icons name={items.icon}  className="text-white scale-150"  />
      </div>
      <div>
        <h6 className="text-white uppercase text-2xl font-semibold tracking-widest">
          {items.title}
        </h6>
        <span className="text-white tracking-widest opacity-60">{items.contact}</span>
      </div>
    </div>
  );
};

export default ContactInfoCard;