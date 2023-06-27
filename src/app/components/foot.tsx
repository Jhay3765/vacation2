import React from "react";
import Image from "next/image";

type value = {
  text: string;
};

export const Foot = (props: value) => {
  return (
    <footer
      className={`h-96 bg-blue-200 leading-8 flex flex-col items-center justify-center gap-12 mt-${props.text}`}
    >
      <section className="grid grid-rows-2 grid-flow-col lg:flex lg:justify-around gap-x-7 lg:w-full max-w-5xl ">
        <ul>
          <li>
            <Image alt="logo" src="/logo2.png" width="150" height="100" />
          </li>
        </ul>
        <ul>
          <li className="font-bold">About GOTRAVEL</li>
          <li>About Us</li>
          <li>Resources</li>
          <li>Policies</li>
        </ul>
        <ul>
          <li className="font-bold">Explore Us</li>
          <li>Write a review</li>
          <li>Join Newsletter</li>
        </ul>
        <ul>
          <li className="font-bold">Popular Tour Destinations</li>
          <li>Tokyo</li>
          <li>New York</li>
          <li>Paris</li>
        </ul>
      </section>
      <section className="flex justify-around">
        <p>@2023 GOTRAVEL</p>
        <ul>
          <li>FOLLOW US :</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </section>
    </footer>
  );
};
