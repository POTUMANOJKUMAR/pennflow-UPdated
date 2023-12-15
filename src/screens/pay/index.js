import React, { useState } from "react";
import "./styles.scss";
import assets from "../../assets";
import NormalButton from "../../components/NormalButton";
import NormalTable from "../../components/NormalTable";
import NormalInput from "../../components/inputField";
import NormalSelect from "../../components/NormalSelect";
import { useNavigate } from "react-router";
const Pay = () => {
  let navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState("Unpaid");
  const headerDetails = [
    { label: "" },
    { label: "Issue Date", sortKey: true },
    { label: "Due Date", sortKey: true },
    { label: "Vendor", sortKey: true },
    { label: "Invoice Number", sortKey: true },
    { label: "Reason" },
    { label: "Type" },
    { label: "Status" },
    { label: "Total amount", sortKey: true },
    { label: "" },
  ];
  const menus = [
    {
      id: 1,
      title: "Unpaid",
    },
    {
      id: 1,
      title: "Scheduled",
    },
    {
      id: 1,
      title: "Paid",
    },
  ];
  const [payData] = useState([
    {
      id: 1,
      issueDate: "25/09/2023",
      dueDate: "30/09/2023",
      vendor: "Christoph Scheuer",
      invoiceNo: 123456789,
      reason: "Reason 1",
      type: "Invoice",
      status: "Reviewed",
      totalAmount: 790.8,
    },
    {
      id: 2,
      issueDate: "25/09/2023",
      dueDate: "30/09/2023",
      vendor: "Christoph Scheuer",
      invoiceNo: 123456789,
      reason: "Reason 1",
      type: "Invoice",
      status: "Approved",
      totalAmount: 790.8,
    },
    {
      id: 3,
      issueDate: "25/09/2023",
      dueDate: "30/09/2023",
      vendor: "Christoph Scheuer",
      invoiceNo: 123456789,
      reason: "Reason 1",
      type: "Invoice",
      status: "Reviewed",
      totalAmount: 790.8,
    },
    {
      id: 4,
      issueDate: "25/09/2023",
      dueDate: "30/09/2023",
      vendor: "Christoph Scheuer",
      invoiceNo: 123456789,
      reason: "Reason 1",
      type: "Invoice",
      status: "New",
      totalAmount: 790.8,
    },
    {
      id: 5,
      issueDate: "25/09/2023",
      dueDate: "30/09/2023",
      vendor: "Christoph Scheuer",
      invoiceNo: 123456789,
      reason: "Reason 1",
      type: "Invoice",
      status: "Reviewed",
      totalAmount: 790.8,
    },
    {
      id: 6,
      issueDate: "25/09/2023",
      dueDate: "30/09/2023",
      vendor: "Christoph Scheuer",
      invoiceNo: 123456789,
      reason: "Reason 1",
      type: "Invoice",
      status: "New",
      totalAmount: 790.8,
    },
    {
      id: 7,
      issueDate: "25/09/2023",
      dueDate: "30/09/2023",
      vendor: "Christoph Scheuer",
      invoiceNo: 123456789,
      reason: "Reason 1",
      type: "Invoice",
      status: "Approved",
      totalAmount: 790.8,
    },
    {
      id: 8,
      issueDate: "25/09/2023",
      dueDate: "30/09/2023",
      vendor: "Christoph Scheuer",
      invoiceNo: 123456789,
      reason: "Reason 1",
      type: "Invoice",
      status: "Reviewed",
      totalAmount: 790.8,
    },
    {
      id: 9,
      issueDate: "25/09/2023",
      dueDate: "30/09/2023",
      vendor: "Christoph Scheuer",
      invoiceNo: 123456789,
      reason: "Reason 1",
      type: "Invoice",
      status: "Reviewed",
      totalAmount: 790.8,
    },
    {
      id: 10,
      issueDate: "25/09/2023",
      dueDate: "30/09/2023",
      vendor: "Christoph Scheuer",
      invoiceNo: 123456789,
      reason: "Reason 1",
      type: "Invoice",
      status: "Reviewed",
      totalAmount: 790.8,
    },
  ]);
  const [pieChartData] = useState([
    {
      id: 1,
      percentage: "30%",
      name: "Month Over Growth",
      chartData: {
        // labels: ["EU", "AUS", "IND", "US"],
        datasets: [
          {
            data: [30, 70],
            backgroundColor: ["#7E57FF", "#F2F2F2D9"],
            borderRadius: [15, 0],
          },
        ],
      },

      chartOptions: {
        plugins: {
          legend: {
            display: true,
            position: "outside",
          },
          labels: {
            position: "outside",
            textStrokeColor: "transparent",
            color: "rgba(0, 0, 0, 0)",
          },
        },
        cutout: 13,
      },
    },
    {
      id: 1,
      name: "Profit",
      percentage: "25%",
      chartData: {
        labels: ["EU", "AUS", "IND", "US"],
        datasets: [
          {
            data: [25, 75],
            backgroundColor: ["#FF796E", "#F2F2F2D9"],
            borderRadius: [15, 0],
          },
        ],
      },

      chartOptions: {
        plugins: {
          legend: {
            display: true,
            position: "outside",
          },
          labels: {
            position: "outside",
            textStrokeColor: "transparent",
            color: "rgba(0, 0, 0, 0)",
          },
        },
        cutout: 13,
      },
    },
    {
      id: 1,
      name: "Loss",
      percentage: "15%",
      chartData: {
        // labels: ["EU", "AUS", "IND", "US"],
        datasets: [
          {
            data: [15, 85],
            backgroundColor: ["#FF796E", "#F2F2F2D9"],
            borderRadius: [15, 0],
          },
        ],
      },

      chartOptions: {
        plugins: {
          legend: {
            display: true,
            position: "outside",
          },
          labels: {
            position: "outside",
            textStrokeColor: "transparent",
            color: "rgba(0, 0, 0, 0)",
          },
        },
        cutout: 13,
      },
    },
  ]);
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const readyToPayHeaderDetails = [
    { label: "Invoice Number" },
    { label: "Due Date" },
    { label: "Amount" },
  ];
  const [readyToPayTableValues, setReadyToPayTableValues] = useState([]);

  const paymentDateOptions = [
    { value: "", label: "Select bank account" },
    { value: "1", label: "Select bank account" },
    { value: "2", label: "Select bank account" },
  ];
  
  // const readyToPayTotalAmt = 1628;

  let readyToPayTotalAmt = readyToPayTableValues.reduce((acc, cur) => {
    return Math.round((acc + cur.totalAmount)*100)/100 ;
  }, 0);

  const shortReadyToPayTableValues = readyToPayTableValues.slice(0,4);
  // console.log(shortReadyToPayTableValues);

  const [readMore, setReadMore] = useState(false);

  const toggleReadMore = () => {
    setReadMore((prev) => !prev);
  };
  return (
    <div className="pay-main-container">
      <div className="pay-left-container">
        <div className="pay-menu-main-container">
          <div className="pay-menu-container">
            {menus.map(({ title }) => (
              <div
                className={`pay-menu-item ${
                  activeMenu === title ? "pay-active" : ""
                }`}
                onClick={() => handleMenuClick(title)}
              >
                {title}
              </div>
            ))}
          </div>
          <div className="pay-filter">
            <img
              src={assets.Icons.filter}
              alt="filter"
              className="filter-icon"
            />
          </div>
          <div className="add-invoice-container">
            <NormalButton
              label="+ Add Invoice"
              addBtn
              onClick={() => navigate("/main/create-invoice")}
            />
          </div>
        </div>
        <div className="mt-4">
          <NormalTable headerDetails={headerDetails}>
            {payData.length > 0
              ? payData.map((list) => {
                  return (
                    <>
                      <tr className="px-3">
                      <td>
                          <NormalInput
                            type={"checkbox"}
                            checkboxInput
                            onChange={(e) => {
                              e.target.checked
                                ? setReadyToPayTableValues([
                                    ...readyToPayTableValues,
                                    {
                                      key: list.id,
                                      dueDate: list.dueDate,
                                      invoiceNo: list.invoiceNo,
                                      totalAmount: list.totalAmount,
                                    },
                                  ])
                                : setReadyToPayTableValues(
                                    readyToPayTableValues.filter(
                                      (selectedId) =>
                                        selectedId.key !== list.id
                                    )
                                  );
                            }}
                          />
                        </td>
                        <td>{list.issueDate}</td>
                        <td>{list.dueDate}</td>
                        <td><div className="blue-color">{list.vendor}</div></td>
                        <td>{list.invoiceNo}</td>
                        <td>{list.reason}</td>
                        <td>{list.type}</td>
                        <td><div
                            className={`${
                              list.status === "Reviewed"
                                ? "yellow"
                                : list.status === "New"
                                ? "blue-color"
                                : "green"
                            }`}
                          >
                            {list.status}
                          </div></td>
                          <td><div className="tRowAmt">{`$${list.totalAmount}`}</div></td>
                        <td><a href="#">Review</a></td>
                      </tr>
                    </>
                  );
                })
              : "No Data"}
          </NormalTable>
        </div>
      </div>
      <div className="pay-right-container">
        <div className="payRightContainerHeader">
          <div>Ready to Pay</div>
          <div className="readyToPayInvoices">{`${readyToPayTableValues.length} Invoices`}</div>
        </div>
        <div className="readyToPayTable">
          {/* {readMore?<NormalTable headerDetails={readyToPayHeaderDetails}>
            {readyToPayTableValues.length > 0
              ? readyToPayTableValues.map((item) => (
                  <tr key={item.key}>
                    <td>{item.invoiceNo}</td>
                    <td>{item.dueDate}</td>
                    <td>{`$${item.totalAmount}`}</td>
                  </tr>
                ))
              : "nodata"}
          </NormalTable>:
          <NormalTable headerDetails={readyToPayHeaderDetails}>
            {readyToPayTableValues.length > 0
              ? shortReadyToPayTableValues.map((item) => (
                  <tr key={item.key}>
                    <td>{item.invoiceNo}</td>
                    <td>{item.dueDate}</td>
                    <td>{`$${item.totalAmount}`}</td>
                  </tr>
                ))
              : "nodata"}
          </NormalTable>} */}
          {readyToPayTableValues.length>0 ? <NormalTable headerDetails={readyToPayHeaderDetails}>
            {readMore ? readyToPayTableValues.map((item) => (
                  <tr key={item.key}>
                    <td>{item.invoiceNo}</td>
                    <td>{item.dueDate}</td>
                    <td>{`$${item.totalAmount}`}</td>
                  </tr>
                )) : shortReadyToPayTableValues.map((item) => (
                  <tr key={item.key}>
                    <td>{item.invoiceNo}</td>
                    <td>{item.dueDate}</td>
                    <td>{`$${item.totalAmount}`}</td>
                  </tr>
                ))}
          </NormalTable>: ""} 
          {
            readyToPayTableValues.length < 5 ?<button style={{display:"none"}}></button> :<button onClick={toggleReadMore}>
            {readMore?'View Less ':'View All '} <img src={readMore?assets.Icons.upArrow:assets.Icons.downArrow} alt="downArrow" />
          </button>
          }
         
        </div>
        <div className="paymentDateContainer">
          <p>Payment Date</p>
          <div className="paymentDateCheckBoxes">
            <NormalInput type="checkbox" checkboxInput />
            <label htmlFor="">Pay all selected invoices now</label>
          </div>
          <div className="paymentDateCheckBoxes">
            <NormalInput type="checkbox" checkboxInput />
            <label htmlFor="">Schedule payments</label>
          </div>
          <div className="paymentDateSelectBox">
            <NormalSelect options={paymentDateOptions} />
          </div>
        </div>
        <div className="readyToPayFooter">
          <div className="readyToPayTotalAmt">
            Total amount (incl. TAX)
            <p>{`$${readyToPayTotalAmt}`}</p>
          </div>
          <div className="readyToPayButton">
            <NormalButton addBtn label="Pay" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;