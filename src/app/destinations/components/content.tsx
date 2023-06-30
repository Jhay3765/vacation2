"use client";
import { useState } from "react";
import { handleCheckout } from "./getDataTour";
import { handleCheckoutFlight } from "./getDataFlight";
import Image from "next/image";

type contentInfo = {
  img: string;
  alt: string;
  p1: string;
  p2: string;
};

export default function ContentPage(props: contentInfo) {
  const [textError, setTextError] = useState(false);
  const [tour, setTour] = useState("");

  const handleRadioChange = (e: any) => {
    setTour(e.target.value);
    setTextError(false);
    console.log(tour);
  };

  return (
    <div className="">
      <div className="relative h-[500px] ">
        <Image
          alt={props.alt}
          src={props.img}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      {/* 888888888888888888888888888888888888888888888888888  */}

      <section className="flex flex-col-reverse   sm:flex-row lg:justify-center lg:gap-20">
        <div className="flex gap-10">
          <hr className="w-1 h-[100%]  bg-blue-300 " />
          <div>
            <section className="flex gap-12 my-8 text-base items center">
              <p>
                <span className="font-bold">W/FLIGHTS </span> <br /> Starts from{" "}
                <span className="text-orange-400 ">$2049</span>{" "}
              </p>
              <hr className="w-[0.5px] h-12 bg-black" />
              <p>
                <span className="font-bold">ONLY TOUR </span>
                <br /> Starts from{" "}
                <span className="text-orange-400 ">$1700</span>{" "}
              </p>
            </section>
            <section className="my-14 text-base">
              <p className="max-w-xl">{props.p1}</p>
              <p className="mt-12 max-w-xl">{props.p2}</p>
            </section>
          </div>
        </div>

        {/* 888888888888888888888888888888888888888888888888888  */}
        <div className="pb-12  max-h-screen max-w-4xl bg-blue-300 flex flex-col gap-5 pt-12 px-14 text-lg ">
          <h2 className="text-center font-bold text-3xl pb-5">CHECKOUT</h2>
          {/* TOUR AND FLIGHTS */}

          <form action="">
            <input
              type="radio"
              name="radio"
              value="Tour"
              className=""
              onChange={handleRadioChange}
            />
            <label htmlFor="radio"> Tour</label>
            <br />
            <br />
            <input
              type="radio"
              name="radio"
              value="Flight"
              className=""
              onChange={handleRadioChange}
            />
            <label htmlFor="radio"> W/Flights</label>
          </form>
          <hr className="bg-black h-[0.1rem] w-60" />

          {/* AVAILABILITY */}

          <div className="">
            <label className=" block">CHECK AVAILABILITY</label>
            <select name="" id="" className=" border border-black py-2 pr-20">
              <option value="">8/12/23 - 8/21/23</option>
              <option value="flight">10/2/23 - 10/11/23</option>
              <option value="tour">10/12/23 - 10/21/23</option>
              <option value="flight">10/22/23 - 10/31/23</option>
              <option value="tour">11/1/23 - 11/10/23</option>
              <option value="flight">11/11/23 - 11/20/23</option>
            </select>
          </div>
          <hr className="bg-black h-[5px ] w-60" />
          {/* Final PRICE */}

          <section className="mt-9">
            <h2>FINAL PRICE</h2>

            <p className="bg-white border border-black pr-48 pl-3 py-1 text-red-600 font-bold ">
              {tour === "Flight" ? "2499" : "1799"}{" "}
            </p>
          </section>

          {tour === "Tour" && (
            <button
              className="border border-black px-3 py-1 "
              onClick={handleCheckout}
            >
              BOOK NOW
            </button>
          )}

          {tour === "Flight" && (
            <button
              className="border border-black px-3 py-1 "
              onClick={handleCheckoutFlight}
            >
              BOOK NOW
            </button>
          )}
          {!tour && (
            <button
              className="border  px-3 py-1 "
              onClick={() => setTextError(!textError)}
            >
              BOOK NOW
            </button>
          )}
          {textError && (
            <p className="text-sm text-red-600">Please choose booking option</p>
          )}
        </div>
      </section>
    </div>
  );
}
