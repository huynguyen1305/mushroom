import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import banner from "../assets/bia.jpg";
import baoNguLoaiA from "../assets/baongu-loaiA.png";
import baoNguLoaiB from "../assets/baongu-loaiB.png";
import phoinam from "../assets/phoinam.png";

const listProduct = [
  {
    slug: "nam-bao-ngu-loai-a-lon-tuoi",
    name: "Nấm bào ngư loại A (lớn, tươi)",
    price: "80.000",
    image: baoNguLoaiA,
    isPhoi: false,
    decription:
      "Nấm bào ngư vị ngọt thanh, có chế chế biến được nhiều món ăn thơm ngon và bổ dưỡng, ngâm nước xả tươi chế biến dễ dàng, bảo quản tiện lợi. Công dụng giúp giải độc, khử nhiệt, tiêu thực, giảm huyết áp và ngừa nhồi máu cơ tim.",
  },
  {
    slug: "nam-bao-ngu-loai-b-nho-kho",
    name: "nấm bào ngư loại B (nhỏ, khô)",
    price: "70.000",
    image: baoNguLoaiB,
    isPhoi: false,
    decription:
      "Nấm sấy khô giòn tan không tẩm vị hoàn toàn tự nhiên và thân thiện với người ăn chay cung cấp các chất dinh dưỡng cần thiết cho cơ thể, nấm ăn còn có nhiều tác dụng dược lý khá phong phú. Nó không chứa bột ngọt, không có rau biến đổi gen và không có màu nhân tạo, hương vị hoặc chất bảo quản, được chế biến theo quy trình công nghệ cao, đảm bảo vệ sinh an toàn thực phẩm theo tiêu chuẩn được đóng gói tiện dụng, thuận lợi mang theo mỗi khi đi xa hay dành làm quà tặng vì nó rất lạ, ngon.",
  },
  {
    slug: "phoi-nam-loai-a-b-lon-nho",
    name: "Phôi Nấm loại A - B (lớn - nhỏ)",
    price: "25.000 - 30.000",
    image: phoinam,
    isPhoi: true,
    decription:
      "Phôi nấm được các thạc sĩ nghiên cứu sinh học của Viện Nghiên cứu Sinh học Ứng dụng cấy trồng tại phòng thí nghiệm của công ty.",
  },
];

const AboutPage = () => {
  const { slug } = useParams();
  const [item, setItem] = useState(null);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    if (slug) {
      const itemFilter = listProduct.filter((item) => item.slug === slug);
      setItem(itemFilter[0]);
    }
  }, [slug]);

  if (!item) return <p>Loading</p>;
  return (
    <>
      <section>
        <div style={{ width: "100%" }}>
          <img src={banner} alt="banner" style={{ width: "100%" }} />
        </div>
      </section>
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
          style={{
            display: "flex",
            alignItems: "start",
            marginTop: "2rem",
          }}
        >
          <div
            style={{
              width: "40%",
              marginRight: "1rem",
              transform: `${
                item.isPhoi ? "translateY(-3rem)" : "translateY(-6rem)"
              }`,
            }}
          >
            <img src={item.image} alt={item.name} style={{ width: "100%" }} />
          </div>

          <div style={{ width: "50%" }}>
            <div>
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "1.4rem",
                  textTransform: "capitalize",
                }}
              >
                {item.name}
              </span>
            </div>
            <div
              style={{
                fontWeight: "bold",
                fontSize: "1.8rem",
                color: "green",
                margin: "1rem 0",
              }}
            >
              {item.price} VND / {item.isPhoi ? "Phôi" : "Kg"}
            </div>
            <div>
              <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                Mô tả sản phẩm
              </span>
              :{" "}
              <p style={{ fontSize: "1rem", margin: "4px 0" }}>
                {item.decription}
              </p>
            </div>
            <br />
            <div
              style={{
                fontWeight: "bold",
                fontSize: "1.2rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div>Số Lượng:</div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "1rem",
                }}
              >
                <div
                  style={{
                    backgroundColor: "white",
                    padding: "0 8px",
                    textAlign: "center",
                    border: "1px solid black",
                    borderRadius: "50%",
                    cursor: "pointer",
                    userSelect: "none",
                  }}
                  onClick={() => {
                    if (counter > 0) {
                      setCounter(counter - 1);
                    }
                  }}
                >
                  -
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    padding: "8px",
                    width: "40px",
                    height: "40px",
                    textAlign: "center",
                    border: "1px solid black",
                    borderRadius: "8px",
                    margin: "0 1rem",
                  }}
                >
                  {counter}
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    padding: "0 6px",
                    textAlign: "center",
                    border: "1px solid black",
                    borderRadius: "50%",
                    cursor: "pointer",
                    userSelect: "none",
                  }}
                  onClick={() => {
                    if (counter >= 0) {
                      setCounter(counter + 1);
                    }
                  }}
                >
                  +
                </div>
              </div>
            </div>
            {/* <br /> */}
            <div
              style={{
                backgroundColor: "green",
                color: "white",
                padding: "8px 1rem",
                width: "150px",
                textAlign: "center",
                borderRadius: "4px",
                marginTop: "2rem",
                cursor: "pointer",
              }}
            >
              Mua Hàng
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
