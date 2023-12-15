import React from "react";
import "./styles.scss"
import assets from "../../assets";
import NormalInput from "../../components/inputField";
import NormalButton from "../../components/NormalButton";
import Profile from "../profileHeader";


function ProfileData() {

  return (
    <>
    
   
      <div className="profile-data-main-container">
      <Profile/>
        <div className="profile-data">
          <p className="profile-header">Profile</p>
          <hr></hr>
          <div className="row">
         
            <div className="col-xs-12 col-sm-12 col-md-6 col-xl-4">
              <div className="profile-form-data">User Type</div>
              <div className="values">Admin</div>
              
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-xl-4">
              <div className="profile-form-data">Full Name</div>
              <div className="values">John Doe</div>
              </div>
            </div>
            <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-xl-4">
              <div className="profile-form-data">Employee ID</div>
              <div className="values">13245</div>
              
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-xl-4">
              <div className="profile-form-data">Email Address</div>
              <div className="values">john@gmail.com</div>
              
            </div>
            <div className="w-100">
              <div className="profile-form-data">Mobile Number</div>
              <div className="values" >+91 98968 65489 <span><img  alt="" src={assets.Icons.editBtn}/></span></div>
              
            </div>
          </div>
        </div>
        <div className="change-password-container">
        <p className="profile-change-password-header">Change Password</p>
        <hr></hr>
       
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-xl-4"> 
                <div className="password-label">Current Password</div>
                <div><NormalInput type="password" placeholder="Enter here"/></div>
            </div>     
             </div>
            <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-xl-4"> 
                <div className="password-label">New Password</div>
                <div><NormalInput type="password" placeholder="Enter here"/></div>
            </div>
         
          
            <div className="col-xs-12 col-sm-12 col-md-6 col-xl-4"> 
                <div className="password-label">Confirm New Password</div>
                <div><NormalInput type="password" placeholder="Enter here"/></div>
            </div>   
      
            </div>
            <div className="profile-update-btn  "><NormalButton label="Update" approveBtn/></div>

        </div>
      </div>
     

    </>
  );
}

export default ProfileData;
