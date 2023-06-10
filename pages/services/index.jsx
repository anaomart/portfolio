import Image from "next/image";
import React from "react";
export default function Services({ design, code, consulting }) {
  return (
    <section>
      <div>
        <h3 className="text-3xl md:text-5xl pb-3 text-teal-600 font-semibold dark:text-white text-center ">
          Services
        </h3>
      </div>
      <div className="lg:flex gap-10">
        <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
          <Image src={design} width={100} height={100} alt="front-end" />
          <h3 className="text-xl font-semibold pt-8 pb-2  ">Front-end</h3>
          <p className="py-2">
            Creating elegant interface suited for your needs
          </p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
          <Image src={code} width={100} height={100} alt="backend" />
          <h3 className="text-xl font-semibold pt-8 pb-2  ">Back-end</h3>
          <p className="py-2">Build a high-quality API for your application</p>
        </div>
      </div>
    </section>
  );
}
