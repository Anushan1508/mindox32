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
import InfoSectionDrop from "../../components/InfoSectionDrop/InfoSection";

function Home() {
  return (
    <>
      <VideoB />
      <InfoSection {...homeObjOne} />
      <InfoSectionDrop {...homeObjOne} />
      <FourcardCom />
      <Story />
      <Pricing />
      <TeamSection />
    </>
  );
}

export default Home;
