import React from "react";
import { Container } from "../../globalStyles";
import "./style.css";

const VideoSection = () => {
  return (
    <div>
      <Container>
        <h1 className="heading">We will show you how is done</h1>
        <p className="paragra">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          bibendum enim eu nibh finibus Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
        </p>
        <button className="btn">training and workshops</button>
        <div className="iframe-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/molDk8BICUI?controls=0&amp;start=5"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </Container>
    </div>
  );
};

export default VideoSection;
