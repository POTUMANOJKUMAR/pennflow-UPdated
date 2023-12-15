import React, { useEffect, useState } from "react";
import "./styles.scss";
import assets from "../../assets";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import NormalModal from "../NormalModal";
import NormalButton from "../../components/NormalButton";

const Sidebar = () => {
  const [navLink] = useState([
    {
      to: "/main/dashboard",
      label: "Dashboard",
      Icon: assets.Icons.dashboard,
      ActiveIcon: assets.Icons.activeDashboard,
      id: "1",
    },
    {
      to: "/main/pay",
      label: "Pay",
      Icon: assets.Icons.pay,
      ActiveIcon: assets.Icons.activePay,
      id: "2",
    },
    {
      to: "/main/get-paid",
      label: "Get Paid",
      Icon: assets.Icons.getPaid,
      ActiveIcon: assets.Icons.activeGetPaid,
      id: "3",
    },
    {
      to: "/main/insights",
      label: "Insights",
      Icon: assets.Icons.insights,
      ActiveIcon: assets.Icons.activeInsights,
      id: "4",
    },
    {
      to: "/main/forecast",
      label: "Forecast",
      Icon: assets.Icons.forecast,
      ActiveIcon: assets.Icons.activeForecast,
      id: "5",
    },
    {
      to: "/main/budgeting",
      label: "Budgeting",
      Icon: assets.Icons.budget,
      ActiveIcon: assets.Icons.activeBudget,
      id: "6",
    },
    {
      to: "/main/transaction",
      label: "Transactions",
      Icon: assets.Icons.transactions,
      ActiveIcon: assets.Icons.activeTransactions,
      id: "7",
    },
    {
      to: "/main/expense-card",
      label: "Expense Card",
      Icon: assets.Icons.expenseCard,
      ActiveIcon: assets.Icons.activeExpenseCard,
      id: "8",
    },
  ]);

  const [mainLinks, setMainLinks] = useState([]);
  const [showChatModal, setShowChatModal] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    let navLinks = [...navLink];

    setMainLinks([...navLinks]);
  }, [navLink]);

  const onClickNav = async (label) => {
    if (label === "Log out") {
      navigate("/auth/login");
    } else if (label === "Chat") {
      setShowChatModal(true);
    }
  };

  const location = useLocation();

  const onCloseChatModal = () => {
    // console.log("Closing chat modal"); // Add this line
    setShowChatModal(false);
  };
  return (
    <div id="sideBar" className="side-bar-container">
      <div className="side-bar-header">
        <img
          src={assets.Images.sideBarLogo}
          alt="logo"
          className="side-bar-logo"
        />
      </div>
      <div className="item-side-bar">
        {mainLinks.map(({ to, label, Icon, ActiveIcon }, index) => {
          return (
            <NavLink
              to={to}
              onClick={() => onClickNav(label)}
              style={{ textDecoration: "none" }}
              key={`${index}`}
            >
              <div
                className={`
                  ${location.pathname === to ? "active-div" : "in-active-div"}
                  `}
              >
                <div className="side-bar-list">
                  <span>
                    <img
                      alt={location.pathname}
                      src={location.pathname === to ? ActiveIcon : Icon}
                      className={`sidebar-icon
                        ${
                          location.pathname === to
                            ? "active-icon"
                            : "in-active-icon"
                        }`}
                    />
                  </span>

                  <span
                    className={
                      location.pathname === to
                        ? "active-label"
                        : "in-active-label"
                    }
                  >
                    {label}
                  </span>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
      <div className="bottom-line-container">
        <hr className="bottom-line"></hr>
      </div>
      <div className="bottom-content">
        <div className="d-flex align-items-center">
          <img
            src={assets.Images.sidebarProPic}
            alt="logo"
            className="side-bar-image"
          />
          <div className="d-flex flex-column ">
            <span className="sidebar-username">Jane Doe</span>
            <span className="sidebar-view-profile">View Profile</span>
          </div>
          <img
            src={assets.Icons.chat}
            alt="chat"
            className="sidebar-chat-icon"
            onClick={() => onClickNav("Chat")}
          />
          <img
            src={assets.Icons.settings}
            alt="settings"
            className="sidebar-settings-icon"
          />
        </div>
      </div>
      <NormalModal
        show={showChatModal}
        setModal={setShowChatModal}
        customModalClass="chat"
      >
        <div className="chat-contianer">
          <div className="chat-top">
            <div className="d-flex">
              <div>
                <img
                  src={assets.Icons.chatcircle}
                  alt="settings"
                  className="chat-circle-icon"
                />
                <img
                  src={assets.Icons.chatpf}
                  alt="settings"
                  className="chat-pf-icon"
                />
              </div>
              <div className="chat-top-content">Ask Our Experts</div>
              <img
                src={assets.Icons.closeicon}
                alt="settings"
                className="chat-close-icon"
                onClick={onCloseChatModal}
              />
            </div>
            <div className="class-middle-content">Welcome to Pennyflo</div>
            <div className="class-footer-content">
              We are here to help you with our service related queries.
            </div>
          </div>
          <div className="chat-bottom">
            <div className="chat-choose">Choose any one of the service.</div>
            <div className="chat-buttons">
              <div className="chat-top-button d-flex gap-1">
                <NormalButton label={"Accounts"} account />
                <NormalButton label={"Payables"} chatbutton />
                <NormalButton label={"Receibables"} chatbutton />
              </div>

              <div className="chat-middle-button d-flex gap-1">
                <NormalButton label={"Accounts & Integrations"} chatbutton />
                <NormalButton label={"Forecast / Scenarios"} chatbutton />
              </div>

              <div className="chat-bottom-button d-flex gap-1 ">
                <NormalButton label={"Queries"} chatbutton />
                <NormalButton label={"Others"} chatbutton />
              </div>
            </div>
            {/* <hr className="chat-line"></hr> */}
            <div className="chat-input">
              <input
                className="chat-start"
                type={"text"}
                placeholder={"Start a Conversation"}
              />
              <img
                src={assets.Icons.chatarrowicon}
                alt="settings"
                className="chat-arrow-icon"
              />
            </div>
          </div>
        </div>
      </NormalModal>
    </div>
  );
};

export default Sidebar;
