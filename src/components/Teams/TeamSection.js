import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import {
  TeamBody,
  TeamSec,
  TeamContainer,
  TeamH1,
  TeamCard,
  TeamContent,
  TeamImgBx,
  TeamImg,
  TeamContentBx,
  TeamSpan,
  TeamSci,
  SocialIcons,
  SocialIconLink,
} from "./TeamSection.elements";

import img from "../../images/team.jpg";

const TeamSection = () => {
  return (
    <>
      <TeamBody>
        <TeamSec>
          <TeamH1>Our Team</TeamH1>
          <TeamContainer>
            <TeamCard>
              <TeamContent>
                <TeamImgBx>
                  <TeamImg src={img} alt="" />
                </TeamImgBx>
                <TeamContentBx>
                  Someonr Famouse <br />
                  <TeamSpan>Creative Designer</TeamSpan>
                </TeamContentBx>
              </TeamContent>
              <TeamSci>
                <SocialIcons>
                  <SocialIconLink
                    href="/"
                    target="_blank"
                    aria-label="Facebook"
                  >
                    <FaFacebook />
                  </SocialIconLink>
                  <SocialIconLink
                    href="/"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </SocialIconLink>
                  <SocialIconLink
                    href="/"
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </SocialIconLink>
                </SocialIcons>
              </TeamSci>
            </TeamCard>

            <TeamCard>
              <TeamContent>
                <TeamImgBx>
                  <TeamImg src={img} alt="" />
                </TeamImgBx>
                <TeamContentBx>
                  Someonr Famouse <br />
                  <TeamSpan>Creative Designer</TeamSpan>
                </TeamContentBx>
              </TeamContent>
              <TeamSci>
                <SocialIcons>
                  <SocialIconLink
                    href="/"
                    target="_blank"
                    aria-label="Facebook"
                  >
                    <FaFacebook />
                  </SocialIconLink>
                  <SocialIconLink
                    href="/"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </SocialIconLink>
                  <SocialIconLink
                    href="/"
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </SocialIconLink>
                </SocialIcons>
              </TeamSci>
            </TeamCard>

            <TeamCard>
              <TeamContent>
                <TeamImgBx>
                  <TeamImg src={img} alt="" />
                </TeamImgBx>
                <TeamContentBx>
                  Someonr Famouse <br />
                  <TeamSpan>Creative Designer</TeamSpan>
                </TeamContentBx>
              </TeamContent>
              <TeamSci>
                <SocialIcons>
                  <SocialIconLink
                    href="/"
                    target="_blank"
                    aria-label="Facebook"
                  >
                    <FaFacebook />
                  </SocialIconLink>
                  <SocialIconLink
                    href="/"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </SocialIconLink>
                  <SocialIconLink
                    href="/"
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </SocialIconLink>
                </SocialIcons>
              </TeamSci>
            </TeamCard>
          </TeamContainer>
        </TeamSec>
      </TeamBody>
    </>
  );
};

export default TeamSection;
