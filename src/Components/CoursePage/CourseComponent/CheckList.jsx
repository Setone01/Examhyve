import React from "react";
import { HiCheckCircle } from "react-icons/hi";
import styled from "styled-components";

const CheckList = () => {
  const Data = [
    {
      info: "Lorem ipsum dolor sit amet.",
    },
    {
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore.",
    },
    {
      info: "Lorem ipsum dolor sit amet.",
    },
  ];

  return (
    <Para>
      {Data.map((list, index) => (
        <div key={index} className="Container">
          <div className="icon">
            <HiCheckCircle />
          </div>
          <span>{list.info}</span>
        </div>
      ))}
    </Para>
  );
};

const Para = styled.div`
  width: 100%;
  padding: 0.6rem 0;

  .Container {
    display: flex;
    align-items: center;
    /* flex-flow: row; */
    margin-bottom: 3px;
  }

  .icon svg {
    font-size: 15px;
    color: #04704e;
    margin-right: 7px;
  }

  .Container span {
    font-family: "Manrope";
    font-size: 12px;
    font-weight: 100;
  }
`;

export default CheckList;
