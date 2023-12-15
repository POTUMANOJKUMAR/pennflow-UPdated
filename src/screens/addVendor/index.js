import React from 'react';
import "./styles.scss";
import assets from "../../assets/index"; 
import NormalInput from '../../components/inputField';
import NormalButton from '../../components/NormalButton';

const AddVendor = () => {
  return (
    <div className='addVendor'>
        <div className="addVendorContainer">
            <div className="addVendorHeader">
                Add Vendor
                <img src={assets.Icons.close} alt="closeIcon" />
            </div>
            <form action="">
              <div className="formInfo">
                <label htmlFor="">
                  Vendor Name
                </label>
                <NormalInput placeholder="Enter here"/>
              </div>
              <div className="formInfo">
                <label htmlFor="">
                 CIN Number
                </label>
                <NormalInput placeholder="Enter here"/>
              </div>
              <div className="formInfo">
                <label htmlFor="">
                VAT Number
                </label>
                <NormalInput placeholder="Enter here"/>
              </div>
              <div className="formInfo">
                <label htmlFor="">
                Address
                </label>
                <NormalInput placeholder="Enter here"/>
              </div>
              <div className="formInfo">
                <label htmlFor="">
                Contact Number
                </label>
                <NormalInput placeholder="Enter here"/>
              </div>
              <div className="formInfo">
                <label htmlFor="">
                Email ID
                </label>
                <NormalInput placeholder="Enter here"/>
              </div>
            </form>
            <div className="addVendorButtons">
            <NormalButton label="Cancel" cancelBtn />
            <NormalButton label="Save" showBtn />
            </div>
        </div>
    </div>
  )
}

export default AddVendor