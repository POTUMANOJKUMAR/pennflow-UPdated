import React from 'react';
import "./styles.scss";
import assets from "../../assets/index"; 
import NormalInput from '../../components/inputField';
import NormalButton from '../../components/NormalButton';
import NormalSelect from '../../components/NormalSelect';
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

const AddVendor = () => {

  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 15,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(12px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,.35)"
          : "rgba(0,0,0,.25)",
      boxSizing: "border-box",
    },
  }));

    const paymentDateOptions = [
        { value: "", label: "Select bank account" },
        { value: "1", label: "Select bank account" },
        { value: "2", label: "Select bank account" },
      ];

  return (
    <div className='addVendor'>
        <div className="addVendorContainer">
            <div className="addVendorHeader">
                Add Bank Account
                <img src={assets.Icons.close} alt="closeIcon" />
            </div>
            <form action="">
              <div className="formInfo">
                <label htmlFor="">
                  Bank Name
                </label>
                <NormalSelect options={paymentDateOptions} />
              </div>
              <div className="formInfo">
                <label htmlFor="">
                Account Number
                </label>
                <NormalInput placeholder="Enter here"/>
              </div>
              <div className="formInfo">
                <label htmlFor="">
                Account Holder Number
                </label>
                <NormalInput placeholder="Enter here"/>
              </div>
              <div className="formInfo">
                <label htmlFor="">
                Bank IFSC Code
                </label>
                <NormalInput placeholder="Enter here"/>
              </div>
              <div className="formInfo">
                <label htmlFor="">
                Select Currency
                </label>
                <NormalSelect options={paymentDateOptions} />
              </div>
              <div className="toggswitch">
              <label htmlFor="">1 - Click Payments</label>
             <AntSwitch/>
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