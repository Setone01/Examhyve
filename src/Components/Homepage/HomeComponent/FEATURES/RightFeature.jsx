import React from "react";
import styled from "styled-components";
import { Card } from "../../../../Utils/Db/dummydata";

const FeatureTwo = () => {
  return (
    <div>
      <Container>
        {Card.map((data, index) => (
          <Wrapper key={index}>
            <Icon>
              <img src={data.icon} alt="features" />
            </Icon>
            <Title>{data.title}</Title>
            <Para>{data.desc}</Para>
          </Wrapper>
        ))}
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  gap: 2rem;
  z-index: 9;

  @media (max-width: 800px) {
    grid: unset;
    justify-content: center;
    padding-right: 0;
    width: 100%;
    gap: 2rem;
  }
`;
const Wrapper = styled.div`
  width: 250px;
  height: 250px;
  align-items: center;
  max-width: 250px;

  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    width: 90%;
    height: 250px;
  }
`;
const Icon = styled.div`
  background-color: #e0f3ee;
  border-radius: 50%;
  height: 5rem;
  width: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;

  img {
    width: 20px;
  }

  @media (max-width: 800px) {
height: 7rem;
width: 7rem;

img{
  width: 30px;
}
  }
`;

const Title = styled.h3`
  color: #FFBF37;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 151.6%;
  margin-bottom: 0.5rem;
  @media (max-width: 800px) {
    text-align: center;
    font-size: 25px;
  }
`;

const Para = styled.small`
  font-family: "Manrope";
  font-weight: 100;
  font-size: 15px;
  line-height: 141.5%;
  color: #ffffff;
  @media (max-width: 800px) {
    text-align: center;
    font-size: 20px;
  }
`;

export default FeatureTwo;
