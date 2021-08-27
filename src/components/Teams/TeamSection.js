import React from "react";
import Carousel from "react-elastic-carousel";

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

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

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
            </Carousel>
            <Para>
              whbewhvew vw vwihv wievwivwivwbevwhebiwev wew eweb iwe wivw
              iwevbwievhw viw viwev wie wihw viwv wiv wiw viwh vwivhw whbewhvew
              vw vwihv wievwivwivwbevwhebiwev wew eweb iwe wivw iwevbwievhw viw
            </Para>
          </TeamContainer>
        </TeamSec>
      </TeamBody>
    </>
  );
};

export default TeamSection;
