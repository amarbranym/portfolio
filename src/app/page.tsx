import Renderer from "@/components/sections/Renderer";

import portfoliloData from "@/data/portfolio-data.json"

export default function Home() {
  return (
    <>
      <Renderer sections={portfoliloData.sections} />
    </>
  );
}
