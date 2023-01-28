import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex filter drop-shadow-md bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 px-4 py-4 h-[64px] items-center">
      <ul className="flex">
        <li className="mr-6">
          <Link href="/">Home</Link>
        </li>
        <li className="mr-6">
          <Link href="/cardlist">Card List</Link>
        </li>
        <li className="mr-6">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
