import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white shadow-md px-4 py-3 flex justify-between items-center z-50">
      <Link to="/" className="text-xl font-bold text-orange-500 tracking-tight">
        Trending Repos
      </Link>
    </nav>
  );
};

export default Navbar;