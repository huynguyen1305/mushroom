import React from "react";

import { Link } from "react-router-dom";
import banner from "../assets/bia.png";
import aboutImage from "../assets/about-image.jpg";
import baoNguLoaiA from "../assets/baongu-loaiA.png";
import baoNguLoaiB from "../assets/baongu-loaiB.png";
import phoinam from "../assets/phoinam.png";

import "./HomePage.css";
import Card from "../components/Card/Card";

const listProduct = [
  {
    slug: "nam-bao-ngu-loai-a-lon-tuoi",
    name: "Nấm bào ngư loại A (lớn, tươi)",
    price: "80.000",
    image: baoNguLoaiA,
    isPhoi: false,
  },
  {
    slug: "nam-bao-ngu-loai-b-nho-kho",
    name: "nấm bào ngư loại B (nhỏ, khô)",
    price: "70.000",
    image: baoNguLoaiB,
    isPhoi: false,
  },
  {
    slug: "phoi-nam-loai-a-b-lon-nho",
    name: "Phôi Nấm loại A - B (lớn - nhỏ)",
    price: "25.000 - 30.000",
    image: phoinam,
    isPhoi: true,
  },
];

const HomePage = () => {
  return (
    <>
      <section>
        <div style={{ width: "100%" }}>
          <img src={banner} alt="banner" style={{ maxWidth: "100%" }} />
        </div>
      </section>

      <br />

      <section id="aboutUs">
        <h1
          style={{
            textTransform: "uppercase",
            textAlign: "center",
            fontFamily: `'Work Sans', sans-serif`,
            color: "#b27249",
          }}
        >
          Organic Farm
        </h1>

        <div className="app-container">
          <div
            className="about"
            style={{ display: "flex", alignItems: "center", gap: "1rem" }}
          >
            <div
              data-aos="slide-right"
              data-aos-duration="400"
              style={{
                width: "45%",
                height: "400px",
                backgroundImage: `url(${aboutImage})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              className="about__image"
            ></div>
            <div
              data-aos="slide-left"
              data-aos-duration="400"
              style={{ width: "45%" }}
              className="about__content"
            >
              <h4 style={{ marginBottom: "4px" }}>TẦM NHÌN</h4>
              <div>
                Trở thành thương hiệu thực phẩm sạch, chất lượng trong top 10
                tại Việt Nam.
              </div>
              <h4 style={{ marginBottom: "4px" }}>SỨ MỆNH</h4>
              <div>
                Xây dựng và phát triển nền nông nghiệp hiện đại vì sức khỏe
                người tiêu dùng và tương lai của người nông dân Việt Nam.
              </div>

              <h4 style={{ marginBottom: "4px" }}>GIÁ TRỊ CỐT LÕI</h4>
              <div style={{ marginBottom: "8px" }}>
                - <span style={{ fontWeight: "bold" }}>Chuyên nghiệp</span>: Trở
                thành thương hiệu thực phẩm sạch, chất lượng trong top 10 tại
                Việt Nam.
              </div>
              <div style={{ marginBottom: "8px" }}>
                - <span style={{ fontWeight: "bold" }}>Tính bền vững</span>: Đảm
                bảo chất lượng và giá cả ổn định. Số lượng và chủng loại sản
                phẩm ổn định.
              </div>
              <div style={{ marginBottom: "8px" }}>
                - <span style={{ fontWeight: "bold" }}>Cải tiến</span>: Liên tục
                cải tiến và tối ưu hóa để mang lại các giải pháp tốt nhất cho
                khách hàng và các nhóm mục tiêu khác trong chuỗi cung ứng.
              </div>
              <div style={{ marginBottom: "8px" }}>
                - <span style={{ fontWeight: "bold" }}>Linh hoạt</span>: Luôn
                tìm ra giải pháp cho các vấn đề của khách hàng và chuỗi cung ứng
                dựa trên điều kiện thực tế, đảm bảo đôi bên cùng có lợi.
              </div>
            </div>
          </div>
        </div>
      </section>

      <br />
      <div className="app-container" style={{ margin: "1rem auto" }}>
        <hr style={{ border: `1px solid white` }} />
      </div>
      <br />

      <section id="products">
        <div className="app-container">
          <h2
            style={{
              textAlign: "center",
              fontSize: "2em",
              textTransform: "uppercase",
              fontFamily: `'Work Sans', sans-serif`,
              color: "#b27249",
              marginBottom: 0,
            }}
          >
            Sản Phẩm
          </h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            {listProduct.map((item, idx) => {
              return (
                <div
                  key={item.slug}
                  data-aos="fade-in"
                  data-aos-delay={idx * 500}
                  style={{ width: "100%" }}
                >
                  <Link to={`/sanpham/${item.slug}`}>
                    <Card item={item} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <br />
      <div className="app-container" style={{ margin: "1rem auto" }}>
        <br />
      </div>
      <br />
    </>
  );
};

export default HomePage;
