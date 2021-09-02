// import React from "react";
// import Carousel from "react-elastic-carousel";

import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import "./styles.css";

import {
  TeamBody,
  TeamSec,
  TeamContainer,
  TeamH1,
  Para,
  Para2,
} from "./TeamSection.elements";
import TeamCardMem from "./TeamCardMem";

import { TeamMemOne } from "./Data";

// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 550, itemsToShow: 2 },
//   { width: 768, itemsToShow: 3 },
//   { width: 1200, itemsToShow: 4 },
// ];

export default class TeamSection extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,

      // infinite: true,
      // slidesToShow: 3,
      // slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 5000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        {/* <TeamBody> */}
        {/* <TeamSec> */}
        <TeamH1>OUR TEAM</TeamH1>

        {/* <TeamContainer> */}
        {/* <Carousel breakPoints={breakPoints}> */}
        <Para>
          <Slider {...settings}>
            <div>
              <TeamCardMem {...TeamMemOne} />
            </div>
            <div>
              <TeamCardMem {...TeamMemOne} />
            </div>
            <div>
              <TeamCardMem {...TeamMemOne} />
            </div>
            <div>
              <TeamCardMem {...TeamMemOne} />
            </div>
            <div>
              <TeamCardMem {...TeamMemOne} />
            </div>
            <div>
              <TeamCardMem {...TeamMemOne} />
            </div>
            <div>
              <TeamCardMem {...TeamMemOne} />
            </div>
          </Slider>
          {/* </Carousel> */}
        </Para>
        <Para2>
          whbewhvew vw vwihv wievwivwivwbevwhebiwev wew eweb iwe wivw
          iwevbwievhw viw viwev wie wihw viwv wiv wiw viwh vwivhw whbewhvew vw
          vwihv wievwivwivwbevwh whbewhvew vw vwihv wievwivwivwbevwhebiwev wew
          eweb iwe wivw iwevbwievhw viw viwev wie wihw viwv wiv wiw viwh vwivhw
          whbewhvew vw vwihv wievwivwivwbevwh whbewhvew vw vwihv
          wievwivwivwbevwhebiwev wew eweb iwe wivw iwevbwievhw viw viwev wie
          wihw viwv wiv wiw viwh vwivhw whbewhvew vw vwihv
          wievwivwivwbevwhebiwev wew eweb iwe wivw iwevbwievhw viw
        </Para2>
        {/* </TeamContainer> */}
        {/* </TeamSec> */}
        {/* </TeamBody> */}
      </div>
    );
  }
}
