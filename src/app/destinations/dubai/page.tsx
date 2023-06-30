"use client";
import { useState } from "react";
import { handleCheckout } from "./components/getDataTour";
import { handleCheckoutFlight } from "./components/getDataFlight";

import Image from "next/image";

export default function Dubai() {
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
          alt="dubai"
          src="/locations/dubai/dubai2.jpg"
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
              Welcome to Dubai, the dazzling and futuristic city of the United
              Arab Emirates! Prepare to immerse yourself in a world where
              luxury, innovation, and architectural wonders redefine what is
              possible. Whether you're seeking extravagant shopping,
              awe-inspiring landmarks, or desert adventures, Dubai offers an
              incredible array of experiences. Book your trip to Dubai today and
              get ready to embark on an unforgettable journey.
            </p>
            <p className="mt-12 max-w-xl">
              Burj Khalifa: Soar to new heights at the Burj Khalifa, the world's
              tallest building. Ascend to the observation deck on the 148th
              floor for breathtaking views of the city's skyline, or enjoy a
              meal at one of the high-end restaurants located within this
              architectural marvel. The Dubai Mall: Indulge in a shopping spree
              at The Dubai Mall, one of the world's largest shopping
              destinations. Explore a vast array of designer brands, enjoy
              entertainment options like an indoor theme park and an ice rink,
              and witness the mesmerizing Dubai Fountain show. Palm Jumeirah:
              Visit the man-made island of Palm Jumeirah, shaped like a palm
              tree. Relax on pristine beaches, soak up the sun at luxurious
              resorts, or embark on a yacht cruise to witness the breathtaking
              skyline from the Arabian Gulf. Dubai Marina: Experience the modern
              and vibrant atmosphere of Dubai Marina. Take a leisurely stroll
              along the waterfront promenade, dine at exquisite restaurants, or
              go on a thrilling speedboat tour to see the city's impressive
              skyline from the water. Dubai Desert Safari: Venture into the
              Arabian desert on a thrilling desert safari adventure. Ride over
              golden sand dunes in a 4x4 vehicle, experience the adrenaline rush
              of sandboarding, enjoy a traditional BBQ dinner under the stars,
              and witness mesmerizing cultural performances. Dubai Creek:
              Explore the historic heart of Dubai at Dubai Creek. Take a
              traditional abra (water taxi) ride along the creek, visit the
              vibrant spice and gold souks, and immerse yourself in the city's
              rich trading heritage. Dubai Museum: Step back in time at the
              Dubai Museum, located within the Al Fahidi Fort. Learn about the
              city's history, culture, and traditional way of life through
              fascinating exhibits and displays. Jumeirah Mosque: Admire the
              grandeur of Jumeirah Mosque, one of Dubai's most beautiful
              mosques. Take a guided tour to learn about Islamic culture,
              architecture, and traditions. From the towering heights of Burj
              Khalifa to the serene beauty of Palm Jumeirah, Dubai offers a
              mesmerizing blend of luxury, culture, and adventure. Whether
              you're captivated by the city's modern skyline, enchanted by its
              traditional souks, or exploring the vast desert landscapes, Dubai
              promises an unforgettable experience. Book your trip to this
              extraordinary city and get ready to be dazzled by its opulence and
              innovation.
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
