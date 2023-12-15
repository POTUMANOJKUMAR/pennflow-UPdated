import React from "react";
import "./styles.scss";

const NormalButton = ({
  label,
  onClick,
  loginBtn,
  approveBtn,
  notifyBtn,
  disable,
  addBtn,
  cancelBtn,
  showBtn,
  saveindraft,
  sendinvoice,
  account,
  chatbutton,
  exports,
  scenarios,
}) => {
  return (
    <div>
      <button
        className={`${
          disable
            ? "disable-btn"
            : loginBtn
            ? "login-btn"
            : approveBtn
            ? "approve-btn"
            : notifyBtn
            ? "notify-btn"
            : addBtn
            ? "add-btn"
            : cancelBtn
            ? "cancel-btn"
            : showBtn
            ? "show-btn"
            :saveindraft
            ? "save-in-draft"
            : sendinvoice
            ? "send-invoice"
            : account
            ?"account"
            : chatbutton
            ?"chat-button"
            : exports
            ?"exports-button"
            : scenarios
            ?"scenarios-button"
            :""
        } `}
        onClick={onClick}
        disabled={disable}
      >
        <span className="btn-label">{label}</span>
      </button>
    </div>
  );
};

export default NormalButton;
