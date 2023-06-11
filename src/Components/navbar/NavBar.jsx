import React from "react";
import "./Navbar.css";
const NavBar = ({ currentTagToShow, setCurrentTagToShow }) => {
  const onHandleSelect = (tagIndex) => {
    setCurrentTagToShow(tagIndex);
  };
  return (
    <>
      <div>
        <nav className="box">
          <div className="nav-container">
            <div className="heading">
              <h1>Access Control</h1>
            </div>
            <div className="tags">
              <button
                className={`tags-btn ${
                  currentTagToShow === 1 ? "border-bottom" : ""
                }`}
                onClick={() => onHandleSelect(1)}
              >
                Roles
              </button>
              <button
                className={`tags-btn ${
                  currentTagToShow === 2 ? "border-bottom" : ""
                }`}
                onClick={() => onHandleSelect(2)}
              >
                Users
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
