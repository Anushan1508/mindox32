import React from "react";
import {
  homeObjOne,
  // homeObjTwo,
  //homeObjTwo, homeObjThree, homeObjFour
} from "./Data";
import { InfoSection, Pricing } from "../../components";
import VideoB from "../../components/VideoBg";
import TeamSection from "../../components/Teams/TeamSection";
// import CardSection from "../../components/CardSection/CardSection";

import "../../components/CardSection/style.css";

import Story from "../../components/Story/Story";
import FourcardCom from "../../components/FourCardCom/FourcardCom";
import Accordion from "../../components/Accordion/Accordion";

function Home() {
  return (
    <>
      <VideoB />
      <InfoSection {...homeObjOne} />
      <Accordion />
      <FourcardCom />
      {/* <CardSection /> */}
      <Story />
      <Pricing />
      <TeamSection />
    </>
  );
}

export default Home;
