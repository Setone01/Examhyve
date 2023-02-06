import React from "react";
import styled from "styled-components";
import LeftFeature from "./RightFeature";

const Features = () => {
  return (
    <FeaturesCont>
      <FeatureWrapper>
        <FeatureLeft>
          <ContentTop>
            <FeatureSpan>Our features</FeatureSpan>
            <Title>Why choose ExamHyve</Title>
            <Para>
              We make the ordinary learning Process easy and fun. With our
              student friendly package that keeps learners coming back to learn
              more and become champions in various levels. Welcome to Flearn
              where learning is never boring
            </Para>
          </ContentTop>
          <ContentBottom>
            <ContentStat>
              <Num>20k+</Num>
              <Small>Students</Small>
            </ContentStat>
            <ContentStat>
              <Num>12k+</Num>
              <Small>Questions</Small>
            </ContentStat>
            <ContentStat>
              <Num>2k+</Num>
              <Small>Community</Small>
            </ContentStat>
          </ContentBottom>
        </FeatureLeft>
        <FeatureRight>
          <LeftFeature />
        </FeatureRight>
      </FeatureWrapper>
    </FeaturesCont>
  );
};

const FeaturesCont = styled.div`
  width: 100%;
  background-color: #04704e;
  /* padding: 5rem 0; */
`;
const FeatureWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: no-wrap;
  gap: 3rem;
  width: 90%;
  margin: 0 auto;
  padding: 5rem 0;
  overflow: hidden;
  z-index: 9;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
const FeatureLeft = styled.div`
  flex-basis: 45%;
`;
const ContentTop = styled.div`
padding-top: 3rem;
`;
const FeatureSpan = styled.span`
  font-family: "Manrope";
  font-size: 20px;
  color: #ffffff;
  margin-bottom: 1rem;
  @media (max-width: 800px) {
    text-align: center;
    font-size: 24px;
  }
`;
const Title = styled.h3`
  font-family: "Manrope";
  font-size: 30px;
  color: #ffffff;
  font-weight: 600;
  margin-top: 1rem ;
  margin-bottom: 1.7rem ;
  text-transform: capitalize;
  @media (max-width: 800px) {
    font-size: 30px;
    font-weight: 800;
  }
`;

const Para = styled.p`
  font-family: "Manrope";
  font-weight: 200;
  font-size: 16px;
  color: #FFFFFF;
  line-height: 1.7em;
  margin-bottom: 1rem;
  @media (max-width: 800px) {
    font-size: 16px;
    width: 100%;
  }
`;
const ContentBottom = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

`;
const ContentStat = styled.div``;
const Num = styled.h3`
font-family: 'Manrope';
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 151.6%;
text-transform: capitalize;
color: #FFBF37;

@media (screen) {
  
}

`;
const Small = styled.p`
font-family: 'Manrope';
font-weight: 100;
font-size: 13px;
line-height: 151.6%;
text-transform: capitalize;
color: #FFBF37;
@media (max-width: 800px) {
   font-size: 18px;
  }
`;

const FeatureRight = styled.div`
  /* display: flex;
  align-items: flex-end; */
  flex-basis: 55%;
  padding: 3rem 0 0 2rem;
  @media (max-width: 800px) {
    padding: 0;
  }
`;

export default Features;
