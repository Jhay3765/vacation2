import Link from "next/link";

type travelPackage = {
  title: string;
  text: string;
  img: string;
  link: string;
};
export const Package = (props: travelPackage) => {
  return (
    <div className=" rounded-xl shadow-2xl shadow-black">
      <h2 className="text-shadow-sm shadow-black text-3xl text-center py-4 font-light ">
        {props.title}
      </h2>
      <div className=" max-w-sm flex flex-col rounded-3xl justify-center ">
        <img className=" max-h-44 object-cover " src={props.img} alt="" />
        <div className="py-3 px-3">
          <p className="p "> {props.text}</p>
          <div className="flex mt-4 ">
            <p>
              FROM
              <span className="text-red-600 font-bold"> $2049</span> <br />
              W/FLIGHTS
            </p>{" "}
            <hr className="h-12 w-[0.5px] bg-slate-500 mx-2" />
            <p>
              FROM
              <span className="text-red-600 font-bold"> $2049</span> <br />
              W/FLIGHTS
            </p>{" "}
            <hr className="h-12 w-[0.5px] bg-slate-500 mx-2" />
            <p>
              FROM
              <span className="text-red-600 font-bold"> $2049</span> <br />
              W/FLIGHTS
            </p>{" "}
          </div>
        </div>
      </div>
      <div className="py-10 ml-3">
        <Link
          href={props.link}
          className="text-blue-600 font-bold border-2 border-blue-600  py-1 px-4  "
        >
          MORE INFO
        </Link>
      </div>
    </div>
  );
};
