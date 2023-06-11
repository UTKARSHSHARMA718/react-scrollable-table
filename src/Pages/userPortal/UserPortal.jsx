import React, { useState } from "react";
import NavBar from "../../Components/navbar/NavBar";
import Table from "../../Components/table/Table";
import SideBar from "../../Components/sidebar/SideBar";
import "./UserPortal.css";
import Roles from "../../Components/roles/Roles";

const Portal = () => {
  const [currentTagToShow, setCurrentTagToShow] = useState(2);
  return (
    <div>
      <div className="portal-container">
        <div className="sideBar">
          <SideBar />
        </div>
        <div className="userDetails">
          <NavBar
            currentTagToShow={currentTagToShow}
            setCurrentTagToShow={setCurrentTagToShow}
          />
          {currentTagToShow === 2 ? <Table /> : <Roles />}
        </div>
      </div>
    </div>
  );
};

export default Portal;
