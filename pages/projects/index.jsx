import Image from "next/image";
import React, { useState } from "react";
import realEstateVideo from "../../public/Real-estate-video.gif";
import Pixld from "../../public/PilxdVideo.gif";
import Project from "../../components/project";

export default function Projects({ web1, web2, web3, web4, web5, web6 }) {
  return (
    <section className="py-10">
      <div>
        <h3 className="text-3xl md:text-5xl pb-3 text-teal-600 font-semibold dark:text-white text-center ">
          Portofolio
        </h3>
      </div>
      <div className="flex flex-col gap-10 py-10  ">
        <Project img={web1} gif={realEstateVideo} />
        <Project img={web2} gif={Pixld} />
        <Project img={web3} gif={Pixld} />
        <Project img={web4} gif={Pixld} />
        <Project img={web5} gif={Pixld} />
      </div>
    </section>
  );
}
