import React from "react";
import Image from "next/image";

export const Collage = () => {
  return (
    <section className=" bg-slate-100  flex flex-col gap-1 p-1 w-full">
      <div className="flex h-64 gap-1">
        <div className="  relative grow">
          <Image
            alt="beach"
            src="/locations/dubai/dubai2.jpg"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className=" relative grow-[2]">
          <Image
            alt="beach"
            src="/locations/NY/newyork2.jpg"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className=" relative  grow">
          <Image
            alt="beach"
            src="/locations/france/france2.jpg"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      <section className="flex h-96 gap-1">
        <div className="grid grid-rows-2 grid-flow-col  gap-1   grow-[2] ">
          <div className="  relative ">
            <Image
              alt="beach"
              src="/locations/france/france.jpg"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="  relative ">
            <Image
              alt="beach"
              src="/locations/japan/japan.jpg"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="  relative ">
            <Image
              alt="beach"
              src="/locations/japan/shrine.jpg"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="  relative ">
            <Image
              alt="beach"
              src="/locations/japan/japan2.jpg"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1 grow   ">
          <div className="  relative ">
            <Image
              alt="beach"
              src="/locations/china/china.jpg"
              fill
              style={{ objectFit: "cover" }}
              className="grow"
            />
          </div>

          <div className="  relative ">
            <Image
              alt="beach"
              src="/locations/london/london.jpg"
              fill
              style={{ objectFit: "cover" }}
              className="grow-[2]"
            />
          </div>

          <div className="  relative ">
            <Image
              alt="beach"
              src="/locations/london/london2.jpg"
              fill
              style={{ objectFit: "cover" }}
              className="grow"
            />
          </div>
        </div>
      </section>
    </section>
  );
};
