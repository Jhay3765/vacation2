"use client";
import { useState } from "react";
import { handleCheckout } from "./components/getDataTour";
import { handleCheckoutFlight } from "./components/getDataFlight";

import Image from "next/image";

export default function Paris() {
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
          alt="paris"
          src="/locations/france/france2.jpg"
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
              Welcome to Paris, the enchanting capital of France! Prepare to
              indulge in a city that seamlessly blends timeless elegance with
              artistic charm. Whether you're seeking iconic landmarks, culinary
              delights, or romantic escapades, Paris offers an incredible array
              of experiences. Book your trip to Paris today and get ready to
              embark on an unforgettable journey.
            </p>
            <p className="mt-12 max-w-xl">
              Sightseeing and Activities: Eiffel Tower: Soar to new heights at
              the Eiffel Tower, one of the world's most famous landmarks. Take
              in breathtaking views of the city from the observation decks,
              enjoy a romantic picnic in its surrounding gardens, or dine at one
              of the tower's elegant restaurants. Louvre Museum: Immerse
              yourself in art and history at the Louvre Museum, home to
              thousands of masterpieces including the iconic Mona Lisa. Explore
              its vast collection, wander through grand galleries, and marvel at
              the museum's architectural splendor. Notre-Dame Cathedral: Step
              into the Gothic masterpiece that is Notre-Dame Cathedral. Admire
              its intricate facade, venture inside to witness its awe-inspiring
              stained glass windows, or climb to the top for panoramic views of
              Paris. Montmartre: Wander through the bohemian neighborhood of
              Montmartre, known for its charming streets and artistic heritage.
              Visit the iconic Sacré-Cœur Basilica, explore quirky art studios,
              and soak up the vibrant atmosphere of the lively cafés and street
              artists. Seine River Cruise: Embark on a romantic boat cruise
              along the Seine River, gliding past Parisian landmarks such as the
              Louvre, Notre-Dame, and the enchanting bridges. Admire the city's
              beauty from a different perspective and enjoy a memorable evening
              under the stars. Champs-Élysées: Stroll down the famous
              Champs-Élysées, a grand avenue lined with luxury boutiques, cafés,
              and theaters. Take in the lively atmosphere, shop for high-end
              fashion, or enjoy a delicious meal at one of the many charming
              restaurants. Palace of Versailles: Take a day trip to the Palace
              of Versailles, a breathtaking royal residence located just outside
              of Paris. Explore the opulent palace rooms, wander through the
              magnificent gardens, and be transported back to the era of French
              royalty. French Cuisine: Indulge in the culinary delights of
              Paris. From exquisite pastries at quaint patisseries to gourmet
              meals at Michelin-starred restaurants, Paris offers a gastronomic
              adventure. Don't forget to savor classic dishes like escargots,
              coq au vin, and crème brûlée. Whether you're captivated by the
              Eiffel Tower, enthralled by the Louvre, or enchanted by the
              charming streets of Montmartre, Paris promises a captivating
              experience that will stay with you forever. Book your trip to the
              City of Light and prepare to fall in love with its undeniable
              charm.
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

        <hr className="w-[0.5px] h-screen bg-black" />
      </section>
    </div>
  );
}
