import React from "react";
import styled from "styled-components";
import { BUTTON_TYPES } from "../../../../STYLES/button";
import Button from "../../../BUTTON/Button";
import { IoBookOutline } from "react-icons/io5";
import heroImg from "../../../../Utils/svg/hero_image.svg"


const Hero = () => {
  return (
    <HeroContainer>
      <div className="heroWrapper">
        <div className="heroLeft">
          <div className="title">
            <h2>Making Exam Preparation Easy and Fun</h2>
          </div>
          <p>Welcome to ExamHyve where learning is never boring.</p>
          <Button
            type={BUTTON_TYPES.PRIMARY}
            icon={<IoBookOutline />}
            btnText="Start studying for free"
          />
          <Button
            type={BUTTON_TYPES.SECONDARY}
            btnText="🎉 we are at 3 users"
          />
        </div>
        <div className="HeroImg">
          <img src={heroImg} alt="hero" />
        </div>
      </div>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  width: 100%;
  background-color: hsla(162, 76%, 32%, 0.09);
  z-index: 10;
  background-position: center;
  position: relative;
  z-index: 9;

  .heroWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    padding: 150px 0 6rem 0;
  }

  .heroLeft {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    padding-right: 4rem;
    padding-top: 3rem;
    flex: 1;
  }

  .title {
    margin-bottom: 30px;
    padding-right: 60px;

    h2 {
      font-family: "Manrope";
      font-size: 40px;
      font-weight: 700;
      color: hsla(0, 0%, 2%, 1);
    }
  }
  p {
    font-size: 18px;
    font-family: "Manrope";
    font-weight: 400;
    color: hsla(0, 0%, 2%, 1);
    margin-bottom: 1rem;
  }

  .HeroImg{
    display: flex;
    justify-content: center;
    align-items: center;
    /* max-width: 500px; */
    flex: 1;
  }

  .HeroImg img{
    width: 100%;
    /* object-fit: cover; */
  }

  @media (max-width: 800px) {
    .heroWrapper{
      flex-direction: column;
      padding-top: 9rem;
    }

    .title{
      padding-right: 0;
      margin-bottom: 15px;
    }

    .title h2{
      font-size: 35px;
    }

    p{
      font-size: 15px;
    }

    .HeroImg{
   margin-top: 3rem;
  }
  }
`;
export default Hero;
