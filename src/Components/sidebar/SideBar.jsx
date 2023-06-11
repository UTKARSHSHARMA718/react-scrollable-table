import React, { useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DnsIcon from "@mui/icons-material/Dns";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LockIcon from "@mui/icons-material/Lock";
import "./SideBar.css";
import useMediaQuery from "@mui/material/useMediaQuery";

const SideBar = () => {
  const isSmallScreen = useMediaQuery("(max-width: 760px)");

  const setWidth = () => {
    if (isSmallScreen) {
      return 25;
    }
    return 35;
  };


  const [selectBtn, setSelectBtn] = useState();
  const onHandleClick = (index) => {
    setSelectBtn(index);
  };
  return (
    <>
      <div className="sidebar-container">
        <div className="side-menu">
          <div className="user-accound-pic">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
          </div>
          <div className="menu-options">
            <DnsIcon
              className={`menu-btns ${selectBtn === 1 ? "bg-blue" : ""}`}
              sx={{ width: setWidth, height: 35 }}
              onClick={() => onHandleClick(1)}
            />
            <VolunteerActivismIcon
              sx={{ width: setWidth, height: 35 }}
              className={`menu-btns ${selectBtn === 2 ? "bg-blue" : ""}`}
              onClick={() => onHandleClick(2)}
            />
            <ManageAccountsIcon
              sx={{ width: setWidth, height: 35 }}
              className={`menu-btns ${selectBtn === 3 ? "bg-blue" : ""}`}
              onClick={() => onHandleClick(3)}
            />
            <LockIcon
              sx={{ width: setWidth, height: 35 }}
              className={`menu-btns ${selectBtn === 4 ? "bg-blue" : ""}`}
              onClick={() => onHandleClick(4)}
            />
          </div>
          <div className="user-settings">
            <NotificationsIcon
              sx={{ width: setWidth, height: 35 }}
              className={`menu-btns ${selectBtn === 5 ? "bg-blue" : ""}`}
              onClick={() => onHandleClick(5)}
            />
            <div className="user-profile-img">
              <img
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1148&q=80"
                alt=""
              />
            </div>
            <LogoutIcon
              sx={{
                width: setWidth,
                height: 35,
              }}
              className={`menu-btns ${selectBtn === 6 ? "bg-blue" : ""}`}
              onClick={() => onHandleClick(6)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
