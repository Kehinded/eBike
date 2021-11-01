import React, { useEffect } from "react";
import "../styles/Button.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Button = ({ text, color, bgcolor, withborder }) => {
  useEffect(() => {
    Aos.init({
      duration: 500,
      offset: 200,
    });
  }, []);

  if (withborder) {
    return (
      <button
        data-aos="fade-left"
        style={{
          padding: "1vw 3rem",
          backgroundColor: `${bgcolor || "#FFBD37"}`,
          borderRadius: "3rem",
          border: "none",
          outline: "none",
          display: "grid",
          placeItems: "center",
          cursor: "pointer",
          // eslint-disable-next-line no-dupe-keys
          border: ".1rem solid #ffbd37",
        }}
      >
        <span
          style={{
            textTransform: "capitalize",
            color: ` ${color || "#233348"}`,
            fontWeight: "bold",
          }}
        >
          {text || "order"}
        </span>
      </button>
    );
  }
  return (
    <button
      className="padding"
      style={{
        backgroundColor: `${bgcolor || "#FFBD37"}`,
        borderRadius: "3rem",
        border: "none",
        outline: "none",
        display: "grid",
        placeItems: "center",
        cursor: "pointer",
      }}
    >
      <span
        style={{
          textTransform: "capitalize",
          color: ` ${color || "#233348"}`,
          fontWeight: "bold",
        }}
      >
        {text || "order"}
      </span>
    </button>
  );
};

export default Button;
