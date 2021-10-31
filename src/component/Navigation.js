import React from "react";
import { Link } from "react-scroll";

const Navigation = () => {
  // const location = useLocation();
  return (
    <ul className="nav-list">
      <li className="nav-item">
        <Link
          activeClass="active"
          to="products"
          spy={true}
          smooth={true}
          className="nav-link active"
        >
          product
        </Link>
      </li>
      <li className="nav-item">
        <Link to="types" spy={true} smooth={true} className="nav-link">
          bike type
        </Link>
      </li>
      <li className="nav-item">
        <Link to="about" spy={true} smooth={true} className="nav-link">
          about us
        </Link>
      </li>
      <li className="nav-item">
        <Link to="testimonies" spy={true} smooth={true} className="nav-link">
          testimonials
        </Link>
      </li>
      <li className="nav-item">
        <Link to="contact" spy={true} smooth={true} className="nav-link">
          contact
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
