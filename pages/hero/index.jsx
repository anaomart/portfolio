import Image from "next/image";
import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInfoCircle,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
export default function Hero({ img }) {
  return (
    <div className="text-center p-10 py-10">
      <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
        Omar Ashraf
      </h2>
      <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
        Full Stack Developer
      </h3>
      <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
        Freelancer providing services for customized full stack web applications
        ,<br /> Join me down below and get cracking!
      </p>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
        <a href="https://www.facebook.com/profile.php?id=100091935498726">
          <AiFillFacebook className="hover:text-blue-700" />
        </a>
        <a href="https://www.linkedin.com/in/omar-ashraf-a0883a156/">
          <AiFillLinkedin className="hover:text-blue-500" />
        </a>
        <a href="https://github.com/anaomart " className="hover:text-black">
          <AiFillGithub />
        </a>
      </div>
      {/* <div className="mx-auto bg-gradient-to-b from-black rounded-2xl p-1 w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-[900px]">
        <Image src={img} layout="fill" className=" w-[20%] " />
      </div> */}
    </div>
  );
}
