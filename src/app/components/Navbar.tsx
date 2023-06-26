import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <header className=" bg-white w-full font-bold absolute opacity-80 z-40 flex justify-center  ">
      <nav className=" flex gap-24 sm:gap-36 items-center justify-between max-w-7xl ">
        <Image alt="logo" src="/logo2.png" width="150" height="100" />
        <ul className="flex gap-12 py-5 items-center">
          <Link href="/" className="hidden  sm:block">
            Home
          </Link>
          <Link href="/destinations" className="hidden  sm:block">
            Destinations
          </Link>
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
