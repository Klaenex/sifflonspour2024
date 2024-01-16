import React from "react";

const Header = () => {
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
        <div className="burger">
          <span></span>
        </div>
        <ul>
          <li>
            <a href="../Presentation/">Présentation</a>
          </li>
          <li>
            <a href="../education-permanente/">
              Éducation Permanente & Cohésion Sociale
            </a>
            <ul>
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
      </nav>
    </header>
  );
};

export default Header;
