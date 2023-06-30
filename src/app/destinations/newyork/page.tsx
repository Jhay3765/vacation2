"use client";
import { useState } from "react";
import { handleCheckout } from "./components/getDataTour";
import { handleCheckoutFlight } from "./components/getDataFlight";

import Image from "next/image";

export default function NewYork() {
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
          alt="New York"
          src="/locations/NY/newyork2.jpg"
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
              Welcome to New York, the vibrant and diverse metropolis of the
              United States! Get ready to immerse yourself in a city that never
              sleeps, where towering skyscrapers meet bustling streets and a
              melting pot of cultures awaits. Whether you're seeking world-class
              attractions, culinary adventures, or artistic wonders, New York
              offers an incredible array of experiences. Book your trip to the
              Big Apple today and get ready for an unforgettable journey.
            </p>
            <p className="mt-12 max-w-xl">
              Sightseeing and Activities: Statue of Liberty and Ellis Island:
              Marvel at the iconic Statue of Liberty, a symbol of freedom, and
              take a ferry ride to Ellis Island, where millions of immigrants
              once arrived in the United States. Explore the history and
              significance of these landmarks while enjoying panoramic views of
              the city skyline. Times Square: Immerse yourself in the dazzling
              lights and bustling energy of Times Square. Experience the iconic
              billboards, street performers, and Broadway theaters. Don't forget
              to catch a show and feel the magic of the world-renowned Theater
              District. Central Park: Escape the urban jungle and unwind in the
              peaceful oasis of Central Park. Take a leisurely stroll, rent a
              bike, or enjoy a picnic in this expansive green space. Visit
              famous sites within the park, such as the Bethesda Terrace,
              Strawberry Fields, and the Central Park Zoo. The Metropolitan
              Museum of Art: Delve into the world of art and culture at The Met,
              one of the largest and most prestigious art museums in the world.
              Explore its vast collection spanning various eras and cultures,
              from ancient Egyptian artifacts to modern masterpieces. Brooklyn
              Bridge: Walk across the iconic Brooklyn Bridge and enjoy
              breathtaking views of the Manhattan skyline. Explore the trendy
              neighborhoods of Brooklyn, sample local cuisine, and soak up the
              vibrant atmosphere of this borough. High Line: Experience a unique
              urban park by walking along the High Line, an elevated green space
              built on a historic freight rail line. Enjoy stunning views,
              public art installations, and lush gardens as you stroll through
              this elevated oasis in the heart of Manhattan. Museum of Modern
              Art (MoMA): Discover contemporary and modern art at the renowned
              MoMA. Marvel at works by Picasso, Warhol, Van Gogh, and other
              influential artists. The museum's vast collection and rotating
              exhibits provide a rich cultural experience. Food and Cultural
              Tours: Embark on a culinary adventure through New York's diverse
              neighborhoods. Sample authentic ethnic cuisine in Chinatown,
              Little Italy, or Harlem. Join food tours or explore local markets
              like Chelsea Market for a delicious journey through the city's
              flavors. From the towering skyscrapers of Manhattan to the vibrant
              neighborhoods of Brooklyn, New York offers a thrilling blend of
              art, culture, and urban energy. Whether you're captivated by the
              lights of Times Square, inspired by the art at The Met, or
              savoring the diverse cuisine, New York promises an unforgettable
              experience. Book your trip to the city that never sleeps and get
              ready to be swept away by its undeniable charisma.
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
              className="border -700 px-3 py-1 "
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
