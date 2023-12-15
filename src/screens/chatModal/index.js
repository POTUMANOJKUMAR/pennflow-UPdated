import React, { useState } from "react";

import "./styles.scss";
import assets from "../../assets";

import NormalButton from "../../components/NormalButton";


const ChatModal = () => {
  const [showChatModal, setShowChatModal] = useState(false);
  
  const onCloseChatModal = () => {
    // console.log("Closing chat modal"); // Add this line
    setShowChatModal(false);
  };
 

  return (
    <div>
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
          <div className="class-footer-content">We are here to help you with our service related queries.</div>
        </div>
        <div className="chat-bottom">

          <div className="chat-choose">
            Choose any one of the service.
          </div>
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
    </div>
  );
};

export default ChatModal;
