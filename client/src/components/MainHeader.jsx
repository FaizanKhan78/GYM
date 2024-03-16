import React from "react";
import { Link } from "react-router-dom";
import Image from "../images/main_header.png";

const Header = () => {
  return (
    <>
      <header className="main__header">
        <div className="container main__header-container">
          <div className="main__header-left">
            <h4>#100DaysOfWorkOut</h4>
            <h1>Join The Legends Of The Fitness World</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              totam numquam molestias velit unde fugit neque.
            </p>
            <Link to="/plans" className="btn lg">
              Get Started
            </Link>
          </div>
          <div className="main__header-right">
            <div className="main_header-circle"></div>
            <div className="main__header-image">
              <img src={Image} alt="Main Header Img" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
