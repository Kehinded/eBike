import React from "react";
import { Link } from "react-scroll";

const Navigation = ({smallScreen, onNavigate}) => {
  // const location = useLocation();
  if(smallScreen){
    return (
      <ul
        className="nav-list"
        style={{
          // backgroundColor: "transparent",       
          padding: "1.5rem",
          width: "90vw",
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          color: "#FFBD37",
          fontWeight: "bold",
          fontSize: "3rem",
          borderRadius: ".5rem",
          listStyle: "none",
          textTransform: "capitalize"
        }}
      >
        <li className="nav-item">
          <Link
            onClick={onNavigate}
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
          <Link
            onClick={onNavigate}
            to="types"
            spy={true}
            smooth={true}
            className="nav-link"
          >
            bike type
          </Link>
        </li>
        <li className="nav-item">
          <Link
            onClick={onNavigate}
            to="about"
            spy={true}
            smooth={true}
            className="nav-link"
          >
            about us
          </Link>
        </li>
        <li className="nav-item">
          <Link
            onClick={onNavigate}
            to="testimonies"
            spy={true}
            smooth={true}
            className="nav-link"
          >
            testimonials
          </Link>
        </li>
        <li className="nav-item">
          <Link  
          onClick={onNavigate}
           to="contact"
            spy={true} 
            smooth={true} 
            className="nav-link"
            >
            contact
          </Link>
        </li>
      </ul>
    );
  }
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
