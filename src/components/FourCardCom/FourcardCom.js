import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { Container } from "../../globalStyles";
import "./style.css";

const FourcardCom = () => {
  return (
    <div>
      <Container>
        <header>
          <h1 className="headfour">
            ONE Stop Solution
            <br />
            <strong>Powered by Technology</strong>
          </h1>

          <p className="headp">
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </header>

        <main>
          <ul className="cards-container">
            <li className="cyan-feature-card">
              <h2 className="headfour">Supervisor</h2>
              <p className="headp">
                Monitors activity to identify project roadblocks
              </p>
              {/* <img
                src="https://alfonsosuarezg.github.io/four-card-feature-section/images/icon-supervisor.svg"
                alt="supervisor feature icon"
              /> */}
              <div className="iconfour" style={{ color: "hsl(180, 62%, 55%)" }}>
                <FaLocationArrow />
              </div>
            </li>

            <li className="red-feature-card">
              <h2 className="headfour">Team Builder</h2>
              <p className="headp">
                Scans our talent network to create the optimal team for your
                project
              </p>
              {/* <img
                src="https://alfonsosuarezg.github.io/four-card-feature-section/images/icon-team-builder.svg"
                alt="team builder feature icon"
              /> */}
              <div className="iconfour" style={{ color: "hsl(0, 78%, 62%)" }}>
                <FaLocationArrow />
              </div>
            </li>

            <li className="orange-feature-card">
              <h2 className="headfour">Karma</h2>
              <p className="headp">
                Regularly evaluates our talent to ensure quality
              </p>
              {/* <img
                src="https://alfonsosuarezg.github.io/four-card-feature-section/images/icon-karma.svg"
                alt="karma feature icon"
              /> */}
              <div className="iconfour" style={{ color: "hsl(34, 97%, 64%)" }}>
                <FaLocationArrow />
              </div>
            </li>

            <li className="blue-feature-card">
              <h2 className="headfour">Calculator</h2>
              <p className="headp">
                Uses data from past projects to provide better delivery
                estimates
              </p>
              {/* <img
                src="https://alfonsosuarezg.github.io/four-card-feature-section/images/icon-calculator.svg"
                alt="calculator feature icon"
              /> */}
              <div className="iconfour" style={{ color: "hsl(212, 86%, 64%)" }}>
                <FaLocationArrow />
              </div>
            </li>

            {/* <li className="cyan-feature-card">
              <h2 className="headfour">Supervisor</h2>
              <p className="headp">
                Monitors activity to identify project roadblocks
              </p>
              <img
                src="https://alfonsosuarezg.github.io/four-card-feature-section/images/icon-supervisor.svg"
                alt="supervisor feature icon"
              />
            </li> */}
          </ul>
        </main>
      </Container>
    </div>
  );
};

export default FourcardCom;
