import styled from "styled-components";
import { Container } from "../../globalStyles";

export const TeamBody = styled.body`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: #fff;
  min-height: 100vh;
  }
`;

export const TeamSec = styled.section`
  //   position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const TeamContainer = styled(Container)`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 40px 0;
`;

export const TeamH1 = styled.h1`
  font-size: 3.5rem;
  color: #332c79;
  margin-bottom: 64px;
  text-align: center;
  margin-left: 60%;

  @media screen and (max-width: 960px) {
    margin-left: 0;
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const TeamCard = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 5px 7px 10px 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
  margin: 30px;

  margin: 10px auto 30px auto;
  width: 85%;
  // padding:  10px;

  &:hover {
    opacity: 1;
    transform: scale(1.02);
    transition: all 0.3s ease-out;
  }
`;

export const TeamContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0.75;
  transition: 0.5s;

  &:hover {
    opacity: 1;
  }
`;

export const TeamImgBx = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 10px solid rgba(0, 0, 0, 0.25);
`;

export const TeamImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TeamContentBx = styled.h3`
  color: #000;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  margin: 20px 0 10px;
  line-height: 1.1em;
`;

export const TeamSpan = styled.span`
  font-size: 12px;
  font-weight: 300;
  text-transform: initial;
`;

export const TeamSci = styled.div`
  position: absolute;
  bottom: 50px;
  display: flex;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLinkL = styled.a`
  color: #000;
  font-size: 24px;
  margin: 0 25px 0 25px;

  @media screen and (max-width: 450px) {
    margin: 0 0 0 50px;
  }
`;
export const SocialIconLinkC = styled.a`
  color: #000;
  font-size: 24px;
  margin: 0 25px 0 25px;

  // @media screen and (max-width: 450px) {
  //   margin: 0 60px 0 30px;
  // }
`;
export const SocialIconLinkR = styled.a`
  color: #000;
  font-size: 24px;
  margin: 0 25px 0 25px;

  @media screen and (max-width: 450px) {
    margin: 0 50px 0 0;
  }
`;

export const Para = styled.p`
  padding-bottom: 4%;
`;

export const Para2 = styled.p`
  color: transparent;
`;
