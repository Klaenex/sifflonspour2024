import React from "react";

const Content = () => {
  return (
    <section className="content">
      <h2 className="title title--big">Sifflons ensemble pour 2024!</h2>
      <p>
        En tant qu'association dédiée à l'éducation et l'animation en milieu
        populaire, nous sommes confrontés à divers défis. Du financement
        instable à l'adaptabilité constante des programmes, nous devons
        également aborder des questions cruciales telles que l'accessibilité à
        l'information, la Cohésion sociale, la citoyenneté et la diversité des
        publics. Cette exploration approfondie vise à renforcer notre capacité à
        fournir des programmes inclusifs et impactant, tout en nous adaptant
        constamment pour répondre aux besoins changeants des groupes que nous
        accompagnons. Unis dans cet effort, nous aspirons à créer un changement
        positif et durable au sein des milieux populaires. Voici ce que nous
        défendons pour cette année 2024 :
      </p>

      <h3 className="title">
        Soutenir et valoriser le travail des associations de proximité
      </h3>
      <ul className="list">
        <li className="list--item">
          – Revaloriser le financement du travail associatif de proximité est
          primordial pour lutter contre les inégalités;
        </li>
        <li className="list--item">
          – Augmenter le financement stable pour soutenir les programmes de
          formation et d'animation.
        </li>
      </ul>
      <h3 className="title">
        Entretenir des liens et créer des lieux de rencontres
      </h3>
      <ul className="list">
        <li className="list--item">
          – Lutter contre toutes les formes de discriminations et d’exclusions
          (harcèlement, rejets, …);
        </li>
        <li className="list--item">
          – Créer des canaux de communication adaptés pour faire entendre les
          voix citoyennes du milieu populaire.
        </li>
      </ul>
      <h3 className="title">
        Faciliter l’accès aux droits et mettre en place des accueils de
        proximités
      </h3>
      <ul className="list">
        <li className="list--item">
          – Mettre à disposition de l'informations claires, actualisées et
          vulgarisées sur des sujets importants;
        </li>
        <li className="list--item">
          – Adapter régulièrement les programmes de formation pour répondre aux
          besoins du public, constamment en évolution;
        </li>
        <li className="list--item">
          – Rendre l’accès au numérique pour toutes et tous.
        </li>
      </ul>
      <h3 className="title">
        Oser siffler et écoutons les réalités des citoyennes et citoyennes
      </h3>
      <ul className="list">
        <li className="list--item">
          – Prendre en compte les difficultés et les besoins de chaque individu;
        </li>
        <li className="list--item">
          – Mettre en place des moyens d’information et de sensibilisation
          concernant les différents aspects de la santé (mentale, physique,
          sociale);
        </li>
        <li className="list--item">
          – Valoriser et soutenir toutes alternatives solidaires mises en place
          entre les citoyens et les citoyennes.
        </li>
      </ul>
      <h3 className="title title--last">
        PARTAGER LES SAVOIRS … ET PARTAGEONS LES SAVOIRS en milieu populaire
        avec le <a href="https://sefop.org/">SEFoP</a>
      </h3>
      <div className="wrapper--img">
        <img src={process.env.PUBLIC_URL + "/img/IMG_4406.png"} alt="SEFoP" />
      </div>
    </section>
  );
};

export default Content;
