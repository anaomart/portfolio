import Image from "next/image";
import React, { useState } from "react";

export default function Project({ img, link, name }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Image
        className="rounded-lg object-cover  hover:scale-95 transition flex-1 h-[200px] bg-red-400  "
        layout="responsive"
        src={img}
        alt={name}
      />
    </a>
  );
}
