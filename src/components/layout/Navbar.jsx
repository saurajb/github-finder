import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar({ title }) {
  const navclass =
    "text-white font-bold navbar mb-12 pl-2 shadow-lg bg-neutral text-neutral-content";

  return (
    <div className={navclass}>
      {/* Logo and the name */}
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="inline pr-2 text-3xl" />
          <Link to="./" className="text-lg font-bold align-middle">
            {title}
          </Link>
        </div>

        {/* Navbar Options */}
        <div className="flex-1 px-2 mx2">
          <div className="flex justify-end">
            <Link to="./" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>
            <Link to="./about" className="btn btn-ghost btn-sm rounded-btn">
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
