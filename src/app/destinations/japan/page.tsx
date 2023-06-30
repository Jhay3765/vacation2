"use client";
import { useState } from "react";
import { handleCheckout } from "./components/getDataTour";
import { handleCheckoutFlight } from "./components/getDataFlight";

import Image from "next/image";

export default function Japan() {
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
          alt="japan"
          src="/locations/japan/japan.jpg"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      <section className="flex justify-center gap-60">
        <hr className="w-[0.5px] h-screen bg-black" />
        <div>
          <section className="flex gap-12 my-8 text-lg items center">
            <p>
              W/FLIGHTS <br /> Starts from{" "}
              <span className="text-orange-400 ">$2049</span>{" "}
            </p>
            <hr className="w-[0.5px] h-12 bg-black" />
            <p>
              ONLY TOUR <br /> Starts from{" "}
              <span className="text-orange-400 ">$1700</span>{" "}
            </p>
          </section>
          <section className="my-14 text-lg">
            <p className="max-w-xl">
              Welcome to Tokyo, the vibrant and dynamic capital of Japan!
              Prepare to immerse yourself in a city that seamlessly blends
              ancient traditions with cutting-edge technology. Whether you're
              seeking cultural landmarks, culinary delights, or urban
              adventures, Tokyo offers an incredible array of experiences. Book
              your trip to Tokyo today and get ready to embark on an
              unforgettable journey.
            </p>
            <p className="mt-12 max-w-xl">
              Sightseeing and Activities: Tsukiji Fish Market: Dive into the
              vibrant atmosphere of one of the world's largest fish markets.
              Witness the bustling tuna auctions, indulge in fresh sushi, and
              explore the surrounding shops for a taste of Tokyo's culinary
              scene. Meiji Shrine: Take a serene stroll through the tranquil
              grounds of Meiji Shrine, dedicated to the deified spirits of
              Emperor Meiji and Empress Shoken. Experience the serene beauty of
              the shrine's lush gardens and admire the impressive architecture.
              Shibuya Crossing: Be a part of the iconic Shibuya Crossing,
              Tokyo's famous scramble intersection. Watch as a sea of
              pedestrians cross the streets from all directions, creating a
              mesmerizing spectacle. Explore the vibrant shopping and
              entertainment district surrounding the crossing. Tokyo Skytree:
              Reach new heights at Tokyo Skytree, one of the tallest towers in
              the world. Ascend to the observation decks for panoramic views of
              the city, visit the shops and restaurants in the tower, or simply
              marvel at its architectural brilliance. Traditional Tea Ceremony:
              Immerse yourself in Japanese culture by participating in a
              traditional tea ceremony. Learn the art of preparing and serving
              matcha tea while appreciating the grace and elegance of this
              ancient practice.
            </p>
          </section>
        </div>
        <div className="max-h-max max-w-4xl bg-orange-300 flex flex-col gap-5 pt-24 px-24 text-lg ">
          <h2 className="text-center font-bold text-4xl pb-10">CHECKOUT</h2>
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
              className="border px-3 py-1 "
              onClick={() => setTextError(!textError)}
            >
              BOOK NOW
            </button>
          )}
          {textError && (
            <p className="text-sm text-red-600">Please choose booking option</p>
          )}
        </div>

        <hr className="w-[0.5px] h-screen bg-black" />
      </section>
    </div>
  );
}
