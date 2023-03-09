import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="flex bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg bg-gradient-to-r from-cyan-600 via-red-600 to-blue-700 px-4 py-4 h-[64px] items-center">
      <Image src="/logo_3.png" width="100" height="40" className="flex mx-2" />
      <ul className="flex">
        <li className="mr-6 hover:bg-sky-700 hover:rounded-lg">
          <Link href="/">Home</Link>
        </li>
        <li className="mr-6 hover:bg-sky-700 hover:rounded-lg">
          <Link href="/cardlist">Card List</Link>
        </li>
        <li className="mr-6 hover:bg-sky-700 hover:rounded-lg">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
