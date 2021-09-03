import React from "react";
import {
  homeObjOne,
  //homeObjTwo, homeObjThree, homeObjFour
} from "./Data";
import { InfoSection, Pricing } from "../../components";
import VideoB from "../../components/VideoBg";
import TeamSection from "../../components/Teams/TeamSection";
// import CardSection from "../../components/CardSection/CardSection";

import "../../components/CardSection/style.css";

import Story from "../../components/Story/Story";
import DropdownSection from "../../components/DropdownSection/DropdownSection";

function Home() {
  return (
    <>
      <VideoB />
      <InfoSection {...homeObjOne} />
      <DropdownSection />
      {/* <CardSection /> */}
      <Story />
      <Pricing />
      <TeamSection />
    </>
  );
}

export default Home;
