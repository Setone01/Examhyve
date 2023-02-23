import React from "react";
import styled from "styled-components";
import Button from "../../BUTTON/Button";
// import math from "../../Utils/images/image 13.png";
import { ViewsData } from "../../../Utils/Db/dummydata";
import { useNavigate } from "react-router-dom";

const ViewCourse = () => {
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/blog");
  }

  return (
    <Container>
      <div className="wrapper">
        <div className="SubTitle">
          <h2>courses</h2>
        </div>
        <div className="SubContainer">
          {ViewsData.map((data, index) => (
            <div key={index} className="subject">
              <div className="SubImg">
                <img src={data.img} alt="Course" />
              </div>
              <div className="SubLink">
                <div className="Title">
                  <h3>{data.subject}</h3>
                </div>
                <Button onClick={handleNavigate} btnText="Start Test" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding-top: 10rem;

  .wrapper {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-flow: column;
    padding-bottom: 3rem;
    z-index: 10;
  }

  .SubTitle {
    margin-bottom: 1.5rem;
  }

  .SubTitle h2 {
    font-family: "Manrope";
    font-weight: 700;
    font-size: 25px;
    color: #0a0707;
    text-transform: capitalize;
  }

  .SubContainer {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 4rem;
  }

  .subject {
    display: flex;
    justify-content: center;
    width: 573px;
    max-height: 264px;
    background-color: #ffffff;
    border: 1.3px solid #f4c247;
    border-radius: 5px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    align-self: normal;
  }

  .SubImg {
    flex: 1;
  }

  .SubImg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px 0 0 5px;
  }

  .SubLink {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    /* padding:  0 1rem; */
  }

  .Title {
    margin-bottom: 1rem;
  }

  .Title h3 {
    font-size: 20px;
    font-weight: 600;
    font-family: "Manrope";
    text-transform: capitalize;
  }

  /* @media (max-width: 420px){
    .SubContainer{
      position: relative;
      width: 100%;
    }

    .SubLink{
      position: absolute;
      top: 50%;
      right: 50%;
      transform: translate(50%, -50%);
    
    }

    .subject{
      border-radius: 11px;
      max-width: 500px;
      height: 500px;
    }
  } */

  @media (max-width: 768px) {
    .SubContainer{
      flex-direction: column;
    }

    .SubTitle h2{
      font-size: 22px;
    }

    .subject{
      max-width: 350px;
      height: 170px;
      align-self: normal;
    }
  }
`;

export default ViewCourse;
