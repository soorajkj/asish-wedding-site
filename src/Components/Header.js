import React from "react";
// import { useState } from "react";
// import { CgMenu, CgClose } from "react-icons/cg";
import { GiNestedHearts } from "react-icons/gi";
const Header = () => {
  //   const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="/">
            <span>Alphonsa</span>
            <GiNestedHearts />
            <span>Asish</span>
          </a>
        </div>
        {/* <div className="mobile-menu">
          <button
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            {isMenuOpen ? <CgClose /> : <CgMenu />}
          </button>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
