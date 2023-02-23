import React from "react";
// import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { creditedCourses } from "../../../Utils/Db/dummydata";

const Courses = () => {

  // const navigate = useNavigate();
  // function handleNavigate() {
  //   navigate("/");
  // }

  return (
    <CourseContainer>
      <div className="Container">
        <div className="Title">
          <h3>You can move at your pace</h3>
        </div>
        <div className="CardContainer">
          {creditedCourses.map((data, index) => (
            <div key={index} className="CourseCard">
              <img src={data.image} alt="SubImage" />
              <div className="desc">
                <h4>{data.subject}</h4>
                <span to={data.path}>See all topics</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CourseContainer>
  );
};

const CourseContainer = styled.div`
  .Container {
    width: 90%;
    margin: 0 auto;
    padding: 4rem 0;
    z-index: 10;
  }

  .Title {
    margin-bottom: 2rem;
  }

  .Title h3 {
    font-family: "Manrope";
    font-weight: 700;
    font-size: 20px;
    color: #0a0707;
  }

  .CardContainer {
    display: flex;
    align-items: center;
    gap: 3rem;
  }

  .CourseCard {
    display: flex;
    justify-content: center;
    flex-flow: column;
    max-width: 500px;
    max-height: 290px;
    background-color: #ffbf37;
    border-radius: 11px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  }

  .CourseCard img {
    width: 100%;
    object-fit: cover;
  }

  .desc {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    padding: 0.8rem 1.5rem 1.5rem 1.5rem;
    /* text-align: center; */
    /* align-items: center; */
  }

  .desc h4 {
    font-family: "Manrope";
    font-weight: 700;
    font-size: 18px;
    text-transform: capitalize;
    color: #252525;
  }
  .desc span {
    font-family: "Manrope";
    font-style: normal;
    font-size: 13px;
    text-decoration: underline;
    text-transform: capitalize;
    color: #6177f8;
    cursor: pointer;
  }

  @media (max-width: 800px) {
    .Tittle h3 {
      font-size: 25px;
    }

    .desc h4{
      font-size: 15px;
    }
    .desc p{
      font-size: 12px;
    }
  }

  @media (max-width: 450px) {
    .Tittle h3 {
      font-size: 20px;
    }

    .CardContainer {
      width: 100%;
      margin: 0 auto;
      flex-direction: column;
    }

    /* .CourseCard {
      max-width: 800px;
    } */
  }
`;

export default Courses;
