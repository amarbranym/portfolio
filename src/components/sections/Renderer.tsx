import clsx from "clsx";
import Section from "./Section";

const Renderer = ({ sections }: { sections: any[] }) => {
    return sections.map((section, index) => (
        <section
            key={index}
            className={clsx('py-12 px-4 md:px-6 lg:px-8 overflow-hidden', section?._classes)}
            id={section.__id}
        >
                <Section {...section}  />
        </section>
    ));
  };

  export default Renderer