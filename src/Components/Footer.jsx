import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function Footer() {
  const [scrollUp, setScrollUp] = useState(false);

  const scrollUpBtn = () => {
    if (window.scrollY > 500) {
      setScrollUp(true);
    } else {
      setScrollUp(false);
    }
  };

  window.addEventListener("scroll", scrollUpBtn);
  return (
    <>
      <div className={scrollUp ? "scroll-up-btn show" : "scroll-up-btn"}>
        <a href='#home'>
          <i>
            <FaArrowUp />
          </i>
        </a>
      </div>
      <footer>
        <span>© 2021 Alex Simon. All Rights Reserved.</span>
      </footer>
    </>
  );
}

export default Footer;
