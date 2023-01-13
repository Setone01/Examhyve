import React from "react";
import styled from "styled-components";
import FeatureTwo from "./FeatureTwo";

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
            <FeatureTwo/>
        </FeatureRight>
      </FeatureWrapper>
    </FeaturesCont>
  );
};

const FeaturesCont = styled.div``
const FeatureWrapper = styled.div``
const FeatureLeft = styled.div``
const ContentTop = styled.div``
const FeatureSpan = styled.span``
const Title = styled.h3``
const Para = styled.p``
const ContentBottom = styled.div``
const ContentStat = styled.div``
const Num = styled.h3``
const Small = styled.small``
const FeatureRight = styled.small``




export default Features;
