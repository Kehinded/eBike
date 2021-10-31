import React from "react"

const Button = ({text}) => {
    return(
        <button 
        style={{
            padding: ".5rem 2.5rem",
            backgroundColor: "#FFBD37",
            borderRadius: "2rem",    
            border: "none",
            outline: "none",
            display: "grid",
            placeItems: "center"
        }}
        >
           <span style={{
               textTransform: "capitalize",
               color: "#ffffff",
           }}>{text || "order"}</span>
        </button>
    )
}

export default Button;