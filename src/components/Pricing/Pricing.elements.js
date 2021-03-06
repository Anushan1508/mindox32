import { Link } from "react-router-dom";
import styled from "styled-components";

export const PricingSection = styled.div`
  padding: 0px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: transparent;
  // background-color: black;
`;

export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const PricingHeading = styled.h1`
  color: #332c79;
  font-size: 3.5rem;
  margin-bottom: 24px;
  margin-left: -70%;

  @media screen and (max-width: 960px) {
    margin-left: 0;
  }
`;

export const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: black;
  max-width: 1200px;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const PricingCard = styled(Link)`
  background: #4f02b8;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 300px;
  height: 500px;
  text-decoration: none;
  border-radius: 4px;
  margin: -24px 20px;
  z-index: 3;

  &:nth-child(2) {
    margin: 24px;
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }
  @media screen and (max-width: 1100px) {
    margin: -24px;
  }

  @media screen and (max-width: 960px) {
    width: 60%;
    margin: 0;

    &:hover {
      transform: none;
    }
  }

  @media screen and (max-width: 500px) {
    width: 80%;

    &:hover {
      transform: none;
    }
  }
`;

export const PricingCardBig = styled(Link)`
  background: #fff;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 350px;
  height: 520px;
  text-decoration: none;
  border-radius: 4px;
  z-index: 3;

  &:nth-child(2) {
    margin: 24px;
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 60%;

    &:hover {
      transform: none;
    }
  }

  @media screen and (max-width: 500px) {
    width: 80%;

    &:hover {
      transform: none;
    }
  }
`;

export const PricingCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #fff;
`;

export const PricingCardInfoBig = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #4f02b8;
`;

export const PricingCardIcon = styled.div`
  margin: 24px 0;
`;

export const PricingCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
`;

export const PricingCardCost = styled.h4`
  font-size: 40px;
`;

export const PricingCardLength = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
`;

export const PricingCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
  font-size: 150%;
`;

export const PricingCardFeaturesBig = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #4f02b8;
  font-size: 150%;
`;

export const PricingCardFeature = styled.li`
  margin-bottom: 10px;
`;
