import React from "react";
import ProfileHeader from "../profileHeader";
import "./styles.scss";
import NormalButton from "../../components/NormalButton";

import NormalSelect from "../../components/NormalSelect";
import NotificationForm from "../../components/NotificationAddType";


function Notification() {
//   const selectType=[{
//     label:"Email Noptification",value:"Email Noptification"
//   },
//   {
//     label:"Email Noptification",value:"Email Noptification"
//   },
//   {
//     label:"Email Noptification",value:"Email Noptification"
//   },
//   {
//     label:"Email Noptification",value:"Email Noptification"
//   },]
//   const beforeDue=[{
//     label:"2 days",value:"2 days"
//   },
//   {
//     label:"2 days",value:"2 days"
//   },
//   {
//     label:"2 days",value:"2 days"
//   }
//  ]
//   const AfterDue=[{
//     label:"none",value:"none"
//   },
//   {
//     label:"Email Noptification",value:"Email Noptification"
//   },
//   {
//     label:"Email Noptification",value:"Email Noptification"
//   },
//   {
//     label:"Email Noptification",value:"Email Noptification"
//   },]


  return (
    <div className="notification-data-main-container">
      <ProfileHeader />
      <div className="profile-notification-container">
        <div className="notification-data-header">
          <div className="notification-header">Notification Reminder Setting</div>
          <div className="notification-add-type-btn">
            <NormalButton label="Add Type" notifyBtn />
          </div>
        </div>
        <hr className="underline"></hr>
<NotificationForm/>

 <div className="profile-notification-savebtn"><NormalButton label="Save" approveBtn/></div>
       
      </div>
    </div>
  );
}

export default Notification;
