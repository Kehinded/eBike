import React from "react";
import "../styles/Dot.css";

const Dot = ({ top, bottom, left, right, styling, dotFour, bgcolor }) => {
  if (dotFour) {
    return (
      <div
        className={`dot-box ${styling}`}
        style={{
          position: "absolute",
          top: `${top}`,
          bottom: `${bottom}`,
          left: `${left}`,
          right: `${right}`,
          zIndex: "20",
        }}
      >
        <div style={{ backgroundColor: `${bgcolor}` }} className="dot"></div>
        <div style={{ backgroundColor: `${bgcolor}` }} className="dot"></div>
        <div style={{ backgroundColor: `${bgcolor}` }} className="dot"></div>
        <div style={{ backgroundColor: `${bgcolor}` }} className="dot"></div>
        <div style={{ backgroundColor: `${bgcolor}` }} className="dot"></div>
        <div style={{ backgroundColor: `${bgcolor}` }} className="dot"></div>
        <div style={{ backgroundColor: `${bgcolor}` }} className="dot"></div>
        <div style={{ backgroundColor: `${bgcolor}` }} className="dot"></div>
      </div>
    );
  }
  return (
    <div
      className={`dot-box ${styling}`}
      style={{
        position: "absolute",
        top: `${top}`,
        left: `${left}`,
        right: `${right}`,
      }}
    >
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  );
};

export default Dot;

