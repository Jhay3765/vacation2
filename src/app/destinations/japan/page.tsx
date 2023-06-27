"use client";
import { useState } from "react";

import Image from "next/image";

export default function Japan() {
  const [tour, setTour] = useState(true);

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
        <div className="h-96 w-96 bg-orange-100 flex flex-col gap-10 justify-center items-center">
          <select name="" id="">
            <option value="">ONLY TOUR</option>
            <option value="">FLIGHT</option>
          </select>

          <select name="" id="">
            <option value="">CHECK AVAILABILITY</option>
            <option value="">8/12/23 - 8/21/23</option>
            <option value="flight">10/2/23 - 10/11/23</option>
            <option value="tour">10/12/23 - 10/21/23</option>
            <option value="flight">10/22/23 - 10/31/23</option>
            <option value="tour">11/1/23 - 11/10/23</option>
            <option value="flight">11/11/23 - 11/20/23</option>
          </select>

          <p>
            FINAL PRICE <br /> $2499{" "}
          </p>

          <button>BOOK NOW</button>
        </div>

        <hr className="w-[0.5px] h-screen bg-black" />
      </section>
    </div>
  );
}
