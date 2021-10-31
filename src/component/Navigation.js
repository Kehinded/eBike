import React from "react"
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
    const location = useLocation()
    return (
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/products" className="nav-link active">
            product
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/types" className="nav-link">
            bike type
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            about us
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/testimonies" className="nav-link">
            testimonials
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            contact
          </Link>
        </li>
      </ul>
    );
}

export default Navigation;