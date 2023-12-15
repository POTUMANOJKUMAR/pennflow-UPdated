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
    { label: "Integrated Accounts" },
    { label: "Account ID" },
    { label: "Last Update" },
    { label: "Status" },
  ];

  const integrationtableRows = [
    {
      integratedAccounts: "ZOHO",
      AccountId: "john@gmail.com",
      lastUpdate: "11 July 2023",
      status: "Active",
    },
    {
      integratedAccounts: "stripe",
      AccountId: "john@gmail.com",
      lastUpdate: "11 July 2023",
      status: "Active",
    },
    {
      integratedAccounts: "saas",
      AccountId: "john@gmail.com",
      lastUpdate: "11 July 2023",
      status: "Active",
    },
  ];
  function handleToDashboard(){
    navigate(`/main/dashboard/`)
  }

  return (
    <div className="integration-data-main-container">
      <ProfileHeader  />
      <div className="integration-container">
        <div className="integration-data-header">
          <div className="integration-header">Integrations</div>
          <div className="integration-btn">
            <NormalButton label="Add Integration" addBtn  onClick={handleToDashboard}/>
          </div>
        </div>
        <hr className="underline"></hr>
        <div  className="integration-table-container">
          <NormalTable fontLarge headerDetails={integrationHeader}>
      
            {integrationtableRows.length > 0
              ? integrationtableRows.map((list) => {
            
                  return (
                    <>
                                  <tr className="integration-table-row">
                        <td className="integration-table-image-gap"
                        
                        >
                            {list.integratedAccounts === "ZOHO" ? (
                              <img src={assets.Icons.zoho} alt="zoho Logo" />
                            ) : list.integratedAccounts === "stripe" ? (
                              <img src={assets.Icons.stripe} alt="zoho stripe" />
                            ) : list.integratedAccounts === "saas" ? (
                              <img src={assets.Icons.saas} alt="saas"></img>
                            ) : (
                              ""
                            )}
                            {list.integratedAccounts}
                          </td>
                     
                        <td>{list.AccountId}</td>
                        <td>{list.lastUpdate}</td>
                        <td className="color">{list.status}</td>
                     
                        <td><img src={assets.Icons.bin}></img></td>
                        

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
