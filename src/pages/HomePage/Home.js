import React from "react";
import {
  homeObjOne,
  //homeObjTwo, homeObjThree, homeObjFour
} from "./Data";
import { InfoSection, Pricing } from "../../components";
import VideoB from "../../components/VideoBg";
import TeamSection from "../../components/Teams/TeamSection";
import CardSection from "../../components/CardSection/CardSection";

function Home() {
  return (
    <>
      <VideoB />
      <InfoSection {...homeObjOne} />
      <CardSection />
      {/* <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} /> */}
      <Pricing />
      {/* <InfoSection {...homeObjFour} /> */}
      <TeamSection />
    </>
  );
}

export default Home;
