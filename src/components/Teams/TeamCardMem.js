import React from "react";

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import {
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

const TeamCardMem = ({ img, alt, CardName, CardTitle }) => {
  return (
    <>
      <TeamCard>
        <TeamContent>
          <TeamImgBx>
            <TeamImg src={img} alt={alt} />
          </TeamImgBx>
          <TeamContentBx>
            {CardName} <br />
            <TeamSpan>{CardTitle}</TeamSpan>
          </TeamContentBx>
        </TeamContent>
        <TeamSci>
          <SocialIcons>
            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </TeamSci>
      </TeamCard>
    </>
  );
};

export default TeamCardMem;
