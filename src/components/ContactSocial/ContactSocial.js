import React from "react";
import "./Style.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div>
      {/* <Container> */}
      <div class="wrapper">
        <div class="icon facebook">
          <div class="tooltip">Facebook</div>
          <span>
            <FaFacebook />
          </span>
        </div>
        <div class="icon twitter">
          <div class="tooltip">LinkedIn</div>
          <span>
            <FaLinkedin />
          </span>
        </div>
        <div class="icon instagram">
          <div class="tooltip">Instagram</div>
          <span>
            <FaInstagram />
          </span>
        </div>
        {/* <div class="icon github">
          <div class="tooltip">Github</div>
          <span>
          <FaFacebook />
          </span>
        </div> */}
        <div class="icon youtube">
          <div class="tooltip">Youtube</div>
          <span>
            <FaYoutube />
          </span>
        </div>
      </div>
      {/* </Container> */}
    </div>
  );
};

export default ContactSocial;
