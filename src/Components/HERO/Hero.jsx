import React from "react";
import styled from "styled-components";
import { BUTTON_TYPES } from "../../STYLES/button";
import Button from "../BUTTON/Button";
import { IoBookOutline } from "react-icons/io5";
import heroImage from "../../Utils/images/image 1.png";

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
        <div className="heroRight">
          <div className="HeroImg">
            <img src={heroImage} alt="heroImage" />
          </div>
        </div>
      </div>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  width: 100%;
  height: max-content;
  background-color: hsla(162, 76%, 32%, 0.09);
  z-index: 10;

  .heroWrapper {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 140px;
  }

  .heroLeft {
    flex-basis: 50%;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    margin-top: -8.5rem;
  }

  .title {
    margin-bottom: 60px;
  }
  h2 {
    font-family: "Manrope";
    font-size: 45px;
    font-weight: 700;
    line-height: 1.3em;
    color: hsla(0, 0%, 2%, 1);
    width: 50rem;
  }
  p {
    font-size: 18px;
    font-family: "Manrope";
    font-weight: 400;
    color: hsla(0, 0%, 2%, 1);
    margin-bottom: 1rem;
  }

  /* .heroBtn{
    display: block;
  } */
  .heroRight {
    flex-basis: 50%;
    display: flex;
    flex-flow: column;
    align-items: flex-end;
    padding-bottom: 7rem;
  }
  .HeroImg {
    img {
      border-radius: 50%;
      width: 70%;
    }
  }
`;
export default Hero;
