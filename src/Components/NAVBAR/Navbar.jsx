import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../BUTTON/Button";
import { BUTTON_TYPES } from "../../STYLES/button";
import { RiMoonFill } from "react-icons/ri";
import { BiSun } from "react-icons/bi";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  //Navlink objeects
  const Data = [
    {
      id: 1,
      display: "Courses",
      path: "/courses",
    },
    {
      id: 2,
      display: "Blog",
      path: "/blog",
    },
    {
      id: 3,
      display: "About",
      path: "/about",
    },
  ];
  return (
    <Navigation>
      <div className="Container">
        <div className="Logo">
          <Link to="/" className="LogoText">
            ExamHyve
          </Link>
        </div>
        <div className="NavLink">
          {Data.map((link) => (
            <li key={link.id}>
              <Link className="Link" to={link.path}>
                {link.display}
              </Link>
            </li>
          ))}
        </div>
        <div className="Login">
          <Button type={BUTTON_TYPES.PRIMARY} btnText="Log In" />
          <div className="darkTheme" onClick={() => setIsDark(!isDark)}>
            {isDark ? <BiSun /> : < RiMoonFill/>}
          </div>
        </div>
      </div>
    </Navigation>
  );
};

const Navigation = styled.div`
  width: 100%;
  height: 6rem;
  top: 0;
  left: 0;
  background-color: #fff;
  position: fixed;
  display: grid;
  place-items: center;
  z-index: 99;

  .Container {
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  .LogoText {
    font-family: "HeadlandOne";
    font-size: 30px;
    font-weight: 400;
    color: hsla(0, 0%, 15%, 1);
  }

  .NavLink {
    display: flex;
    width: 20%;
    justify-content: space-between;
  }
  .Login{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }

  .darkTheme{
    display: block;
    svg{
      font-size: 20px;
      color: hsla(0, 0%, 15%, 1);
      cursor: pointer;
      transition: 0.3s ease-in-out;
    }
  }

`;

export default Navbar;
