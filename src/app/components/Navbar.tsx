export const Navbar = () => {
  return (
    <header className=" bg-white w-full font-bold absolute opacity-80 z-40 flex justify-center">
      <nav className="flex gap-52 items-center justify-between max-w-7xl">
        <img src="logo2.png" className="w-36" />
        <ul className="flex gap-12 py-5">
          <li>Home</li>
          <li>Destinations</li>
          <li>Experiences</li>
          <li>Blog</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};
