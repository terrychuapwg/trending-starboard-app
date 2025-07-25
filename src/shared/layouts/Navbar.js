import { GithubOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white shadow-md px-4 py-3 flex justify-between items-center z-50">
      <Link to="/" className="text-xl font-bold text-orange-500 tracking-tight">
        Trending Starboard
      </Link>
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-orange-500 transition"
      >
        <GithubOutlined style={{ fontSize: "20px" }} />
      </a>
    </nav>
  );
};

export default Navbar;