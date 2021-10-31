import React from 'react'
import "../styles/Header.css"
import Navigation from "../component/Navigation"
import HeaderLogo from "../fragment/HeaderLogo"
import HeaderImg from "../asset/headerimg.jpg" 
import SearchIcon from "../asset/Vectorsearchicon.svg"
import Button from "../fragment/Button"    

const HeaderSection = () => {
    return (
      <div className="header-section">
        <div className="nav-box">
          <HeaderLogo />
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
              <img className="icon" src={SearchIcon} />
              <input type="text" placeHolder="Search Bike or anything" className="input" />
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
      </div>
    );
}

export default HeaderSection
