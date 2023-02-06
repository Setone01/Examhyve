import React from "react";
import styled from "styled-components";
import Button from "../../../BUTTON/Button";

const index = () => {
  return (
    <Section>
      <div className="Container">
        <div className="Left">
          <h3>
            Get access to unlimited questions resources available for passing
            your exams
          </h3>
        </div>
        <div className="Right">
          <Button btnText="Getting Started" />
        </div>
      </div>
    </Section>
  );
};

const Section = styled.div`
  padding: 4rem 0;
  .Container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 300px;
    margin: 0 auto;
    background-color: #eaf5f2;
    border-radius: 10px;
    padding: 4rem;
    z-index: 9;
  }

  .Left {
    flex: 1;
    padding-right: 4rem;

    h3 {
      font-family: "Manrope";
      font-weight: 600;
      font-size: 28px;
      line-height: 151.6%;
      text-transform: capitalize;

      color: #252525;
    }
  }

  .Right {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
  }

  @media (max-width: 825px) {
    .Container {
      width: 90%;
      flex-flow: column;
    }
    .Left {
      padding-right: 0;
      /* margin-bottom: 3rem; */

      h3 {
        font-size: 20px;
        text-align: center;
      }
    }
  }

  @media (max-width: 400px) {
    h3 {
      font-size: 15px;
      margin-bottom: 2rem;
    }
  }
`;

export default index;
