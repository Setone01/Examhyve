import React from "react";
import { RiParenthesesFill } from "react-icons/ri";
import styled from "styled-components";

const Courses = () => {
  const subject = [
    {
      id: 1,
      course: "Mathematics",
      desc: "200+ Questions",
    },
    {
      id: 2,
      course: "English",
      desc: "200+ Questions",
    },
    {
      id: 3,
      course: "Others",
      desc: "200+ Questions",
    },
  ];
  return (
    <CoursesContainer>
      <div className="wrapper">
        <div className="top">
          <span>Trending courses</span>
          <h3>Top category we have</h3>
        </div>
        <div className="bottom">
          {subject.map((opt) => (
            <div key={opt.id} className="bottomWrapper">
              <div className="icon">
                <RiParenthesesFill />
              </div>
              <div className="content">
                <h4>{opt.course}</h4>
                <small>{opt.desc}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CoursesContainer>
  );
};

const CoursesContainer = styled.div`
  width: 100%;
  background-color: #fff;
  z-index: 9;

  .wrapper {
    width: 90%;
    height: max-content;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-flow: column;
    padding: 5rem 0;
    overflow: hidden;
  }

  .top {
    align-items: flex-start;
    margin-bottom: 30px;
  }
  span {
    font-family: "Manrope";
    font-size: 12px;
    font-weight: 600;
    color: hsla(0, 0%, 47%, 1);
  }

  h3 {
    font-family: "Manrope";
    font-size: 20px;
    font-weight: 700;
    text-transform: capitalize;
    margin-top: 10px;
    color: hsla(0, 13%, 3%, 1);
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    width: 80%;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 3rem;
    /* padding-right: 7rem; */
    /* display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    align-items: flex-start; */
  }

  .bottomWrapper {
    display: flex;
    align-items: flex-start;
  }

  .icon {
    svg {
      background-color: hsla(161, 93%, 23%, 1);
      border-radius: 50%;
      font-size: 48px;
      color: hsla(0, 0%, 100%, 1);
      padding: 8px;
    }
  }

  .content {
    margin-left: 1.5rem;
    margin-top: -0.3rem;
  }

  h4 {
    font-size: 16px;
    font-family: "Manrope";
    margin-bottom: 0.7rem;
  }

  small {
    font-size: 1rem;
    font-weight: 600;
    font-family: "Lato";
    color: hsla(0, 13%, 3%, 0.42);
  }

  @media (max-width: 750px) {
    .bottom{
      grid: unset;

    }
  }
`;

export default Courses;
