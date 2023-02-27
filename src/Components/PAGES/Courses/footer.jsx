import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FooterLink, FooterLink2 } from "../../../Utils/images/dummydata";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="Container">
        <div className="logo">
          <h3>Examhyve</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
            labore cupiditate corporis fugit nisi architecto ratione. Neque
            corrupti molestias esse placeat similique corporis reiciendis
            explicabo!
          </p>
        </div>

        <div className="footerLink">
          <h4>Help & Support</h4>
          {FooterLink.map((data, index) => (
            <ul key={index} className="Flinks">
              <Link to={data.path}>{data.label}</Link>
            </ul>
          ))}
        </div>
        <div className="footerLink2">
          <h4>Privacy Policy</h4>
          {FooterLink2.map((data, index) => (
            <ul key={index} className="Flinks">
              <Link to={data.path}>{data.label}</Link>
            </ul>
          ))}
        </div>
        <div className="Socials">
          <div className="social__link">
            <FaFacebookSquare />
            <FaTwitter />
            <RiInstagramFill />
            <AiFillLinkedin />
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`

    margin-top: 159px;
  .Container {
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    flex-wrap: nowrap;
    width: 90%;
    height: max-content;
    margin: 0 auto;
    padding: 4rem 0 2rem 0;
    z-index: 9;
  }
  .logo {
    flex: 1.5;
  }
  .logo h3 {
    font-family: "HeadlandOne";
    font-weight: 400;
    font-size: 25px;
    color: #252525;
    margin-bottom: 1rem;
  }
  .logo p {
    font-size: 15px;
    line-height: 1.5em;
    color: #060606;
    font-family: "Manrope";
    font-weight: 100;
    padding-right: 4rem;
  }
  .footerLink, .footerLink2 {
    flex: 1;
  }
  .footerLink h4 {
    font-family: "Manrope";
    font-weight: 600;
    font-size: 16px;
    color: #060606;
    margin-bottom: 5px;
  }
  .footerLink2 h4{
    font-family: "Manrope";
    font-weight: 600;
    font-size: 16px;
    color: #060606;
    margin-bottom: 5px;
  }
  .Flinks {
    margin-bottom: 5px;
  }
  .Flinks a {
    font-family: "Manrope";
    font-weight: 500;
    font-size: 15px;
    color: #060606;
  }
  .Socials {
    flex: 1;
    display: flex;
    /* justify-content: center; */
    align-items: center;
  }
  .social__link {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    width: 50%;
    // gap: 3rem;
  }
  .social__link svg {
    font-size: 5rem;
    margin-left: 1.8rem;
    color: #14906a;
    cursor: pointer;
  }
  @media (max-width: 800px) {
    .Container {
      flex-direction: column;
      gap: 3rem;
    }
    .logo h3{
      font-size: 25px;
    }
    .logo p{
      font-size: 13px;
      padding-right: 0;
    }
    .Flinks a {
      font-weight: 200;
      font-size: 13px;
    }
    .footerLink > h2, .footerLink2 > h2 {
      font-size: 20px; 
     /* font-weight: 900; */
    }
    .social__link svg {
      font-size: 25px;
      color: #14906a;
      cursor: pointer;
    }
  }
`;

export default Footer;