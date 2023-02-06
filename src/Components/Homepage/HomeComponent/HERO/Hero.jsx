import React from "react";
import styled from "styled-components";
import { BUTTON_TYPES } from "../../../../STYLES/button";
import Button from "../../../BUTTON/Button";
import { IoBookOutline } from "react-icons/io5";
import heroImage from "../../../../Utils/images/image 1.png";
import Einsten from "../../../../Utils/images/einsten.png";
import Success from "../../../../Utils/images/success.png";
import Record from "../../../../Utils/images/record.png";

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
          <div className="ImgWrapper">
            <div className="HeroImg">
              <img src={heroImage} alt="heroImage" />
            </div>
            <div className="Box1">
              <img src={Einsten} alt="eisnten" />
            </div>
            <div className="Box2">
              <img src={Success} alt="success rate" />
            </div>
            <div className="Box3">
              <img src={Record} alt="records" />
            </div>
          </div>
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
  /* @media (max-width: 768px) {
    width: 100%;
  } */

  .heroWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    padding: 150px 0 5rem 0;
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
      font-size: 45px;
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

  .heroRight {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex: 1;
  }
  .HeroImg {
    position: relative;
    transform: translate(5%, 0);
  }

  .HeroImg img {
    border-radius: 50%;
    width: 80%;
    object-fit: cover;
  }

  .Box1 {
    position: absolute;
    transform: translate(10%, -100%);

  }
  .Box1 img {
    width: 100%;
  }

  .Box2 {
    position: absolute;
    /* transform: translate(10%, -100%); */
  }

  .Box2 img {
    width: 100%;
  }

  .Box3 {
    position: absolute;
    transform: translate(100%, -90%);
  }

  .Box3 img {
    width: 100%;
  }

  @media (max-width: 850px) {
    .heroWrapper {
      max-width: 100%;
      flex-direction: column;
    }

    .title h2 {
      padding-right: 0;
    }

    /* .heroRight {
      align-items: center;
    } */
  }
`;
export default Hero;
