import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex bg-opacity-50 drop-shadow-lg bg-gray-500 backdrop-blur-lg rounded filter px-4 py-4 h-[64px] items-center sticky">
      <Image src="/logo_3.png" width="100" height="40" className="flex mx-2" />
      <ul className="flex">
        <li className="mr-6 hover:bg-sky-700 hover:rounded-lg">
          <Link href="/">Home</Link>
        </li>
        <li className="mr-6 hover:bg-sky-700 hover:rounded-lg">
          <Link href="/cardlist">Card List</Link>
        </li>
        <li className="mr-6 hover:bg-sky-700 hover:rounded-lg">
          <Link href="/myDecks">My Decks</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
