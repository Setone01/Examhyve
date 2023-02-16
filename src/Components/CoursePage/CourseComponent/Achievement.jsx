import React from "react";
import styled from "styled-components";
import CheckList from "./CheckList";

const Achievement = () => {
  return (
    <Section>
      <div className="Container">
        <div className="Dashboard">
          <div className="TimeCount">
            <div className="Title">
              <h3>Achievements</h3>
            </div>
            <div className="checkColumn">
            <p>You completed your first session in 10 minitues ! cheers!</p>
            <CheckList/>
            </div>
          </div>

          <div className="sessionCount">
            <div className="numSession">
              <h1>1</h1>
              <span>Sessions</span>
            </div>
            <div className="vertical"></div>
            <div className="coinValue">
              <h1>0</h1>
              <span>SageCoins</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  padding: 4rem 0;
  .Container {
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    z-index: 10;
  }

  .Dashboard {
    width: 700px;
    min-height: 200px;
    background: #ffffff;
    border: 1px solid rgba(4, 112, 78, 0.4);
    box-shadow: 0px 0px 4px #c5c5c5;
    border-radius: 11px;
    padding-bottom: 2rem;
    display: flex;
    justify-content: center;
  }

  .TimeCount {
    flex-basis: 60%;
    /* margin-bottom: 8rem; */
  }

  .Title {
    padding: 1.3rem;
    border-bottom: 1.3px solid rgba(4, 112, 78, 0.4);
  }

  .Title h3 {
    font-family: "Manrope";
    font-weight: 600;
    font-size: 16px;
    color: #0a0707;
  }

  .checkColumn{
    width: 100%;
    margin: 1rem 0 0 1rem;
  }

  .checkColumn p {
    background: #04704e;
    color: #ffffff;
    font-family: "Manrope";
    font-size: 13px;
    font-weight: 500;
    padding: 0.5rem 1rem;
    width: max-content;
    border-radius: 8px;
  }

  .sessionCount {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1rem;
    flex-basis: 40%;
  }

  .vertical {
    width: 1px;
    height: 90px;
    background-color: rgba(4, 112, 78, 0.4);
    margin: 0 15px;
  }

  .numSession {
    display: flex;
    align-items: center;
    flex-flow: column;
  }
  .numSession h1 {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 500;
    font-size: 60px;
    color: #f5ce11;
  }

  .numSession span {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
  }

  .coinValue {
    display: flex;
    align-items: center;
    flex-flow: column;
  }
  .coinValue h1 {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 500;
    font-size: 60px;
    color: #f5ce11;
  }

  .coinValue span {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
  }

  @media (max-width: 700px){
    .Dashboard{
        flex-flow: column;
    }

    .TimeCount{
        padding-bottom: 3rem;
    }

    .sessionCount{
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      border-top: 1.3px solid rgba(4, 112, 78, 0.4);
      margin: 0;
      padding: 1rem 0;
    }
  }

  @media (max-width: 410px){
    .checkColumn p{
      font-size: 10px;
    }
  }
`;

export default Achievement;
