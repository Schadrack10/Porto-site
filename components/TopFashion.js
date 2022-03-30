import React from "react";

const TopFashion = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "270px",
        background: "url('fashion-deals.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button
        style={{
          border: "none",
          height: "60px",
          width: "140px",
          color: "white",
          backgroundColor: "black",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop:"185px",
          marginRight:"190px",
        }}
      >
        VIEW SALE
      </button>
    </div>
  );
};

export default TopFashion;
