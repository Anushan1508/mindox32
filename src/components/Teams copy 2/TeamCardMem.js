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
  SocialIconLinkC,
  SocialIconLinkR,
  SocialIconLinkL,
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
            <SocialIconLinkL href="/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLinkL>
            <SocialIconLinkC href="/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLinkC>
            <SocialIconLinkR href="/" target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialIconLinkR>
          </SocialIcons>
        </TeamSci>
      </TeamCard>
    </>
  );
};

export default TeamCardMem;
