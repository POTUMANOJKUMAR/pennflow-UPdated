import React from 'react';
import assets from "../../assets/index";
import "./styles.scss";
import pencil from '../../assets/icons/pencil.png';
import NormalTable from '../../components/NormalTable/index'

const VendorDetails = () => {

  const vendorDetailsInput = {vendorName:"ABC Vendor 1",cinNumber:"1324684985689",vatNumber:"1324684985689",vendorAddress:"123, Park Street, Lower Parel, Mumbai.",contactNumber:'85689 64869',emailAddress:"abc_vendor@gmail.com"}

  const headerDetails = [
    { label: "Issue Date" },
    { label: "Due Date" },
    { label: "Invoice Number" },
    { label: "Reason" },
    { label: "Type" },
    { label: "Status" },
    { label: "Total amount" },
  ];

  const tableValues = [
  {
    key:1,
    Issue_Date:"25/09/2023",
    Due_Date:"30/09/2023",
    Invoice_Number:12346589,
    Reason:"Reason 1",
    Type:"Invoice",
    Status:"Reviewed",
    Total_Amt:`$${780}`
  },
  {
    key:2,
    Issue_Date:"25/09/2023",
    Due_Date:"30/09/2023",
    Invoice_Number:12346589,
    Reason:"Reason 1",
    Type:"Invoice",
    Status:"Approved",
    Total_Amt:`$${780}`
  },
  {
    key:3,
    Issue_Date:"25/09/2023",
    Due_Date:"30/09/2023",
    Invoice_Number:12346589,
    Reason:"Reason 1",
    Type:"Invoice",
    Status:"New",
    Total_Amt:`$${780}`
  },
  {
    key:4,
    Issue_Date:"25/09/2023",
    Due_Date:"30/09/2023",
    Invoice_Number:12346589,
    Reason:"Reason 1",
    Type:"Invoice",
    Status:"Reviewed",
    Total_Amt:`$${780}`
  }
 ]
  

  return (
    <div className="mainContainer">
      <div className="backButton">
        <img src={assets.Icons.leftArrow} alt="leftArrow image" />
         Back to Pay List
      </div>
      <div className="vendorDetails">
      <div className="vendorDetailsContainer">
      <div className="heading">
      <p>Vendor Details</p>
      <div className="edit">
      <img src={pencil} alt="editIcon" />Edit
      </div>
      </div>
      <div className="row mb-3">
        <div className=" col col-xs-12 col-sm-12 col-md-6 col-lg-4" >
          <div className="top mb-2">Vendor Name</div>
          <div className="bottom">{vendorDetailsInput.vendorName}</div>
        </div>
        <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4">
          <div className="top mb-2">CIN Number</div>
          <div className="bottom">{vendorDetailsInput.cinNumber}</div>
        </div>
        <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4">
          <div className="top mb-2">VAT Number</div>
          <div className="bottom">{vendorDetailsInput.vatNumber}</div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4">
          <div className="top mb-2">Vendor Address</div>
          <div className="bottom">{vendorDetailsInput.vendorAddress}</div>
        </div>
        <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4">
          <div className="top mb-2">Contact Number</div>
          <div className="bottom">{vendorDetailsInput.contactNumber}</div>
        </div>
        <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4">
          <div className="top mb-2">Email Address</div>
          <div className="bottom">{vendorDetailsInput.emailAddress}</div>
        </div>
      </div>
    </div>
      </div>
      <div className="vendorInvoices">
      <div className='invoicesContainer'>
        <div className="heading">
        <p>Vendor Invoices</p>
        </div>
        <div className="invoiceTable">
           <NormalTable headerDetails={headerDetails}>
            {tableValues.map((list)=>
             <tr className='trow' key={list.key}>
                <td><div className='tRow'>{list.Issue_Date}</div></td>
                <td><div className='tRow'>{list.Due_Date}</div></td>
                <td><div className='tRow'>{list.Invoice_Number}</div></td>
                <td><div className='tRow'>{list.Reason}</div></td>
                <td><div className='tRow'>{list.Type}</div></td>
                <td><div className={`${list.Status==="Reviewed"?"yellow":list.Status==="New"?"blue":"green"}`}>{list.Status}</div></td>
                <td><div className='tRowAmt'>{list.Total_Amt}</div></td>
                <td><div><a href="#">Review</a></div></td>
            </tr>
            )}
           </NormalTable>
        </div>
       </div>
      </div>
    </div>
  )
}

export default VendorDetails