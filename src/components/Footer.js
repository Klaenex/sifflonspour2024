import React from "react";

const Footer = () => {
  const antennes = [
    {
      nom: "Antenne du Brabant Wallon",
      adresse: "Chaussée de Louvain, 56p b - 1380 Ohain",
      telephone: "(02) 513.83.38",
      email: "bw@sefop.org",
    },
    {
      nom: "Antenne de Bruxelles",
      adresse: "Rue Saint Ghislain, 26 - 1000 Bruxelles",
      telephone: "(02) 513.83.38",
      email: "bxl@sefop.org",
    },
    {
      nom: "Antenne de Liège",
      adresse: "Rue Sainte Marguerite, 82 - 4000 Liège",
      telephone: "(04) 362.79.71",
      email: "liege@sefop.org",
    },
  ];

  return (
    <footer>
      <div className="wrapper__separator">
        <span className="separator"></span>
        <img src={process.env.PUBLIC_URL + "/img/crayon.svg"} alt="" />
      </div>

      <div className="antennes">
        {antennes.map((antenne, index) => (
          <div className="antenne" key={index}>
            <h3>{antenne.nom} :</h3>
            <p>{antenne.adresse}</p>
            <p>Téléphone: {antenne.telephone}</p>
            <p>
              Email: <a href={`mailto:${antenne.email}`}>{antenne.email}</a>
            </p>
          </div>
        ))}
      </div>
      <div className="copyright">
        <p>Copyright © Tous droits réservés - SEFoP asbl</p>
      </div>
    </footer>
  );
};

export default Footer;
