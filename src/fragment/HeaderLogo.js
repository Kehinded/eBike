import React from "react";
import "../styles/Header.css";

const HeaderLogo = ({ roundColor }) => {
  return (
    <div className="logo-box">
      <div className={`round-text ${roundColor}`}>
        {" "}
        <span>a</span>{" "}
      </div>
      <p className="text">eBike</p>
    </div>
  );
};

export default HeaderLogo;
