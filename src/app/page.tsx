import { Navbar } from "./components/Navbar";
import { Card } from "./components/card";
import Link from "next/link";
import { Package } from "./components/package";
import Image from "next/image";
import { Foot } from "./components/foot";

export default function Home() {
  return (
    <>
      <div className="bg-slate-400 hero h-screen bg-cover bg-blend-multiply text-white  ">
        <div className="h-screen bg-[#00000080]  max-w-3xl flex  items-center justify-center  ">
          <div className="   lg: z-40  flex  flex-col  ">
            <p className="text-6xl  sm:text-7xl   opacity-100 lg:text-8xl">
              Your Trip.
              <br />
              Your Date. <br />
              <span className="text-base py-0 max-w-xs  sm:text-2xl font-light">
                {" "}
                We handle everything , all you have to do is{" "}
                <em className="text-blue-400 font-bold ">Go </em>.
              </span>
            </p>

            <Link
              href="/destinations"
              className=" text-s sm:text-lg  py-2 px-5 bg-white sm:py-4 sm:px-10  text-blue-600 font-bold mt-7 text-center"
            >
              {" "}
              BOOK NOW
            </Link>
          </div>
        </div>
      </div>
      {/****************   PACKAGE---PREVIEW    *************/}
      <section className="mt-20">
        <h2 className="text-5xl font-bold text-center">
          {" "}
          One Stop , Easy Packages <br></br>
          <span className=" text-xl"> Travel your way</span>
        </h2>
        <div className="flex flex-wrap justify-center py-14 gap-8 ">
          <Package
            link="/destinations/japan"
            img="/locations/japan/kimono.jpg"
            title="Tokyo Express"
            text=" Take in modern Tokyo: Tokyo Tower, Sensoji Temple & Imperial Gardens; explore on your own with flights, airport transfers, deluxe hotel & city tour included"
          />
          <Package
            link="/destinations/paris"
            img="/locations/france/tower.jpg"
            title="Paris Delights"
            text=" Experience the Timeless Charms of Paris: Eiffel Tower, Louvre Museum & Montmartre; immerse yourself in the City of Lights with flights, airport transfers, luxury accommodations & guided city tour included."
          />
          <Package
            link="/destinations/dubai"
            img="/locations/dubai/dubai.jpg"
            title="Dubai Extravaganza"
            text=" Burj Khalifa, Jumeirah Mosque & Desert Safari; indulge in luxury with flights, airport transfers, premium hotel & city tour included"
          />
          <Package
            link="/destinations/newyork"
            img="/locations/NY/newyork.jpg"
            title="NYC Escape"
            text=" Vibrant New York: Statue of Liberty, Times Square & Central Park; immerse yourself in the city that never sleeps with flights, airport transfers, upscale hotel & city tour included"
          />
        </div>
      </section>
      {/*         *********GREY BANNER*********          */}
      <section className="bg-black flex flex-col justify-around mt-24 text-white ">
        <h2 className="pt-14 pb-3 text-center text-4xl text-blue-400 font-semibold">
          Travel with us and enjoy
        </h2>
        <div className="flex justify-around mx-auto flex-wrap">
          <Card
            img="icons/cash.png"
            title="Unbeatable Affordability"
            text="Every aspect considered, you'll receive unparalleled value when it comes to your travel experience.."
          />
          <Card
            img="icons/plane.png"
            title="Airfare"
            text="Included in the all of our packages, along with hotels, transfers, and meals, all wrapped up in one transparent price."
          />
          <Card
            img="icons/hotel.png"
            title="Superior Lodging Options"
            text="Indulge in first-rate accommodations that are conveniently situated at the heart of your destination."
          />
          <Card
            img="icons/flightguy.png"
            title="Assistance Around the Clock"
            text="Enjoy our welcoming support and have peace of mind with access to a dedicated emergency line available 24/7."
          />
        </div>
      </section>
      {/*     ***************     */}
      <section className="blue-back py-36 relative bg-left">
        <main className="max-w-5xl container mx-auto mt-14 bg-white px-14 py-14 rounded-t-3xl">
          <h2 className="  text-center text-4xl font-bold pb-14">
            Trust us , Have Fun <br></br>
            <span className="text-slate-600 text-3xl font-extralight">
              {" "}
              New Packages Coming{" "}
              <span className="text-red-500 font-normal"> 2024</span>
            </span>
          </h2>
          {/*           *********Beach Section*********                                            */}
          <div className=" flex flex-col gap-1   items-center    lg:flex lg:flex-row  lg:gap-24">
            <div className="grow">
              <h2 className="text-5xl ">
                Bleach Bliss
                <br />
                <span className="text-red-500 text-2xl">
                  Coming Summer 2024
                </span>
              </h2>
              <p className="max-w-6xl text-base text-slate-700 pt-8 ">
                Sink your toes into pristine white sands and let the
                crystal-clear turquoise waters mesmerize you. From the exotic
                beaches of the Maldives to the vibrant shores of Miami, we offer
                a wide range of beach destinations to suit every preference.
                Whether you're looking for a romantic getaway, family fun, or
                thrilling water sports, our beach destinations have it all.
              </p>
            </div>
            <div className="w-full relative h-80">
              <Image
                alt="beach"
                src="/beach.jpg"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/*           *********   Nature's Haven   *********                                            */}

          <div className="flex  gap-1 flex-col-reverse     lg:flex lg:flex-row container mx-auto mt-16 lg:gap-20">
            <div className="w-full relative h-80">
              <Image
                alt="beach"
                src="/forest.jpg"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <h2 className="text-5xl ">
                Nature's Haven <br />
                <span className="text-red-500 text-2xl">Coming May 2024</span>
              </h2>
              <p className="max-w-7xl text-base text-slate-700 pt-8 ">
                Escape the hustle and bustle of everyday life and immerse
                yourself in the beauty of nature. Explore the lush rainforests
                of Costa Rica, hike through the majestic mountains of New
                Zealand, or embark on a wildlife safari in South Africa. Our
                nature destinations will leave you in awe of Earth's wonders and
                provide the perfect backdrop for adventure and relaxation.
              </p>
            </div>
          </div>

          {/*           *********Adventure Section*********     */}

          <div className="flex  gap-1 text-right flex-col  lg:flex lg:flex-row container mx-auto mt-16 lg:gap-20">
            <div>
              <h2 className="text-5xl ">
                Adventure Thrills <br />
                <span className="text-red-500 text-2xl">Coming May 2024</span>
              </h2>
              <p className="max-w-7xl text-base text-slate-700 pt-8">
                For adrenaline junkies and adventure enthusiasts, we offer
                thrilling destinations that will get your heart racing.
                Experience the thrill of zip-lining through Costa Rica's
                rainforests, go scuba diving in the Great Barrier Reef, or
                conquer the challenging peaks of the Himalayas. Get ready to
                push your limits and embark on the adventure of a lifetime.
              </p>
            </div>
            <div className="w-full relative h-80">
              <Image
                alt="beach"
                src="/rollercoaster.jpg"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <button></button>
        </main>
      </section>
      {/* ************      THIS IS THE FOOTER     *************    */}
      <Foot text="" />
    </>
  );
}
