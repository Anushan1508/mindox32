import React from "react";
import Carousel from "react-elastic-carousel";
// import Item from "./Item";
// import "./styles.css";

import {
  TeamBody,
  TeamSec,
  TeamContainer,
  TeamH1,
  Para,
} from "./TeamSection.elements";
import TeamCardMem from "./TeamCardMem";

import { TeamMemOne } from "./Data";

const options = {
  margin: 30,
  responsiveClass: true,
  nav: true,
  autoplay: true,
  navText: ["Prev", "Next"],
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
};

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

// import img from "../../images/team.jpg";

// SLider
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/swiper.min.css";
// import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
// import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
// SwiperCore.use([Pagination]);

const TeamSection = () => {
  return (
    <>
      <TeamBody>
        <TeamSec>
          <TeamH1>OUR TEAM</TeamH1>

          <TeamContainer>
            <Carousel breakPoints={breakPoints}>
              <TeamCardMem {...TeamMemOne} />
              <TeamCardMem {...TeamMemOne} />
              <TeamCardMem {...TeamMemOne} />
              <TeamCardMem {...TeamMemOne} />
              <TeamCardMem {...TeamMemOne} />
              <TeamCardMem {...TeamMemOne} />
              <TeamCardMem {...TeamMemOne} />
            </Carousel>
            <Para>
              whbewhvew vw vwihv wievwivwivwbevwhebiwev wew eweb iwe wivw
              iwevbwievhw viw viwev wie wihw viwv wiv wiw viwh vwivhw whbewhvew
              vw vwihv wievwivwivwbevwhebiwev wew eweb iwe wivw iwevbwievhw viw
            </Para>
            {/* <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              className="mySwiper"
            > */}
            {/* <SwiperSlide>
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
            </Swiper> */}
          </TeamContainer>
        </TeamSec>
      </TeamBody>
    </>
  );
};

export default TeamSection;
