import { Foot } from "../components/foot";

export default function About() {
  return (
    <main className="py-24 flex  justify-center border border-black">
      <section className="max-w-xl ">
        <h1 className="text-2xl   md:text-3xl font-bold py-3 text-center">
          Contact Us
        </h1>
        <h2 className=" px-8 sm:px-4  text-center pb-6">
          Have questions, need assistance, or ready to start planning your next
          unforgettable travel experience? We're here to help! Get in touch with
          our friendly team at GoTravel and let us guide you towards the perfect
          flights and tours package.
        </h2>
        <form action="" className="flex flex-col items-center">
          <section className="flex flex-col sm:justify-between sm:self-stretch sm:flex-row">
            <div className="">
              <label htmlFor="">First Name</label>
              <input
                type="text"
                className="border border-black block px-1 py-1"
              />
            </div>
            <div>
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                className="border border-black block px-1 py-1"
              />
            </div>
          </section>
          <div className="my-7  sm:self-stretch">
            <label htmlFor="">Message</label>
            <textarea className="border border-black block w-full h-52 p-1 " />
          </div>
          <input
            type="submit"
            value="Submit"
            className="border border-black py-2 px-10 my-4 font-bold"
          />
        </form>
      </section>
    </main>
  );
}
