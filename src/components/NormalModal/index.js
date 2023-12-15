import React from "react";

import "./styles.scss";
import { Modal } from "react-bootstrap";

const NormalModal = ({
  children,
  customModalClass,
  show,
  setModal,
  header,
  hideIcon,
  foreCastTitle,
  showIcon,
}) => {
  const toggle = () => {
    setModal(!show);
  };

  return (
    <Modal
      backdrop="static"
      size="lg"
      show={show}
      aria-labelledby="contained-modal-title-vcenter"
      toggle={toggle}
      centered
      className={`normalModal ${customModalClass}`}
    >
      {showIcon && (
        <Modal.Header closeButton>
          <div className="popup-heading-and-closebutton">
            {foreCastTitle ? <span>Cash Flow Forecast Details</span> : ""}
          </div>
        </Modal.Header>
      )}
      {/* {hideIcon ? (
    <Modal.Header>
     
    </Modal.Header>
  ) : (
    <Modal.Header closeButton>
      <div className="popup-heading-and-closebutton">
        { foreCastTitle?  <span>Cash Flow Forecast Details</span>:"" }
   
      </div>
    </Modal.Header>
  )} */}
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default NormalModal;
