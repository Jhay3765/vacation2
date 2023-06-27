"use client";
import { useState } from "react";
import Link from "next/link";

import { Collage } from "./components/collage";

export default function Destinations() {
  const [selected, setSelected] = useState("");

  const handleChange = (e: any) => {
    setSelected(e.target.value);
  };

  return (
    <>
      <div className="pt-24 pb-8">
        {" "}
        <h1 className="text-center text-4xl font-bold ">
          {" "}
          Explore Our Rich Destinations
        </h1>
      </div>
      <div className="bg-gray-200 max-w-7xl h-36 rounded-xl container mx-auto mb-24 flex justify-center items-center gap-12">
        <select
          name="destinations"
          className="border px-2 py-1 border-black"
          value={selected}
          onChange={handleChange}
        >
          <option value="">all destinations</option>
          <option value="usa">UNITED STATES</option>
          <option value="japan">JAPAN</option>
        </select>

        <Link
          href={`/destinations/${selected}`}
          className=" border border-black px-2 py-1 "
        >
          SEARCH{" "}
        </Link>
      </div>

      <div className=" flex justify-center w-full">
        <Collage />
      </div>
    </>
  );
}
