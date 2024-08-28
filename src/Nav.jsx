import { NavLink } from "react-router-dom";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="relative w-1/3">
      <div className="hidden md:flex  justify-end space-x-4 ">
        <NavLink to="/LoginSignupForm">Login/Signup</NavLink>
        <NavLink to="/artist">Artist Page</NavLink>
        <NavLink to="/mypage">My Page</NavLink>
      </div>

      {/* mobile menu button */}
      <div className="md:hidden flex justify-end">
        <button onClick={toggleNav}>
          {isOpen ? <IoIosClose /> : <IoIosMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center">
          <button
            onClick={toggleNav}
            className="absolute top-4 right-4 text-2xl"
          >
            <IoIosClose />
          </button>
          <NavLink to="/LoginSignupForm" onClick={toggleNav} className="py-2">
            Login/Signup
          </NavLink>
          <NavLink to="/" onClick={toggleNav} className="py-2">
            My Page
          </NavLink>
          <NavLink to="/" onClick={toggleNav} className="py-2">
            Artist Page
          </NavLink>
          <NavLink to="/LoginSignupForm" onClick={toggleNav} className="py-2">
            Login/Signup
          </NavLink>
          <NavLink to="/mypage" onClick={toggleNav} className="py-2">
            My Page
          </NavLink>
          <NavLink to="/" onClick={toggleNav} className="py-2">
            Artist Page
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Nav;
