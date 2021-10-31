import React, { useEffect } from "react";
import "../styles/Type.css";
import ImgDoc from "../asset/typeimg.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const TypeCard = ({ img, text }) => {
  useEffect(() => {
    Aos.init({
      duration: 500,
      offset: 200,
    });
  }, []);
  return (
    <div className="card-wrapper">
      <div className="card" data-aos="fade-in">
        <figure className="img-box">
          <img src={ImgDoc} alt="" className="img" />
        </figure>
      </div>
      <p data-aos="fade-down" className="text">
        {text || "text"}
      </p>
    </div>
  );
};

export default TypeCard;
