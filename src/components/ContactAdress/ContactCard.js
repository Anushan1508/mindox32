import React from "react";
import "./Style.css";
// import Container from "../../globalStyles";

const ContactCard = () => {
  return (
    <div>
      <div class="services">
        <h1>Our Services</h1>
        <div class="cen">
          <div class="service">
            <i class="fas fa-anchor"></i>
            <h2>Service Name</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div class="service">
            <i class="fab fa-android"></i>
            <h2>Service Name</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div class="service">
            <i class="fab fa-angellist"></i>
            <h2>Service Name</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
