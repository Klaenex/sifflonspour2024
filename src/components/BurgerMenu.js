import React from "react";
import { useState } from "react";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const burgerClass = isOpen ? "open" : "closed";
  return (
    <div className="burger" onClick={toggleMenu}>
      <span className={"top top--" + burgerClass}></span>
      <span className={"middle middle--" + burgerClass}></span>
      <span className={"bottom bottom--" + burgerClass}></span>
    </div>
  );
};
export default BurgerMenu;
