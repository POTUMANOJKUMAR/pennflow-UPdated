import React from "react";
import "./styles.scss";
import assets from "../../assets";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import NormalModal from "../NormalModal";

const Header = () => {
  let navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handle = () => {
    setShow(!show);
    console.log(show, "show");
  };
  const pophandleclick = () => {
    setShow(!show);
    navigate("/main/profile");
  };

  const location = useLocation();
  const pathArray = location.pathname.split("/");
  const getHeaderText = pathArray[2] || "Unknown";
  const headerText =
    getHeaderText.charAt(0).toUpperCase() + getHeaderText.slice(1);

  const connectAccounts = [
    {
      id: 1,
      icon: assets.Icons.icici,
    },
    {
      id: 1,
      icon: assets.Icons.hdfc,
    },
    {
      id: 1,
      icon: assets.Icons.plus,
    },
  ];
  const integrations = [
    {
      id: 1,
      icon: assets.Icons.email,
      email: true,
    },
    {
      id: 1,
      icon: assets.Icons.drive,
    },
    {
      id: 1,
      icon: assets.Icons.dropbox,
    },
    {
      id: 1,
      icon: assets.Icons.plus,
    },
  ];
  const menus = [
    {
      id: 1,
      title: "Profile",
      link: `/main/profile/`,
    },
    {
      id: 2,
      title: "Integrations",
      link: "/main/integration/",
    },
    {
      id: 3,
      title: "Networks",
      link: "/main/networking",
    },
    {
      id: 4,
      title: "Accounts",
      link: "/main/accounts",
    },
    {
      id: 5,
      title: "Vendors",
      link: "/main/vendor",
    },
    {
      id: 6,
      title: "Reminder Setting",
      link: "/main/notification",
    },
    {
      id: 7,
      title: "Logout",
      link: "/auth/login",
    },
  ];

  function handleclick(link, title) {
    setShow(!show);

    navigate(link);
    sessionStorage.setItem("activeMenu", title);
  }
  return (
    <div className="header-container">
      <div className="dashboard-container">
        <div className="dashboard-icon-container">
          <img
            src={assets.Icons.headerDashboard}
            alt="dashboardIcon"
            className="dashboard-icon"
          />
        </div>
        <p className="dashboard-text">{headerText}</p>
      </div>
      <div className="connected-accounts-container">
        <p className="connected-accounts">Connected accounts</p>
        {connectAccounts.map((list) => (
          <div className="connected-icon-container">
            <img
              src={list.icon}
              alt="connected-accounts-icon"
              className="connected-account-icon"
            />
          </div>
        ))}
      </div>
      <div className="connected-accounts-container">
        <p className="connected-accounts">Integrations</p>
        {integrations.map((list) => (
          <div className="connected-icon-container">
            <img
              src={list.icon}
              alt="connected-accounts-icon"
              className={`${list.email ? "email-icon" : "integrations-icon"}`}
            />
          </div>
        ))}
      </div>
      <div className="d-flex align-items-center px-2">
        <img src={assets.Icons.bell} alt="bell" className="bell-icon" />
        <div className="header-profile-container" onClick={() => handle()}>
          <img
            src={assets.Icons.headerProfile}
            alt="headerProfile"
            className="header-profile"
          />
        </div>
      </div>
      <NormalModal show={show} customModalClass="profilepop">
        <div className="profile-pop-values">
          {menus.map((item) => {
            return (
              <div
                onClick={() => handleclick(item.link, item.title)}
                className="cursor-pointer"
              >
                {item.title}
              </div>
            );
          })}
        </div>
      </NormalModal>
    </div>
  );
};

export default Header;
