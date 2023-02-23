import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import route from "../../../routes.const";
import CourseImg from "../../../Utils/images/courseImg.png";
import Button from "../../BUTTON/Button";

const WelcomeUser = () => {
  const navigate = useNavigate();
  function handleNavigate() {
    navigate(route.test);
  }

  return (
    <Container>
      <div className="Wrapper">
        <div className="Title">
          <h3>Hi, User</h3>
          <p>Lets get started with your learning today.</p>
        </div>
        <div className="TestContainer">
          <div className="testImg">
            <img src={CourseImg} alt="courseImg" />
          </div>
          <div className="courseContainer">
            <h4>Take your Jamb questions</h4>
            <div className="CourseButton">
              <div className="Subject">
                <small>Mathematics</small>
              </div>
              <div className="divider"></div>
              <div className="Time">
                <small>20mins</small>
              </div>
            </div>
            <Button
              onClick={handleNavigate}
              btnText="Take Test"
              to="/Homepage"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .Wrapper {
    display: flex;
    justify-content: center;
    padding-top: 9rem;
    padding-bottom: 4rem;
    width: 90%;
    margin: 0 auto;
    flex-flow: column;
    z-index: 10;
  }

  .Title {
    margin-bottom: 2rem;
    h3 {
      font-family: "Manrope";
      font-weight: 700;
      font-size: 25px;
      text-transform: capitalize;
      color: #0a0707;
      margin-bottom: 0.5rem;
    }

    p {
      font-family: "Manrope";
      font-weight: 400;
      font-size: 15px;
      color: #0a0707;
    }
  }

  .TestContainer {
    display: flex;
    align-items: center;
    max-width: 700px;
    max-height: 300px;
    /* background-color: #04704e; */
    border: 1.3px solid rgba(97, 119, 248, 0.36);
    border-radius: 5px;
    z-index: 9;
  }

  .testImg {
    flex: 3;
  }

  .testImg img {
    width: 100%;
    height: 299px;
    object-fit: cover;
  }

  .courseContainer {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;

    h4 {
      font-family: "Manrope";
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 33px;
      text-align: center;
      color: #0a0707;
    }
  }

  .CourseButton {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 1rem 0;
    background: rgba(4, 112, 78, 0.02);
    border: 1.3px solid rgba(97, 119, 248, 0.18);
    border-radius: 5px;
    padding: 0.8rem;

    small {
      font-weight: 800;
      font-family: "Manrope";
      text-transform: uppercase;
      font-size: 12px;
    }
  }

  .divider {
    width: 1px;
    height: 14px;
    background-color: #04704e;
    /* border: 1px solid #04704E; */
  }

  @media (max-width: 768px) {
    .TestContainer {
      position: relative;
      align-items: flex-start;
      flex-flow: column;
      width: 100%;
      border: none;
    }
    .testImg {
      width: 100%;
      img {
        width: 100%;
        border-radius: 5px;
      }
    }

    .Title {
      h3 {
        font-size: 20px;
      }
      p {
        font-size: 15px;
      }
    }

    .courseContainer {
      position: absolute;
      top: 50%;
      right: 50%;
      transform: translate(50%, -50%);

      h4 {
        display: none;
      }
    }

    .CourseButton {
      background: hsla(0, 0%, 100%, 1);
    }
  }
`;

export default WelcomeUser;
