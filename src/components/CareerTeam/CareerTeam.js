import React from "react";
import "./style.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Container } from "../../globalStyles";

const CareerTeam = () => {
  return (
    <div>
      <div className="team-section">
        <Container>
          <div className="inner-width">
            <h2 className="head">Our Awesome Team</h2>
            <div className="pers">
              <div className="pe">
                <img src={require("../../images/team.jpg")} alt="rafeh" />
                <div className="p-name">Rafeh Qazi</div>
                <div className="p-des">Designer</div>
                <div className="p-sm">
                  <a href="https://www.google.lk">
                    {/* <i className="fab fa-facebook-f"></i> */}
                    <FaFacebook />
                  </a>
                  <a href="https://www.google.lk">
                    {/* <i className="fab fa-twitter"></i> */}
                    <FaInstagram />
                  </a>
                  <a href="https://www.google.lk">
                    {/* <i className="fab fa-instagram"></i> */}
                    <FaLinkedin />
                  </a>
                  <a href="https://www.google.lk">
                    {/* <i className="fab fa-instagram"></i> */}
                    <FaTwitter />
                  </a>
                </div>
              </div>

              <div className="pe">
                <img src={require("../../images/team.jpg")} alt="rafeh" />
                <div className="p-name">Dev Tenzin</div>
                <div className="p-des">Developer</div>
                <div className="p-sm">
                  <a href="https://www.google.lk">
                    {/* <i className="fab fa-facebook-f"></i> */}
                    <FaFacebook />
                  </a>
                  <a href="https://www.google.lk">
                    {/* <i className="fab fa-twitter"></i> */}
                    <FaInstagram />
                  </a>
                  <a href="https://www.google.lk">
                    {/* <i className="fab fa-instagram"></i> */}
                    <FaLinkedin />
                  </a>
                  <a href="https://www.google.lk">
                    {/* <i className="fab fa-instagram"></i> */}
                    <FaTwitter />
                  </a>
                </div>
              </div>

              <div className="pe">
                <img src={require("../../images/team.jpg")} alt="rafeh" />
                <div className="p-name">Darrel wilson</div>
                <div className="p-des">Director</div>
                <div className="p-sm">
                  <a href="https://www.google.lk">
                    {/* <i className="fab fa-facebook-f"></i> */}
                    <FaFacebook />
                  </a>
                  <a href="https://www.google.lk">
                    {/* <i className="fab fa-twitter"></i> */}
                    <FaInstagram />
                  </a>
                  <a href="https://www.google.lk">
                    {/* <i className="fab fa-instagram"></i> */}
                    <FaLinkedin />
                  </a>
                  <a href="https://www.google.lk">
                    {/* <i className="fab fa-instagram"></i> */}
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CareerTeam;
