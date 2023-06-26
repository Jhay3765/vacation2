import { Collage } from "./components/collage";

export default function Destinations() {
  return (
    <>
      <div className="py-36">
        {" "}
        <h1 className="text-center text-4xl font-bold ">
          {" "}
          Explore Our Rich Destinations
        </h1>
      </div>
      <div className="bg-white max-w-7xl h-36 rounded-xl container mx-auto mb-24">
        <select name="destinations">
          <option value="">all destinations</option>
          <option value="">japan</option>
          <option value="">usa</option>
        </select>
      </div>

      <div className=" flex justify-center w-full">
        <Collage />
      </div>
    </>
  );
}
