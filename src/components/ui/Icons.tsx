import React from "react";
import Download from "./icons/Download";
import Github from "./icons/socials/Github";
import LinkedIn from "./icons/socials/Linkedin";
import Instagram from "./icons/socials/Instagram";
import Call from "./icons/Call"
import Mail from "./icons/Mail"
import clsx from "clsx";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
    Download,
    Github,
    LinkedIn,
    Instagram,
    Call,
    Mail
};

const Icons: React.FC<{ name: string; className?: string }> = ({ name, className }) => {
    const IconComponent = iconMap[name];

    if (!IconComponent) return null; // Prevent errors if icon not found

    return <IconComponent className={clsx("scale-125 font-bold", className)} />; // Now className will work
};

export default Icons;
