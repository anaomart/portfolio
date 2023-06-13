import React from "react";

export default function Footer() {
  return (
    <footer
      class="bg-white px-10 
     md:px-20 lg:px-40 bg-white  shadow
     flex justify-center
      md:flex md:items-center  md:p-6 dark:bg-gray-800"
    >
      <span class="text-sm  text-gray-500 text-center dark:text-gray-400">
        © 2023{" "}
        <a
          href="https://Pixld.com"
          class="hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          Pixld™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}
