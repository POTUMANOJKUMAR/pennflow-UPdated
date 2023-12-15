import React from "react";
import ProfileHeader from "../profileHeader";
import "./styles.scss";
import NormalButton from "../../components/NormalButton";
import assets from "../../assets";
import NormalTable from "../../components/NormalTable";
function Integration() {
  const vendorHeader = [
    { label: "Vendor Name" },
    { label: "CIN Number" },
    { label: "VAT Number" },
    { label: "Address" },
    { label: "Contact Number" },
    { label: "Email ID" },
  ];

  const vendortableRows = [
    {
      vendorName: "Christopher Gauge",
      CINNumber: "123456898",
      VATNumber: "6797879556",
      address: "110, Park Street, Chennai",
      contactNumber: "98654 98756",
      emailID: "Chris@gmail.com",
    },
    {
      vendorName: "Christopher Gauge",
      CINNumber: "123456898",
      VATNumber: "6797879556",
      address: "110, Park Street, Chennai",
      contactNumber: "98654 98756",
      emailID: "Chris@gmail.com",
    },
    {
      vendorName: "Christopher Gauge",
      CINNumber: "123456898",
      VATNumber: "6797879556",
      address: "110, Park Street, Chennai",
      contactNumber: "98654 98756",
      emailID: "Chris@gmail.com",
    },
    {
      vendorName: "Christopher Gauge",
      CINNumber: "123456898",
      VATNumber: "6797879556",
      address: "110, Park Street, Chennai",
      contactNumber: "98654 98756",
      emailID: "Chris@gmail.com",
    },
    {
      vendorName: "Christopher Gauge",
      CINNumber: "123456898",
      VATNumber: "6797879556",
      address: "110, Park Street, Chennai",
      contactNumber: "98654 98756",
      emailID: "Chris@gmail.com",
    },
    {
      vendorName: "Christopher Gauge",
      CINNumber: "123456898",
      VATNumber: "6797879556",
      address: "110, Park Street, Chennai",
      contactNumber: "98654 98756",
      emailID: "Chris@gmail.com",
    },
    {
      vendorName: "Christopher Gauge",
      CINNumber: "123456898",
      VATNumber: "6797879556",
      address: "110, Park Street, Chennai",
      contactNumber: "98654 98756",
      emailID: "Chris@gmail.com",
    },
  ];

  return (
    <div className="vendor-data-main-container">
      <ProfileHeader />
      <div className="vendor-container">
        <div className="vendor-data-header">
          <div className="vendor-header">Vendors</div>
          <div className="vendor-btn">
            <NormalButton label="Add vendor" addBtn />
          </div>
        </div>
        <hr className="underline"></hr>
        <div className="vendor-table-container">
          <NormalTable fontLarge headerDetails={vendorHeader} vendor_table>
            {vendortableRows.length > 0
              ? vendortableRows.map((list) => {
                  return (
                    <>
                      <tr className="px-3  vendor-table-row">
                        <td> {list.vendorName} </td>

                        <td>{list.CINNumber}</td>
                        <td>{list.VATNumber}</td>
                        <td>{list.address}</td>
                        <td>{list.contactNumber}</td>
                        <td>{list.emailID}</td>
                        <td><img  className="vendor-image-icon"src={assets.Icons.editBtn} alt="editbtn"/></td>
                        <td><img  className="vendor-image-icon" src={assets.Icons.bin} alt="bin"/></td>
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
