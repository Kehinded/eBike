import React, { useEffect } from "react";
import Dot from "../fragment/Dot";
import "../styles/Testimony.css";
import TestImg from "../asset/testimonyimg.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const TestimonySection = () => {
  useEffect(() => {
    Aos.init({
      duration: 500,
      offset: 200,
    });
  }, []);
  return (
    <div className="testimony-section" id="testimonies">
      <div className="testimony-wrapper">
        <Dot top="1rem" right="1rem" bgcolor="#FFE8B9" dotFour={true} />
        <div className="title-box">
          <p className="text" data-aos="fade-in">
            What our customer are saying
          </p>
          <span data-aos="fade-in"></span>
        </div>
        <div className="content-box">
          <div className="name-image-box">
            <figure className="img-box" data-aos="fade-up">
              <img src={TestImg} alt="" className="img" />
            </figure>
            <p data-aos="fade-up" className="name">
              Edward Newgate
            </p>
            <p data-aos="fade-up" className="text">
              Pro-Cycler
            </p>
          </div>
          <div className="text-box" data-aos="fade-left">
            <p>
              Dummy Text patient engagement app and web portal allow you to
              access information instantaneously (no tedeous form, long calls,
              or administrative hassle) and securely”
            </p>
          </div>
        </div>
      </div>
      {/* end of wrapper */}
      <div className="arrow-dot-box">
        <div className="dot-box">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <FaLongArrowAltRight className="icon" />
      </div>
      {/* 
      <Dot bottom="0rem" right="1rem" bgcolor="#FFE8B9" dotFour={true} /> */}
    </div>
  );
};

export default TestimonySection;

