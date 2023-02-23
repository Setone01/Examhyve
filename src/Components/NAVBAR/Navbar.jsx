import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../BUTTON/Button";
import { RiMoonFill } from "react-icons/ri";
import { BiSun } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { HiOutlineBars3 } from "react-icons/hi2";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const menuBar = <HiOutlineBars3 color="#04704e" fontSize="4rem" />;
  const closeMenu = <VscChromeClose color="#04704e" fontSize="4rem" />;

  const Dark = <RiMoonFill color="#04704e" />;
  const Light = <BiSun color="#04704e" />;

  // const handleClick = () => setIsMobile(!isMobile);
  // onClick={handleClick}

  //Navlink objeects
  const Data = [
    {
      display: "Home",
      path: "/",
    },
    {
      display: "Courses",
      path: "/courses",
    },
    {
      display: "Blog",
      path: "/blog",
    },
    {
      display: "About",
      path: "#",
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

        <ul className={isMobile ? 'mobileLink' : 'NavLink'}>
          <ul className="NavigationUl">
            {Data.map((link, index) => (
              <li key={index} >
                <Link className="Link" to={link.path} onClick={() => setIsMobile (!isMobile)}>
                  {link.display}
                </Link>
              </li>
            ))}
          </ul>
          <div className="Login">
            <Button btnText="Log In" />
            <div className="darkTheme" onClick={() => setIsDark(!isDark)}>
              {isDark ? Light : Dark}
            </div>
          </div>
        </ul>

        <div className="mobileToggle" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? closeMenu : menuBar}
        </div>
      </div>
    </Navigation>
  );
};

const Navigation = styled.div`
  width: 100%;
  height: 6rem;
  background-color: #fff;
  position: fixed;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 0px 10px 0px;
  z-index: 90;
  /* overflow-x: hidden; */

  .Container {
    width: 90%;
    height: 100%;
    margin: 0 auto;
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
    justify-content: space-between;
    align-items: center;
    width: 65%;
  }

  .NavLink li a {
    color: #0a0707;
  }

  .NavigationUl {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 45%;
  }

  .Login {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .darkTheme {
    display: block;
    svg {
      font-size: 20px;
      color: hsla(0, 0%, 15%, 1);
      cursor: pointer;
      transition: 0.3s ease-in-out;
    }
  }

  .mobileToggle {
    display: none;
  }

  @media (max-width: 768px) {
    .Container {
      width: 100%;
    }
    .Logo {
      margin-left: 2rem;
      a {
        font-size: 20px;
        font-weight: 600;
      }
    }

    .mobileLink {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      top: 6rem;
      right: 0;
      height: calc(100vh - 6rem);
      width: 100%;
      text-align: center;
      z-index: 99;
      background-color: #eaf5f2;
    }

    .NavigationUl {
      flex-flow: column;
      /* text-align: center; */
      width: min-content;
    }
    .NavigationUl li {
      margin-bottom: 4rem;
    }
    .NavigationUl li a {
      font-size: 22px;
      font-weight: 200;
      color: #0a0707;
    }

    .NavLink {
      display: none;
    }

    .mobileToggle {
      display: block;
      margin-right: 2rem;

      svg {
        font-size: 30px;
      }
    }

    .Login {
      width: 100%;
    }

    .darkTheme svg {
      font-size: 25px;
    }
  }
`;

export default Navbar;
