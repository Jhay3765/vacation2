import Link from "next/link";

type travelPackage = {
  title: string;
  text: string;
};
export const Package = (props: travelPackage) => {
  return (
    <div className="bg-gray-200 rounded-xl shadow-sm shadow-slate-700">
      <h2 className="text-purple-900 text-shadow shadow-black text-3xl text-center py-4 ">
        {props.title}
      </h2>
      <div className=" max-w-sm flex flex-col rounded-3xl justify-center ">
        <img
          className=" max-h-44 object-cover "
          src="/locations/japan/kimono.jpg"
          alt=""
        />
        <div className="py-3 px-3">
          <p className="p "> {props.text}</p>
          <div className="flex mt-4 ">
            <p>
              FROM
              <span className="text-orange-600 font-bold"> $2049</span> <br />
              W/FLIGHTS
            </p>{" "}
            <hr className="h-12 w-[0.5px] bg-slate-500 mx-2" />
            <p>
              FROM
              <span className="text-orange-600 font-bold"> $2049</span> <br />
              W/FLIGHTS
            </p>{" "}
            <hr className="h-12 w-[0.5px] bg-slate-500 mx-2" />
            <p>
              FROM
              <span className="text-orange-600 font-bold"> $2049</span> <br />
              W/FLIGHTS
            </p>{" "}
          </div>
        </div>
      </div>
      <div className="py-10 ml-3">
        <Link
          href="/"
          className="text-blue-400 font-bold border-2 border-blue-400  py-1 px-3  "
        >
          MORE INFO
        </Link>
      </div>
    </div>
  );
};