import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="blend text-white w-full z-50 ">
      <div className="bb container mx-auto">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className=" text-2xl font-light inter">
              {`//rashadDev.`}
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="inter cursor-pointer hover:underline font-light">
              home
            </Link>
            <Link to="/projects" className="inter cursor-pointer hover:underline font-light">
              projects
            </Link>
            <Link to="/blog" className="inter cursor-pointer hover:underline font-light">
              blog
            </Link>
            <Link to="/resume" className="inter cursor-pointer hover:underline font-light">
              cv
            </Link>
            <a href="#footer" className="inter cursor-pointer hover:underline font-light">
              contact
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleNavbar}
              className="focus:outline-none focus:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-black`}
        onClick={closeNavbar}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/" className="block inter cursor-pointer hover:underline font-light">
            home
          </Link>
          <Link to="/projects" className="block inter cursor-pointer hover:underline font-light">
            projects
          </Link>
          <Link to="/blog" className="block inter cursor-pointer hover:underline font-light">
            blog
          </Link>
          <Link to="/resume" className="block inter cursor-pointer hover:underline font-light">
            cv
          </Link>
          <a href="#footer" className="block inter cursor-pointer hover:underline font-light">
            contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
