import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

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

// SLider
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);

const TeamSection = () => {
  return (
    <>
      <TeamBody>
        <TeamSec>
          <TeamH1>Our Team</TeamH1>
          <TeamContainer>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              className="mySwiper"
            >
              <SwiperSlide>
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
              </SwiperSlide>

              <SwiperSlide>
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
              </SwiperSlide>

              <SwiperSlide>
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
              </SwiperSlide>

              <SwiperSlide>
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
              </SwiperSlide>

              <SwiperSlide>
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
              </SwiperSlide>

              <SwiperSlide>
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
              </SwiperSlide>

              <SwiperSlide>
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
              </SwiperSlide>
            </Swiper>
          </TeamContainer>
        </TeamSec>
      </TeamBody>
    </>
  );
};

export default TeamSection;
