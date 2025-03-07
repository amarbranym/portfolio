import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import InfoSection from "./InfoSection";
import Projects from "./Projects";
import Skills from "./Skills";

const Section = (section: any) => {
    if (section.__component === 'personalInfo') {
        return <InfoSection {...section} id={section.__id} />;
    }
    else if (section.__component === "about") {
        return <About {...section} id={section.__id} />

    }
    else if (section.__component === "skill") {
        return <Skills {...section} id={section.__id} />
    }
    else if (section.__component === "project") {
        return <Projects {...section} id={section.__id} />

    } else if (section.__component === "contact") {
        return <Contact {...section} id={section.__id} />

    }
};


export default Section