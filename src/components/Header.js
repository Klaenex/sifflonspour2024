import React, { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import NavLink from "./NavLink";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };
  return (
    <header>
      <nav>
        <h1 className="logo">
          <img
            src={process.env.PUBLIC_URL + "/img/logo_sefop.svg"}
            alt="SEFoP"
          />
        </h1>
        <BurgerMenu isOpen={isMenuOpen} onToggle={toggleMenu} />
        <NavLink isMenuOpen={isMenuOpen} />
      </nav>
    </header>
  );
};

export default Header;
