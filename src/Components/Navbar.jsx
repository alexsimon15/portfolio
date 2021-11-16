import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [active, setActive] = useState(false);

  const navbarScroll = () => {
    if (window.scrollY > 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const handleClick = () => {
    if (active === true) {
      setActive(false);
    } else {
      setActive(true);
    }
  };
  window.addEventListener("scroll", navbarScroll);
  return (
    <nav className={navbar ? "navbar sticky" : "navbar"}>
      <div className='max-width'>
        <div className='logo'>
          <a href='#'>
            Alex<span>S.</span>
          </a>
        </div>
        <ul
          className={active ? "menu active" : "menu"}
          onClick={() => setActive(false)}
        >
          <li>
            <a href='#home' className='menu-btn'>
              Home
            </a>
          </li>
          <li>
            <a href='#about' className='menu-btn'>
              About
            </a>
          </li>
          <li>
            <a href='#services' className='menu-btn'>
              Services
            </a>
          </li>

          <li>
            <a href='#projects' className='menu-btn'>
              Projects
            </a>
          </li>
          <li>
            <a href='#contact' className='menu-btn'>
              Contact
            </a>
          </li>
        </ul>
        <div className='menu-btn'>
          <i onClick={() => handleClick()}>
            {active ? <AiOutlineClose /> : <FaBars />}
          </i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
