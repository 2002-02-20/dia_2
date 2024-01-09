import React from "react";
import "../Informacion/Informacion.css";
import builder from "../../assets/icon-team-builder.svg";
import calculator from "../../assets/icon-calculator.svg";
import supervisor from "../../assets/icon-supervisor.svg";
import karma from "../../assets/icon-karma.svg";
import Cards from "./Cards/Cards";
const Informacion = () => {
  return (
    <>
      <div className="builder">
        <Cards
          titulo={"Team Builder"}
          info={
            "Scans our talent network to create the optimal team for your project"
          }
          img={builder}
          alt={"logo"}
        />
      </div>
      <div className="calculator">
        <Cards
          titulo={"Calculator"}
          info={
            "Uses data from past projects to previde better delivery estimates"
          }
          img={calculator}
          alt={"logo"}
        />
      </div>
      <div className="supervisor">
        <Cards
          titulo={"Supervisor"}
          info={"Monitors activity to identify project roodblocks"}
          img={supervisor}
          alt={"logo"}
        />
      </div>
      <div className="karma">
        <Cards
          titulo={"Karma"}
          info={"Regularly evolutes our talent to ensure quality"}
          img={karma}
          alt={"logo"}
        />
      </div>
    </>
  );
};

export default Informacion;
