import React from "react";
import styled from "styled-components";
import { PathData } from "../../../Utils/Db/dummydata";
// import Waec from "../../../Utils/images/Waec.png";

const Exampath = () => {
  return (
    <Path>
      <div className="Container">
        <div className="Title">
          <h2>Examation Path</h2>
        </div>
        <div className="wrapper">
          {PathData.map((data, index) => (
            <div key={index} className="PathContainer">
              <div className="PathImg">
                <img src={data.img} alt="" />
              </div>
              <div className="PathTitle">
                <h4>{data.title}</h4>
              </div>
              <div className="desc">
                <small>{data.desc}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Path>
  );
};

const Path = styled.div`
  width: 100%;

  .Container {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-flow: column;
    padding: 4rem 0;
  }

  .Title {
    margin-bottom: 2rem;
  }

  .Title h2 {
    font-family: "Manrope";
    font-weight: 700;
    font-size: 25px;
    color: #0a0707;
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    gap: 5rem;

  }

  .PathContainer{
    width: 250px;
  }

  .PathImg img{
    width: 150px;
    height: 150px;
    object-fit: cover;
  }

  .PathTitle {
    margin: 1.5rem 0 0.5rem 0;
  }

  .PathTitle h4 {
    font-size: 18px;
    text-transform: capitalize;
    font-family: "Manrope";
    font-weight: 600;
    color: #0a0707;
  }

  .desc {
    width: 60%;
  }
  .desc small {
    font-size: 13px;
    font-weight: 400;
    font-family: "Manrope";
    color: #060606;
  }

  @media (max-width: 800px) {
    .wrapper{
      width: 100%;
      /* justify-content: center; */
      align-items: center;
      flex-wrap: wrap;
      gap: 3rem;
    }

    .Title h2{
      font-size: 22px;
    }

    .PathContainer{
      width: 170px;
    }

    .PathTitle {
      margin-top: 1rem;
    }

    /* .PathImg img {
      width: 250px;
      height: 250px;
    } */

    .PathTitle h4{
      font-size: 18px;
    }
    .desc {
    width: 100%;
  }

    .desc small{
      font-size: 13px;
    }
  }
`;

export default Exampath;
