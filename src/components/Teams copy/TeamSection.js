import React from "react";

import {
  TeamBody,
  TeamSec,
  TeamContainer,
  TeamH1,
} from "./TeamSection.elements";

// import img from "../../images/team.jpg";

// SLider
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";
import TeamCardMem from "./TeamCardMem";

import { TeamMemOne } from "./Data";

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
                <TeamCardMem {...TeamMemOne} />
              </SwiperSlide>

              <SwiperSlide>
                <TeamCardMem {...TeamMemOne} />
              </SwiperSlide>

              <SwiperSlide>
                <TeamCardMem {...TeamMemOne} />
              </SwiperSlide>

              <SwiperSlide>
                <TeamCardMem {...TeamMemOne} />
              </SwiperSlide>

              <SwiperSlide>
                <TeamCardMem {...TeamMemOne} />
              </SwiperSlide>

              <SwiperSlide>
                <TeamCardMem {...TeamMemOne} />
              </SwiperSlide>

              <SwiperSlide>
                <TeamCardMem {...TeamMemOne} />
              </SwiperSlide>
            </Swiper>
          </TeamContainer>
        </TeamSec>
      </TeamBody>
    </>
  );
};

export default TeamSection;
