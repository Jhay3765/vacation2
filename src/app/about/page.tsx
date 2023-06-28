import Image from "next/image";
import { Foot } from "../components/foot";

export default function About() {
  return (
    <main className=" ">
      <div className="bg-black h-16"></div>
      <div className="pt-48  flex flex-col items-center">
        <section className="max-w-4xl text-lg leading-9">
          <p className="font-bold text-3xl text-center"> Welcome to GoTravel</p>
          <p>
            <br /> <br /> At GoTravel, we believe that travel should be an
            unforgettable experience, seamlessly blending adventure, relaxation,
            and exploration. We are your ultimate travel companion, offering a
            unique approach to booking flights and tours all in one convenient
            package.
          </p>
          <div className="h-72 w-[200] relative  my-14">
            <Image
              alt="airport"
              src="/airport.jpg"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </section>
        <section>
          <p className="max-w-4xl text-lg leading-9">
            Our mission is to make travel planning hassle-free and exciting for
            our customers. We understand that organizing flights and finding the
            perfect tours can be time-consuming and overwhelming. That's why
            we've curated a wide selection of handpicked flight options and
            meticulously crafted tour packages to cater to your travel
            preferences and desires. With GoTravel, you can bid farewell to the
            arduous task of juggling multiple websites or spending endless hours
            researching and comparing prices. Our user-friendly platform
            provides a one-stop solution, allowing you to effortlessly browse
            and book flights and tours that are tailor-made for your dream
            vacation.
          </p>
        </section>

        <section className="">
          <h1 className="font-bold text-2xl my-14 text-center">
            What People Say About Us
          </h1>
          <div className=" max-w-4xl shadow-2xl flex flex-col justify-center items-center text-center gap-4 py-5 my-10 px-14 ">
            <img
              src="people/person1.png"
              alt=""
              className="rounded-full w-1/8"
            />
            <p className="max-w-2xl ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor
              <br />
              <span className="font-bold block py-4">-Joe Stanlee</span>
            </p>
          </div>
        </section>
      </div>
      <Foot text="36" />
    </main>
  );
}
