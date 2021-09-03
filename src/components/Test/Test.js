import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./style.css";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
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
        <h2> Responsive </h2>
        <Slider className="testcardcontainer" {...settings}>
          <div className="testcard">
            <h3>MemBer Card</h3>
          </div>
          <div className="testcard">
            <h3>MemBer Card</h3>
          </div>
          <div className="testcard">
            <h3>MemBer Card</h3>
          </div>
          <div className="testcard">
            <h3>MemBer Card</h3>
          </div>
          <div className="testcard">
            <h3>MemBer Card</h3>
          </div>
          <div className="testcard">
            <h3>MemBer Card</h3>
          </div>
          <div className="testcard">
            <h3>MemBer Card</h3>
          </div>
          <div className="testcard">
            <h3>MemBer Card</h3>
          </div>
          <div className="testcard">
            <h3>MemBer Card</h3>
          </div>
          <div className="testcard">
            <h3>MemBer Card</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
