import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { TeamSec, TeamH1, Para } from "./TeamSection.elements";
import TeamCardMem from "./TeamCardMem";

import { TeamMemOne } from "./Data";
import { Container } from "../../globalStyles";

export default class TeamSection extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,

      autoplay: true,
      speed: 2000,
      autoplaySpeed: 5000,
      cssEase: "linear",

      responsive: [
        {
          breakpoint: 1124,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Container>
          <TeamSec>
            <TeamH1>OUR TEAM</TeamH1>
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
              </Slider>
            </Para>
          </TeamSec>
        </Container>
      </div>
    );
  }
}
