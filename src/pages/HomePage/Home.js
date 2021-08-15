import React from "react";
import {
  homeObjOne,
  //homeObjTwo, homeObjThree, homeObjFour
} from "./Data";
import { InfoSection, Pricing } from "../../components";
import VideoB from "../../components/VideoBg";
import TeamSection from "../../components/Teams/TeamSection";

function Home() {
  return (
    <>
      <VideoB />
      <InfoSection {...homeObjOne} />
      {/* <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} /> */}
      <Pricing />
      {/* <InfoSection {...homeObjFour} /> */}
      <TeamSection />
    </>
  );
}

export default Home;
