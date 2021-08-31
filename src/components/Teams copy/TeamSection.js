import React from "react";

// import "./styles.css";

import {
  TeamBody,
  TeamSec,
  TeamContainer,
  TeamH1,
  // Para,
} from "./TeamSection.elements";
import TeamCardMem from "./TeamCardMem";

import { TeamMemOne } from "./Data";

const TeamSection = () => {
  return (
    <>
      <TeamBody>
        <TeamSec>
          <TeamH1>OUR TEAM</TeamH1>

          <TeamContainer>
            <TeamCardMem {...TeamMemOne} />
            <TeamCardMem {...TeamMemOne} />
            <TeamCardMem {...TeamMemOne} />
          </TeamContainer>
        </TeamSec>
      </TeamBody>
    </>
  );
};

export default TeamSection;
