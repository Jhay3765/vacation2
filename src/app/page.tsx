import { Navbar } from "./components/Navbar";
import { Card } from "./components/card";
import Link from "next/link";
import { Package } from "./components/package";
export default function Home() {
  return (
    <>
      <div className="bg-slate-400 hero h-screen bg-cover bg-blend-multiply text-white   ">
        <div className=" py-48 px-48 z-40  absolute ">
          <p className=" text-8xl">
            Your Trip.
            <br />
            Your Date. <br />
            <span className="text-2xl font-light">
              {" "}
              We handle everything , all you have to do is{" "}
              <em className="text-blue-400 font-bold">Go </em>.
            </span>
          </p>
          <button className="bg-white py-4 px-10  text-blue-600 font-bold mt-7">
            {" "}
            BOOK NOW
          </button>
        </div>

        <div className="h-full bg-black opacity-50 w-full max-w-3xl absolute "></div>
      </div>

      <h2 className="text-center text-4xl mt-16 font-bold">
        Trust us , <em> Have Fun</em> <br></br>
        <span className="text-slate-600 text-3xl font-extralight">
          {" "}
          Getaways for the Gogetters
        </span>
      </h2>
      {/*           *********Beach Section*********                                            */}
      <section className="mt-16">
        <div className="flex container mx-auto mt-16 gap-20">
          <div>
            <h2 className="text-7xl ">Bleach Bliss</h2>
            <p className="max-w-4xl text-2xl text-slate-700 py-24">
              Sink your toes into pristine white sands and let the crystal-clear
              turquoise waters mesmerize you. From the exotic beaches of the
              Maldives to the vibrant shores of Miami, we offer a wide range of
              beach destinations to suit every preference. Whether you're
              looking for a romantic getaway, family fun, or thrilling water
              sports, our beach destinations have it all.
            </p>
          </div>
          <img className="w-2/4" src="beach.jpg" />
        </div>
        <button></button>
      </section>
      {/*           *********   Nature's Haven   *********                                            */}
      <section className="mt-16">
        <div className="flex container mx-auto mt-16 gap-20">
          <img className="w-2/4" src="forest.jpg" />
          <div>
            <h2 className="text-7xl ">Nature's Haven</h2>
            <p className="max-w-4xl text-2xl text-slate-700 py-24">
              Escape the hustle and bustle of everyday life and immerse yourself
              in the beauty of nature. Explore the lush rainforests of Costa
              Rica, hike through the majestic mountains of New Zealand, or
              embark on a wildlife safari in South Africa. Our nature
              destinations will leave you in awe of Earth's wonders and provide
              the perfect backdrop for adventure and relaxation.
            </p>
          </div>
        </div>
        <button></button>
      </section>
      {/*           *********Adventure Section*********                                            */}
      <section className="mt-16">
        <div className="flex container mx-auto mt-16 gap-20">
          <div>
            <h2 className="text-7xl ">Adventure Thrills</h2>
            <p className="max-w-4xl text-2xl text-slate-700 py-24">
              For adrenaline junkies and adventure enthusiasts, we offer
              thrilling destinations that will get your heart racing. Experience
              the thrill of zip-lining through Costa Rica's rainforests, go
              scuba diving in the Great Barrier Reef, or conquer the challenging
              peaks of the Himalayas. Get ready to push your limits and embark
              on the adventure of a lifetime.
            </p>
          </div>
          <img className="w-2/4" src="rollercoaster.jpg" />
        </div>
        <button></button>
      </section>
      {/*           *********GREY BANNER*********                                            */}
      <section className="bg-slate-300 flex flex-col justify-around">
        <h2 className="pt-14 pb-3 text-center text-4xl text-blue-600 font-semibold">
          Travel with us and enjoy
        </h2>
        <div className="flex justify-around mx-auto">
          <Card
            img="icons/cash.png"
            title="Incredible Value"
            text="Feature for feature, you'll get the best value in travel."
          />
          <Card
            img="icons/plane.png"
            title="Flights"
            text="Included with most packages, plus hotels, transfers & meals, all for one simple price."
          />
          <Card
            img="icons/hotel.png"
            title="High Quality Accomadations"
            text="Relax in top notch, centrally located hotels."
          />
          <Card
            img="icons/flightguy.png"
            title="Help 24/7"
            text="Friendly service plus a 24/7 emergency line."
          />
        </div>
      </section>
      <section>
        <p className="text-center font-bold container mx-auto mt-44 text-4xl"></p>
      </section>

      <section>
        <h2> </h2>
        <div></div>
      </section>
      <section>
        <h2 className="text-3xl text-center">
          {" "}
          Our popular destinations <br></br>
          <span className=" text-xl"> Travel your way</span>
        </h2>
        <div className="flex flex-wrap justify-center py-14 gap-8 flex-wrap">
          <Package
            title="Tokyo Express"
            text=" Take in modern Tokyo: Tokyo Tower, Sensoji Temple & Imperial Gardens; explore on your own with flights, airport transfers, deluxe hotel & city tour included"
          />
          <Package
            title="Tokyo Express"
            text=" Take in modern Tokyo: Tokyo Tower, Sensoji Temple & Imperial Gardens; explore on your own with flights, airport transfers, deluxe hotel & city tour included"
          />
          <Package
            title="Tokyo Express"
            text=" Take in modern Tokyo: Tokyo Tower, Sensoji Temple & Imperial Gardens; explore on your own with flights, airport transfers, deluxe hotel & city tour included"
          />
          <Package
            title="Tokyo Express"
            text=" Take in modern Tokyo: Tokyo Tower, Sensoji Temple & Imperial Gardens; explore on your own with flights, airport transfers, deluxe hotel & city tour included"
          />
        </div>
      </section>

      <footer className="h-96 bg-blue-200 leading-8 flex flex-col items-center g">
        <section className="flex justify-around w-full max-w-5xl py-24">
          <ul>
            <li>Hello</li>
          </ul>
          <ul>
            <li className="font-bold">About GOTRAVEL</li>
            <li>About Us</li>
            <li>Resources</li>
            <li>Policies</li>
          </ul>
          <ul>
            <li className="font-bold">Expolore Us</li>
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
    </>
  );
}
