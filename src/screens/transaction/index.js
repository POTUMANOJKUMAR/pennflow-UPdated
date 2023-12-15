import React, { useState } from "react";
import assets from "../../assets";
import NormalInput from "../../components/inputField";
import NormalSelect from "../../components/NormalSelect";
import NormalButton from "../../components/NormalButton";
import NormalTable from "../../components/NormalTable";
import "./styles.scss";

function Transaction() {
  const options = [
    {
      label: "All Bank Accounts",
      value: "All Bank Accounts",
    },
    {
      label: "All Bank Accounts",
      value: "All Bank Accounts",
    },
    {
      label: "All Bank Accounts",
      value: "All Bank Accounts",
    },
  ];

  const duration = [
    {
      label: "Last 3Months",
      value: "Last 3Months",
    },
    {
      label: "Last 6Months",
      value: "Last 6Months",
    },
    {
      label: "Last 9Months",
      value: "Last 9Months",
    },
  ];

  const transactiontableHeader = [
    { label: "" },
    { label: "Date", sortKey: true },
    { label: "Counter Party", sortKey: true },
    { label: "Reference No", sortKey: true },
    { label: "Category", sortKey: true },
    { label: "Total amount", sortKey: true },
    { label: "Bank" },
    { label: "Bill No." },
  ];

  const [transactiontableRows] = useState([
    {
      id: 1,
      status: "credit",
      date: "12/11/2023",
      CounterParty: "Christoph Scheuer",
      referenceNo: "#12345",
      category: "Other",
      totalAmount: "$790.80",
      bank: "Hdfc",
      billNo: "6549846589",
    },
    {
      id: 1,
      status: "debit",
      date: "12/11/2023",
      CounterParty: "Christoph Scheuer",
      referenceNo: "#12345",
      category: "Other",
      totalAmount: "$790.80",
      bank: "ICICI",
      billNo: "6549846589",
    },
    {
      id: 1,
      status: "credit",
      date: "12/11/2023",
      CounterParty: "Christoph Scheuer",
      referenceNo: "#12345",
      category: "Other",
      totalAmount: "$790.80",
      bank: "Hdfc",
      billNo: "6549846589",
    },
    {
      id: 1,
      status: "credit",
      date: "12/11/2023",
      CounterParty: "Christoph Scheuer",
      referenceNo: "#12345",
      category: "Other",
      totalAmount: "$790.80",
      bank: "ICICI",
      billNo: "6549846589",
    },
    {
      id: 1,
      status: "credit",
      date: "12/11/2023",
      CounterParty: "Christoph Scheuer",
      referenceNo: "#12345",
      category: "Other",
      totalAmount: "$790.80",
      bank: "ICICI",

      billNo: "6549846589",
    },
    {
      id: 1,
      status: "debit",
      date: "12/11/2023",
      CounterParty: "Christoph Scheuer",
      referenceNo: "#12345",
      category: "Other",
      totalAmount: "$790.80",
      bank: "Hdfc",
      billNo: "6549846589",
    },
    {
      id: 1,
      status: "debit",
      date: "12/11/2023",
      CounterParty: "Christoph Scheuer",
      referenceNo: "#12345",
      category: "Other",
      totalAmount: "$790.80",
      bank: "ICICI",
      billNo: "6549846589",
    },
  ]);

  return (
    <div className="transaction-history-main-container">
      <div className="transaction-history-header-container row col-12 ">
        <div className="transaction-history-header1-left  row col ">
          <div className="col-9">
            <NormalInput searchIcon leftIcon type="text" placeholder="Search" />
          </div>
          {/* <div className="col-1">
            <img
              className="transiction-history-search-bar"
              alt=""
              src={assets.Icons.searchbar}
            />
          </div> */}
        </div>
        <div className="transaction-history-header2-right row col  ">
          <div className="col-4">
            <NormalSelect options={options} />
          </div>
          <div className="col-4">
            <NormalSelect options={duration} />
          </div>
          <div className="col-4 transition-download-btn">
            <NormalButton label="Download" addBtn />
          </div>
        </div>
      </div>
      <div className="transaction-history-table-container">
        <NormalTable headerDetails={transactiontableHeader} check>
          {transactiontableHeader.length > 0
            ? transactiontableRows.map((list) => {
                return (
                  <>
                    <tr className="px-3 ">
                      <td>
                        {}
                        {list.status === "debit" ? (
                          <img
                            className="bank-image"
                            src={assets.Icons.red}
                            alt="debit"
                          />
                        ) : (
                          <img
                            className="bank-image"
                            alt="credit"
                            src={assets.Icons.green}
                          />
                        )}
                      </td>
                      <td>{list.date}</td>
                      <td>{list.CounterParty}</td>
                      <td>{list.referenceNo}</td>
                      <td>{list.category}</td>
                      <td>{list.totalAmount}</td>
                      <span>
                        {" "}
                        <td>
                          {list.bank === "ICICI" ? (
                            <img
                              className="bank-image"
                              src={assets.Icons.icici}
                              alt="ICICI Logo"
                            />
                          ) : list.bank === "Hdfc" ? (
                            <img
                              className="bank-image"
                              alt="hdfc"
                              src={assets.Icons.hdfc}
                            />
                          ) : (
                            ""
                          )}
                          {list.bank}
                        </td>
                      </span>

                      <td>{list.billNo}</td>
                      <td>
                        <a href="">Review</a>
                      </td>
                    </tr>
                  </>
                );
              })
            : "No Data"}
        </NormalTable>
      </div>
    </div>
  );
}

export default Transaction;
