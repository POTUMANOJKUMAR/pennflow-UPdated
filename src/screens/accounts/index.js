// import React from "react";
import React, { useState } from "react";
import ProfileHeader from "../profileHeader";
import "./styles.scss";
import NormalButton from "../../components/NormalButton";
import assets from "../../assets";
import NormalTable from "../../components/NormalTable";
import Switch, { SwitchProps } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
function Accounts() {
  const accountsHeader = [
    { label: "Bank Name" },
    { label: "Identification" },
    { label: "Status" },
    { label: "Last Update" },
    { label: "1-Click Payments" },
    { label: "Balance" },
  ];

  const accountstableRows = [
    {
      bankName: "ICICI Bank",
      identification: "Bank connection",
      Balance: "$560,80.00",
      backgroundColor: "transparent",
    },
    {
      bankName: "USD",
      identification: "123456866898563",
      status: "Active",
      lastUpdate: "11 July 2023",
      ClickPayments: "Disabled",
      Balance: "$560,80.00"

    },

  ];

  const accounttableRows = [

    {
      bankName: "HDFC Bank",
      identification: "Bank connection",
      Balance: "$560,80.00",
      backgroundColor: "transparent",
    },
    {
      bankName: "USD",
      identification: "123456866898563",
      status: "Active",
      lastUpdate: "11 July 2023",
      ClickPayments: "Disabled",
      Balance: "$560,80.00"
    },
    {
      bankName: "USD",
      identification: "123456866898563",
      status: "Active",
      lastUpdate: "11 July 2023",
      ClickPayments: "Disabled",
      Balance: "$560,80.00"
    },
  ];


  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'light' ? '#177ddc' : '#1890ff',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
    },
  }));


  return (
    <div className="accounts-data-main-container">
      <ProfileHeader />
      <div className="accounts-container">
        <div className="accounts-data-header">
          <div className="accounts-header">Accounts
          </div>
          <div className="accounts-btn">
            <NormalButton label="Add Bank Account" approveBtn />
          </div>
        </div>
        <hr className="underline"></hr>
        <div className="accounts-table-container accounts-table-body">
          {/* <NormalTable headerDetails={accountsHeader}>
            {accountstableRows.length > 0
              ? accountstableRows.map((list, index) => {
                return (
                  // <tbody className="accounts-table-body">
                  <tr className={`px-3 ${list.backgroundColor === 'transparent' ? 'accounts-row' : ''} `} key={index}>
                    <td className="">
                      {list.bankName === 'ICICI Bank' ? (
                        <img className="networking-image-icons" src={assets.Icons.icici} alt="icici Logo" />
                      ) : list.bankName === 'USD' ? (
                        <img className="networking-image-icons" alt="usd logo" src={assets.Icons.usd} />
                      ) : list.bankName === 'HDFC Bank' ? (
                        <img className="networking-image-icons" alt="hdfc logo" src={assets.Icons.hdfc}></img>
                      ) : (
                        ''
                      )}
                      {list.bankName}
                    </td>

                    <td>{list.identification}</td>
                    <td className="color">{list.status}</td>

                    <td>{list.lastUpdate}</td>
                  
                    <td>
                      {list.ClickPayments ? (
                        <div className="d-flex gap-3 clickpayments">
                          <div>{list.ClickPayments}</div>
                          <div>
                            <AntSwitch />
                          </div>
                        </div>
                      ) : (
                        ''
                      )}
                    </td>

                    <td>{list.Balance}</td>

                    <td>
                      <img src={assets.Icons.bin} alt="Delete" />
                    </td>
                  </tr>
                  // </tbody>
                );
              })
              : 'No Data'}
          </NormalTable> */}

          <NormalTable headerDetails={accountsHeader}>
            {accountstableRows.length > 0
              ? accountstableRows.map((list, index) => {
                return (
                    <tr className={`px-3 ${list.backgroundColor === 'transparent' ? 'accounts-row' : ''} `} key={index}>
                      <td>
                        {list.bankName === "ICICI Bank" ? (
                          <img className="networking-image-icons" src={assets.Icons.icici} alt="icici Logo" />
                        ) : list.bankName === "USD" ? (
                          <img className="networking-image-icons" alt="usd logo" src={assets.Icons.usd} />

                        ) : (
                          ""
                        )}
                        {list.bankName}
                      </td>

                      <td>{list.identification}</td>
                      <td className="color">{list.status}</td>

                      <td>{list.lastUpdate}</td>
                      <td>
                        {list.ClickPayments ? (
                          <div className="d-flex gap-3 clickpayments">
                            <div>{list.ClickPayments}</div>
                            <div>
                              <AntSwitch />
                            </div>
                          </div>
                        ) : (
                          ''
                        )}
                      </td>
                      <td>{list.Balance}</td>
                      <td><img src={assets.Icons.bin}></img></td>
                    </tr>
                );
              })
              : "No Data"}


          </NormalTable>

        </div>

        <div className="accounts-tables-container mt-4 accounts-table-body">
          <NormalTable headerDetails={[]}>
            {accounttableRows.length > 0
              ? accounttableRows.map((list, index) => (
              
                  <tr className={`px-3 ${list.backgroundColor === 'transparent' ? 'accounts-row' : ''} `}key={index}>
                    <td>
                      {list.bankName === "HDFC Bank" ? (
                        <img className="networking-image-icons" src={assets.Icons.hdfc} alt="icici Logo" />
                      ) : list.bankName === "USD" ? (
                        <img className="networking-image-icons" alt="usd logo" src={assets.Icons.usd} />
                      ) : (
                        ""
                      )}
                      {list.bankName}
                    </td>

                    <td>{list.identification}</td>
                    <td className="color">{list.status}</td>

                    <td>{list.lastUpdate}</td>
                    <td>
                      {list.ClickPayments ? (
                        <div className="d-flex gap-3 clickpayments">
                          <div>{list.ClickPayments}</div>
                          <div>
                            <AntSwitch />
                          </div>
                        </div>
                      ) : (
                        ''
                      )}
                    </td>
                    <td>{list.Balance}</td>

                    <td><img src={assets.Icons.bin} alt="bin icon" /></td>
                  </tr>
                
              ))
              : "No Data"}
          </NormalTable>
        </div>
      </div>
    </div>
  );
}

export default Accounts;
