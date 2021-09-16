import React from "react";
// import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";
import Accordion from "../Accordion/Accordion";
import {
  InfoSec,
  // Form,
  // FormInput,
  InfoRow,
  InfoColumn,
  TextWrapper,
  // TopLine,
  Heading,
  // Subtitle,
  // ImgWrapper,
  // Img,
} from "./InfoSection.elements";

function InfoSectionDrop({
  // primary,
  lightBg,
  // topLine,
  // lightTopLine,
  lightText,
  // lightTextDesc,
  // headline,
  // description,
  // buttonLabel,
  // img,
  // alt,
  imgStart,
  // start,
}) {
  return (
    <div>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                {/* <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine> */}
                <Heading lightText={lightText}>
                  The Problem With the Development running on local Mechines
                </Heading>
                {/* <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle> */}
                {/* <Link to="/sign-up">
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link> */}
                {/* <Form>
                  <FormInput
                    name="email"
                    type="email"
                    placeholder="Your Email"
                  />
                  <Button fontBig>Get Started</Button>
                </Form> */}
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              {/* <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper> */}
              <Accordion />
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </div>
  );
}

export default InfoSectionDrop;
