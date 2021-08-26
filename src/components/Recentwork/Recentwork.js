import React from "react";
import "./Style.css";

const Recentwork = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="content">
          <h3>Recent Work</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            atque sapiente veritatis nesciunt adipisci culpa.
          </p>
          <a href="https://www.google.lk" className="btn">
            View Project
          </a>
        </div>
        <div className="image">
          <img src={require("../../images/rocket.svg")} alt="" />
        </div>
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
      </section>
    </>
  );
};

export default Recentwork;
