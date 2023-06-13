import Image from "next/image";
import React, { useState } from "react";
import realEstatePhoto from "../../public/Pixld-Real-E-estate.png";
import Pixld from "../../public/Pixld-PhotoSharing.png";
import JSTemplate from "../../public/Js-Templates.png";
import YouTubeClone from "../../public/Youtube-Clone.png";
import chatgpt from "../../public/chatgpt.png";
import sara7aClone from "../../public/Sara7a-clone.png";
import SpeedTyping from "../../public/Speed-Typing.png";
import simpleSystem from "../../public/simpleSystem.png";
import WeatherApp from "../../public/Weather-App.png";
// import Template_1 from "../../public/Template1.png";
import Template_2 from "../../public/Template2.png";
import Template_3 from "../../public/Template3.png";
import toDoApp from "../../public/To-do-app-2.png";
import LandingPage_1 from "../../public/LandingPage_1.png";
import TwitterClon from "../../public/TwitterClon.png";
import Workout from "../../public/Workout.png";
import noteKeeper from "../../public/noteKeeper.png";
import Project from "../../components/project";
const projects = [
  {
    name: "Real E-estate",
    img: realEstatePhoto,
    link: "https://pixld.vercel.app/",
    state: "visible",
  },
  {
    name: "Photo share",
    img: Pixld,
    link: "https://www.pixld.agency/",
    state: "visible",
  },
  {
    name: "JSTemplate",
    img: JSTemplate,
    link: "https://anaomart.github.io/javascript-template/",
    state: "visible",
  },
  {
    name: "YouTube Clone",
    img: YouTubeClone,
    link: "https://youtube-1-clone.netlify.app/",
    state: "visible",
  },
  {
    name: "chatgpt",
    img: chatgpt,
    link: "https://joyful-sfogliatella-5e4b8a.netlify.app/",
    state: "visible",
  },
  {
    name: "sara7a Clone",
    img: sara7aClone,
    link: "https://anonymous-massger-front-j3p41jpqo-anaomart.vercel.app/",
    state: "visible",
  },
  {
    name: "TwitterClon",
    img: TwitterClon,
    link: "https://anaomart.github.io/Twitter-UI-Clone-Tailwind-/",
    state: "visible",
  },

  {
    name: "Workout",
    img: Workout,
    link: "https://workoutbuddy1.netlify.app/",
    state: "visible",
  },
  {
    name: "SpeedTyping",
    img: SpeedTyping,
    link: "https://anaomart.github.io/Typing-speed-v2/",
    state: "visible",
  },
  {
    name: "simpleSystem",
    img: simpleSystem,
    link: "https://anaomart.github.io/CRUDS-With-JavaScript/",
    state: "visible",
  },
  {
    name: "WeatherApp",
    img: WeatherApp,
    link: "https://anaomart.github.io/Weather-App/",
    state: "visible",
  },
  {
    name: "To-do-app",
    img: toDoApp,
    link: "https://anaomart.github.io/To-Do-App-2/",
    state: "visible",
  },
  // {
  //   name: "Template_1",
  //   img: Template_1,
  //   link: "https://anaomart.github.io/template-2/#",
  //   state: "visible",
  // },
  {
    name: "Template_2",
    img: Template_2,
    link: "https://anaomart.github.io/Template.2.1/#",
    state: "visible",
  },
  {
    name: "Template_3",
    img: Template_3,
    link: "https://anaomart.github.io/Template_1/",
    state: "visible",
  },

  {
    name: "LandingPage_1",
    img: LandingPage_1,
    link: "https://dev-challengs-edie-home-page-live-lc88a3jgg-anaomart.vercel.app/",
    state: "visible",
  },
  {
    name: "noteKeeper",
    img: noteKeeper,
    link: "/",
    state: "hidden",
  },
];
export default function Projects({ web1, web2, web3, web4, web5, web6 }) {
  return (
    <section className="py-10">
      <div>
        <h3 className="text-3xl md:text-5xl pb-3 text-teal-600 font-semibold dark:text-white text-center ">
          Portofolio
        </h3>
      </div>
      <div className="gap-10  py-10 grid md:grid-cols-2 grid-cols-1 ">
        {projects.map(
          ({ name, img, link, state }) =>
            state == "visible" && (
              <Project img={img} key={name} name={name} link={link} />
            )
        )}
      </div>
    </section>
  );
}
