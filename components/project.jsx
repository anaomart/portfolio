import Image from "next/image";
import React, { useState } from "react";

export default function Project({ img, gif }) {
  const [photo, setPhoto] = useState(img);

  return (
    <div
      className="     "
      onMouseEnter={() => {
        setTimeout(() => {
          setPhoto(gif);
        }, 400);
      }}
      onMouseLeave={() =>
        setTimeout(() => {
          setPhoto(img);
        }, 400)
      }
    >
      <Image
        className="rounded-lg object-fill  "
        layout="responsive"
        src={photo}
        alt={"project"}
      />
    </div>
  );
}