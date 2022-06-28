import React from "react";

import logo from "../../assets/logo.png";
import namFooter from "../../assets/nam-footer.png";

import styled from "styled-components";

const AppFooterWrapper = styled.footer`
  background-color: #ead7c5;
  padding: 2rem;
`;

const AppFooter = () => {
  return (
    <AppFooterWrapper>
      <div className="app-container" id="contact">
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            borderBottom: "3px solid white",
          }}
        >
          <div
            style={{ width: "80%", display: "flex", alignItems: "flex-start" }}
          >
            <div style={{ width: "20%", height: "100%" }}>
              <img
                src={logo}
                alt="Logo"
                style={{ height: "100%", width: "100%" }}
              ></img>
            </div>
            <div>
              <div
                style={{
                  fontSize: "2em",
                  textTransform: "uppercase",
                  fontFamily: `'Work Sans', sans-serif`,
                  color: "#b27249",
                  fontWeight: "bold",
                }}
              >
                Organic Farm
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  flexDirection: "column",
                }}
              >
                <div style={{ margin: "8px 0" }}>
                  <span
                    style={{ textTransform: "uppercase", fontWeight: "600" }}
                  >
                    NÔNG TRẠI SẢN XUẤT
                  </span>
                  : Ấp 4, xã Đức Hoà Đông, huyện Đức Hoà, tỉnh Long An
                </div>
                <div style={{ margin: "8px 0" }}>
                  <span
                    style={{ textTransform: "uppercase", fontWeight: "600" }}
                  >
                    Cửa Hàng Trưng Bày
                  </span>
                  : Căn hộ tại chung cư Ruby, Tân Bình
                </div>
                <div style={{ margin: "8px 0" }}>
                  <span
                    style={{ textTransform: "uppercase", fontWeight: "600" }}
                  >
                    SỐ ĐIẸN THOẠI
                  </span>
                  : 0829661818 – 0344090389
                </div>
                <div style={{ margin: "8px 0" }}>
                  <span
                    style={{ textTransform: "uppercase", fontWeight: "600" }}
                  >
                    EMAIL
                  </span>
                  : nongtraihuuco2022.vn@gmail.com
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: "20%" }}>
            <div style={{ transform: "translateY(20px)" }}>
              <img src={namFooter} alt="nam-footer" style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </div>
    </AppFooterWrapper>
  );
};

export default AppFooter;
