import React, {useState} from "react";
import "../styles/Header.css";
import Navigation from "../component/Navigation";
import HeaderLogo from "../fragment/HeaderLogo";
import HeaderImg from "../asset/headerimg.jpg";
import SearchIcon from "../asset/Vectorsearchicon.svg";
import Button from "../fragment/Button";
import Dot from "../fragment/Dot";
import { FaBars, FaTimes } from "react-icons/fa";
import Modal from "react-awesome-modal";

const HeaderSection = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className="header-section" id="header">
      <div className="nav-box">
        <HeaderLogo />
        {/* <input type="checkbox" name="" id="nav-check" className="nav-check" /> */}
        <div onClick={() => setShowModal(true)} className="nav-label">
          <FaBars onClick={() => setShowModal(true)} className="nav-icon" />
        </div>
        <Navigation />
      </div>
      {/* end of nav box */}
      <div className="content-box">
        <div className="box-1">
          <p className="text-one">Your Bike Electric Update</p>
          <p className="text-two">
            Dummy text progressive, and affordable healthcare, accessible on
            mobile and online for everyone
          </p>
          <div className="input-group">
            <img className="icon" alt="" src={SearchIcon} />
            <input
              type="text"
              placeholder="Search Bike or anything"
              className="input"
            />
            <Button text="find" className="btn" />
          </div>
        </div>
        {/* end of box one */}
        <div className="box-2">
          <figure className="img-box">
            <img src={HeaderImg} alt="" className="img" />
          </figure>
        </div>
      </div>
      <Dot top="15%" left="-15%" styling="dot-box-2" />
      {/* modal at small screen */}

      <Modal visible={showModal} effect="fadeInUp">
        <FaTimes
          onClick={() => setShowModal(false)}
          style={{
            position: "absolute",
            top: "2rem",
            right: "2rem",
            color: "red",
            cursor: "pointer",
            transform: "scale(2)",
          }}
        />
        <Navigation smallScreen={true} onNavigate={() => setShowModal(false)} />
      </Modal>
    </div>
  );
};

export default HeaderSection;

