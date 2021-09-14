import React from "react";
import { FaLocationArrow, FaPhone, FaTwitter } from "react-icons/fa";
import { Container } from "../../globalStyles";
import "./style.css";

const ContactCard = () => {
  return (
    <div>
      <Container>
        <div class="services2">
          <h1>Contact Info</h1>
          <div class="cen">
            <div class="service2">
              {/* <i class="fas fa-anchor"></i> */}
              {/* <FaTwitter className="icom" /> */}
              <FaPhone className="icom" />
              <h2>Office Number</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            <div class="service2">
              {/* <i class="fab fa-android"></i> */}
              {/* <FaTwitter className="icom" /> */}
              <FaLocationArrow className="icom" />
              <h2>Locations</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            <div class="service2">
              {/* <i class="fab fa-angellist"></i> */}
              <FaTwitter className="icom" />
              <h2>House Location</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactCard;
