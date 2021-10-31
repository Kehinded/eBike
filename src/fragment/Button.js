import React from "react"

const Button = ({text}) => {
    return (
      <button
        style={{
          padding: "1rem 3rem",
          backgroundColor: "#FFBD37",
          borderRadius: "3rem",
          border: "none",
          outline: "none",
          display: "grid",
          placeItems: "center",
        }}
      >
        <span
          style={{
            textTransform: "capitalize",
            color: "#233348",
          }}
        >
          {text || "order"}
        </span>
      </button>
    );
}

export default Button;