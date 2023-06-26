import Image from "next/image";

export const Navbar = () => {
  return (
    <header className=" bg-white w-full font-bold absolute opacity-80 z-40 flex justify-center ">
      <nav className="flex gap-52 items-center justify-between max-w-7xl ">
        <Image alt="logo" src="/logo2.png" width="150" height="100" />
        <ul className="flex gap-12 py-5 items-center">
          <li className="hidden  sm:block">Home</li>
          <li className="hidden  sm:block">Destinations</li>
          <li className="hidden  lg:block">Experiences</li>
          <li className="hidden  2xl:block">Blog</li>
          <li className="hidden  2xl:block">About</li>
          <li className="hidden  2xl:block">Contact</li>
          <Image
            alt="menu"
            src="/icons/menu.png"
            width="30"
            height="1"
            className="2xl:hidden"
          />
        </ul>
      </nav>
    </header>
  );
};
