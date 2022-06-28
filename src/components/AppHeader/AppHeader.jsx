import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import HamburgerMenu from "./HamburgerMenu";
import logo from "../../assets/logo.png";

import { FaPhoneAlt, FaEnvelope, FaCartPlus } from "react-icons/fa";
import { GiPresent } from "react-icons/gi";

import { useWindowSize } from "../../hook/useResolution";

import "./AppHeader.css";
import styled from "styled-components";

const LineInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 8px 1rem;

  background-color: #ead7c5;
  color: green;
`;

const AppNavBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: sticky;
  top: 0;
  background-color: #faede1;

  padding: 0 1rem;

  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);

  height: 80px;
`;

const AppHeader = () => {
  const resolution = useWindowSize();
  const [isClick, setClick] = useState("home");
  let navigate = useNavigate();

  const handleClickLink = (id) => {
    if (id === "home") {
      navigate("/");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setClick(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
        setClick(id);
      }
    }
  };

  return (
    <>
      {resolution.width > 768 ? (
        <div
          style={{
            background: `linear-gradient(to bottom, #ead7c5 33%, #faede1 0%)`,
            boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2)",
            padding: "8px",
            width: "100%",
            position: "sticky",
            top: "0",
            zIndex: "999",
          }}
        >
          <div className="app-container" style={{ display: "flex" }}>
            <div style={{ width: "15%", height: "100%" }}>
              <img
                src={logo}
                alt="Logo"
                style={{ height: "100%", width: "100%" }}
              ></img>
            </div>
            <div style={{ width: "75%", height: "100%" }}>
              <div
                style={{
                  marginTop: "1%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: "green",
                }}
              >
                <div style={{ marginLeft: "2rem" }}>
                  <FaPhoneAlt size={13} />
                  <span> 0829661818</span>
                </div>
                <div>
                  <FaEnvelope style={{ verticalAlign: "middle" }} />{" "}
                  <span>nongtraihuuco2022.vn@gmail.com</span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <div
                    style={{
                      backgroundColor: "white",
                      color: "green",
                      padding: "4px 0.5rem",
                      borderRadius: "0.5rem",
                      border: "2px solid green",
                      fontWeight: "700",
                      textTransform: "uppercase",
                    }}
                  >
                    <GiPresent />
                    <span> Ưu Đãi</span>
                  </div>
                  <div
                    style={{
                      backgroundColor: "white",
                      color: "green",
                      padding: "4px 0.5rem",
                      borderRadius: "0.5rem",
                      border: "2px solid green",
                      fontWeight: "700",
                      textTransform: "uppercase",
                    }}
                  >
                    <FaCartPlus size={13} />
                    <span> Giỏ Hàng</span>
                  </div>
                </div>
              </div>
              <div
                style={{
                  marginTop: "7%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "2rem",
                    fontSize: "1.5rem",
                  }}
                >
                  <div
                    className={
                      isClick === "home" ? "nav__link--active" : "nav__link"
                    }
                    onClick={() => handleClickLink("home")}
                  >
                    Home
                  </div>
                  <div
                    className={
                      isClick === "aboutUs" ? "nav__link--active" : "nav__link"
                    }
                    onClick={() => handleClickLink("aboutUs")}
                  >
                    Về Chúng Tôi
                  </div>
                  <div
                    className={
                      isClick === "products" ? "nav__link--active" : "nav__link"
                    }
                    onClick={() => handleClickLink("products")}
                  >
                    Sản Phẩm
                  </div>
                  <div
                    className={
                      isClick === "contact" ? "nav__link--active" : "nav__link"
                    }
                    onClick={() => handleClickLink("contact")}
                  >
                    Liên Hệ
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ position: "sticky", top: "0" }}>
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

          <AppNavBar>
            <div style={{ display: "flex", alignItems: "center" }}>
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
            <HamburgerMenu />
          </AppNavBar>
        </div>
      )}
    </>
  );
};

export default AppHeader;
