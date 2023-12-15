import React from "react";
import "./styles.scss";
import assets from "../../assets";

const NormalTable = ({ headerDetails, children, subscriptionTable,fontLarge ,vendor_table}) => {
  return (
    <div className="table-container">
      <table className="main-table">
        <thead
          className={`${
            subscriptionTable
              ? "subscription-table-header"
              :vendor_table? "vendor-table": "normal-table-header"
          }`}
        >
          <tr>
            {headerDetails.map((header, index) => (
              <th key={index} className={`${fontLarge ? "custom-table-header" :"th"}`}>
                {header.bank && (
                  <img
                    src={assets.Icons.hdfc}
                    alt="sort"
                    className="sort-icon"
                  />
                )}
                {header.label}
                {header.sortKey && (
                  <img
                    src={assets.Icons.sort}
                    alt="sort"
                    className="sort-icon"
                  />
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={vendor_table?"vendor-table-data":"tbody"}>{children}</tbody>
      </table>
    </div>
  );
};

export default NormalTable;
