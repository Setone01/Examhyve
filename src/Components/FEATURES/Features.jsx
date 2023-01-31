import React from "react";
import styled from "styled-components";
import FeatureTwo from "./FeatureTwo";
import '../FEATURES/feature.css'

const Features = () => {
  return (
    <FeaturesCont className="w- bg-green-700">
      <FeatureWrapper className="flex py-20 w-11/12 m-auto">
        <FeatureLeft className="w-1/3 mr-40">
          <ContentTop className="max-w-6xl">
            <FeatureSpan className="text-2xl text-white pb-8" >Our features</FeatureSpan>
            <Title className="text-3xl font-semibold text-white py-3 capitalize">Why choose ExamHyve</Title>
            <Para className="text-lg text-green-100 py-2">
              We make the ordinary learning Process easy and fun. With our
              student friendly package that keeps learners coming back to learn
              more and become champions in various levels. Welcome to Flearn
              where learning is never boring
            </Para>
          </ContentTop>
          <ContentBottom className="flex gap-12">
            <ContentStat className="ContentStat">
                <Num className="text-4xl font-semibold text-white pb-4">20k+</Num>
                <Small className="text-xs text-green-100">Students</Small>
            </ContentStat>
            <ContentStat className="contentStat">
                <Num className="text-4xl font-semibold text-white pb-4">12k+</Num>
                <Small className="text-xs text-green-100">Questions</Small>
            </ContentStat>
            <ContentStat className="contentStat">
                <Num className="text-4xl font-semibold text-white pb-4">2k+</Num>
                <Small className="text-xs text-green-100">Community</Small>
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
