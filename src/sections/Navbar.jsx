import React, { useState } from "react";

const Navbar = () => {



  const [isOpen, setIsOpen] = useState(false);



  
  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);



  const NavItems = () => {
    return (
      <ul className="nav-ul">
        {["About", "Projects", "Contact"].map((item, index) => (
          <li key={index} className="nav-li">
            <a href={`#${item.toLowerCase()}`} className="nav-link">
              {item}
            </a>
          </li>
        ))}
      </ul>
    );
  };




  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
        <div className="max-2-7xl mx-auto">
          <div className="flex items-center justify-between py-5 mx-auto c-space">
            <a
              href="/"
              className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
            >
              Hasir Ali
            </a>
            <button
              onClick={toggleMenu}
              className="text-nuetral-400 hover:text-white focus:outline-none sm:hidden flex "
              aria-label="toggle menu"
            >
              <img
                src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
                alt={isOpen ? "Close menu" : "Open menu"}
                className="w-6 h-6"
              />
            </button>

            <nav className="sm:flex hidden">
              <NavItems />
            </nav>
          </div>
        </div>
        {/* Sidebar menu for mobile view */}
        <div
          className={`nav-sidebar sm:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-screen" : "max-h-0"
          }`} 
        >
          <nav className="p-5">
            <NavItems />
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
