import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  /* border: 1px solid black; */
  cursor: pointer;
`;

const Card = ({ item }) => {
  return (
    <CardContainer>
      <div>
        <img
          src={item.image}
          alt={item.name}
          style={{ width: "100%", objectFit: "contain" }}
        />
      </div>
      <div
        style={{
          fontWeight: "600",
          color: "black",
          textTransform: "capitalize",
          textAlign: "center",
        }}
      >
        {item.name}
      </div>
      <div style={{ color: "green", textAlign: "center", margin: "1rem" }}>
        {item.price} VND / {item.isPhoi ? "Phôi" : "Kg"}
      </div>
      <div
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "8px 1rem",
          width: "150px",
          margin: "0 auto",
          textAlign: "center",
          borderRadius: "1rem",
        }}
      >
        Mua Hàng
      </div>
    </CardContainer>
  );
};

export default Card;
