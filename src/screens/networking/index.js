import React from "react";
import ProfileHeader from "../profileHeader";
import "./styles.scss";
import NormalButton from "../../components/NormalButton";
import assets from "../../assets";
import NormalTable from "../../components/NormalTable";
import { useNavigate } from "react-router-dom";
function Integration() {
  let navigate=useNavigate()
  const integrationHeader = [
    { label: "Integrated Account Name" },
    { label: "Account ID" },
    { label: "Last Update" },
    { label: "Status" },
  ];

  const integrationtableRows = [
    {
      integratedAccountName: "Gmail",
      AccountId: "john@gmail.com",
      lastUpdate: "11 July 2023",
      status: "Active",
    },
    {
      integratedAccountName: "Google Drive",
      AccountId: "john@gmail.com",
      lastUpdate: "11 July 2023",
      status: "Active",
    },
    {
      integratedAccountName: "Dropbox",
      AccountId: "john@gmail.com",
      lastUpdate: "11 July 2023",
      status: "Active",
    },
  ];
  function handleToDashboard(){
    navigate(`/main/dashboard/`)
  }
  return (
    <div className="networking-data-main-container">
      <ProfileHeader />
    
     
      <div className="networking-container">
        <div className="networking-data-header">
          <div className="networking-header">Networks</div>
          <div className="networking-btn">
            <NormalButton label="Add Integration" addBtn onClick={handleToDashboard} />
          </div>
        </div>
        <hr className="underline"></hr>
        <div className="networking-table-container">
          <NormalTable fontLarge headerDetails={integrationHeader}>
            {integrationtableRows.length > 0
              ? integrationtableRows.map((list) => {
                  return (
                    <>
                    
                      <tr className="networking-table-row">
                        <td className="images-align">
                            {list.integratedAccountName === "Gmail" ? (
                              <img  className="networking-image-icons"  src={assets.Icons.email} alt="zoho Logo" />
                            ) : list.integratedAccountName === "Google Drive" ? (
                              <img className="networking-image-icons" alt="google-drive" src={assets.Icons.drive} />
                            ) : list.integratedAccountName  === "Dropbox" ? (
                              <img className="networking-image-icons" alt="dropbox" src={assets.Icons.dropbox}></img>
                            ) : (
                              "test"
                            )}
                            {list.integratedAccountName }
                          </td>
                     
                        <td>{list.AccountId}</td>
                        <td>{list.lastUpdate}</td>
                        <td className="color">{list.status}</td>
                     
                        <td><img src={assets.Icons.bin} alt="bin"></img></td>
                        

                      </tr>
                    
                    </>
                  );
                })
              : "No Data"}
          </NormalTable>
        </div>
      </div>
    </div>
  );
}

export default Integration;
