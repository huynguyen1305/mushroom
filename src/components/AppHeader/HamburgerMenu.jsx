import React, { useRef, useState } from "react";

import { NavLink } from "react-router-dom";

import styled from "styled-components";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import logo from "../../assets/logo.png";

const LineInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 8px 1rem;

  background-color: #bfb2a6;
  color: green;
`;

const HamburgerMenuNav = styled.div`
  .container {
    display: inline-block;
    cursor: pointer;
  }

  .bar1,
  .bar2,
  .bar3 {
    width: 33px;
    height: 3px;
    background-color: #333;
    margin: 6px 0;
    transition: 0.3s;
  }

  .change .bar1 {
    transform: rotate(-45deg) translate(-6px, 3px);
  }

  .change .bar2 {
    opacity: 0;
  }

  .change .bar3 {
    transform: rotate(45deg) translate(-8px, -8px);
  }
`;

const MenuNav = styled.div`
  background-color: white;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;

  height: 100%;
  overflow: hidden;

  transition: all linear 0.3s;

  .menuList {
    width: 100%;
    margin: 0.2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    padding: 1rem;
    background-color: #faede1;
    height: 100%;

    .listItem {
      padding: 1rem;
      font-size: 1.5rem;
    }
  }
`;

const HamburgerMenu = () => {
  const menuRef = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => {
    document.body.classList.add("lock-scroll");
    setOpen(!isOpen);
  };
  return (
    <>
      <HamburgerMenuNav>
        <div className="container" onClick={toggleMenu} ref={menuRef}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </HamburgerMenuNav>
      <MenuNav
        style={
          isOpen
            ? { transform: "translateX(0%)" }
            : { transform: "translateX(100%)" }
        }
      >
        <LineInfo>
          <div>
            <FaPhoneAlt style={{ verticalAlign: "middle" }} size={12} />
            <span style={{ fontSize: "13px" }}> 0829661818</span>
          </div>
          <div>
            <FaEnvelope style={{ verticalAlign: "middle" }} />{" "}
            <span style={{ fontSize: "13px" }}>
              nongtraihuuco2022.vn@gmail.com
            </span>
          </div>
        </LineInfo>

        <div
          style={{
            boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2)",
            display: "flex",
            justifyContent: "space-between",
            padding: "0 1rem",
            alignItems: "center",
            height: "80px",
            backgroundColor: "#faede1",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ height: "80px", padding: "8px 0" }}>
              <img
                src={logo}
                alt="Logo"
                style={{ height: "100%", width: "100%" }}
              ></img>
            </div>
            <h1
              style={{
                color: "#b27249",
                textTransform: "capitalize",
                fontSize: "1.7rem",
                fontFamily: `'Work Sans', sans-serif`,
                lineHeight: "1.7rem",
              }}
            >
              organic farm
            </h1>
          </div>
          <HamburgerMenuNav>
            <div
              className="container change"
              onClick={() => {
                document.body.classList.remove("lock-scroll");
                setOpen(false);
              }}
              ref={menuRef}
            >
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </HamburgerMenuNav>
        </div>

        <div className="menuList">
          <div
            className="listItem"
            onClick={() => {
              document.body.classList.remove("lock-scroll");
              setOpen(false);
            }}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav__link--active" : "nav__link"
              }
            >
              Home
            </NavLink>
          </div>
          <div
            className="listItem"
            onClick={() => {
              document.body.classList.remove("lock-scroll");
              setOpen(false);
            }}
          >
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav__link--active" : "nav__link"
              }
            >
              About
            </NavLink>
          </div>
        </div>
      </MenuNav>
    </>
  );
};

export default HamburgerMenu;
