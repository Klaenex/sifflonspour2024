import React, { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import NavLink from "./NavLink";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu(!setIsOpenMenu);
  };
  return (
    <header>
      <nav>
        <h1 className="logo">
          <span>SEFoP</span>
          <img
            src={process.env.PUBLIC_URL + "/img/logo_sefop.svg"}
            alt="Logo SEFoP"
          />
        </h1>
        <BurgerMenu onToggle={toggleMenu} />
        <NavLink isOpenMenu={isOpenMenu} />
      </nav>
    </header>
  );
};

export default Header;
