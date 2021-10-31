import React, { useEffect } from "react";
import "../styles/About.css";
import ProductCard from "../component/ProductCard";
import AboutImg from "../asset/aboutimg.jpg";
import Button from "../fragment/Button";

import Aos from "aos";
import "aos/dist/aos.css";

const AboutSection = () => {
  useEffect(() => {
    Aos.init({
      duration: 500,
      offset: 200,
    });
  }, []);

  return (
    <div className="about-section" id="about">
      <div className="about-wrapper">
        <div className="box-1">
          <div data-aos="fade-right" className="card-box">
            <ProductCard img={AboutImg} />
          </div>
        </div>
        <div className="box-2">
          <h3 data-aos="fade-left" className="title">
            Hybrid Bikes
          </h3>
          <p data-aos="fade-left" className="text">
            Dummy Text progressive, and affordable healthcare, accessible on
            mobile and online for everyone. To us, it’s not just work. We take
            pride in the solutions we deliver
          </p>

          <Button
            text="learn more"
            color="#FFBD37"
            bgcolor="#ffffff"
            border={true}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
