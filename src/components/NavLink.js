import React from "react";

const NavLink = ({ isMenuOpen }) => {
  const menuOpen = isMenuOpen
    ? "mobile mobile--nav__open"
    : "mobile mobile--nav__closed";
  return (
    <div className={menuOpen}>
      <ul className="list list--link">
        <li>
          <a href="../Presentation/">Présentation</a>
        </li>
        <li>
          <a href="../education-permanente/">
            Éducation Permanente & Cohésion Sociale
          </a>
          <ul className="list list--link">
            <li>
              <a href="../education-permanente/animations">Nos animations</a>
            </li>
            <li>
              <a href="../education-permanente/formations">Nos formations</a>
            </li>
            <li>
              <a href="../education-permanente/outils">
                Nos outils pédagogiques
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="../contact/">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default NavLink;
