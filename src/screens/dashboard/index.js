import React from "react";
import "./styles.scss";
import assets from "../../assets";
import "../../components/header/styles.scss";
import { useState } from "react";
import { helper } from "../../services/helper";
import NormalButton from "../../components/NormalButton";
import DashCard from "../../components/dashboardCard";
import NormalSelect from "../../components/NormalSelect";
import DatePicker from "../../components/DatePicker";
import { Bar, Doughnut } from "react-chartjs-2";

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState("All");
  const options = [
    { label: "Year", value: 1 },
    { label: "Month", value: 2 },
    { label: "Week", value: 3 },
  ];
  const textCenterDown = {
    id: 'textCenterDown',
    beforeDatasetsDraw(chart) {
      const { ctx } = chart;
      let Total = '53%'; 
  
      ctx.save();
      ctx.font = '400 16px Poppins';
      ctx.fillStyle = '#373D3F';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      let textHeight = ctx.measureText(Total).actualBoundingBoxAscent + ctx.measureText(Total).actualBoundingBoxDescent;
      ctx.fillText(Total, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y);
      ctx.restore();
    }
  }
  const menus = [
    {
      id: 1,
      title: "All",
    },
    {
      id: 1,
      title: "Payments",
    },
    {
      id: 1,
      title: "Others",
    },
  ];
  const connectAccounts = [
    {
      id: 1,
      icon: assets.Icons.icici,
      title: "USD",
      default: true,
      amount: 150500,
      rightIcon: true,
    },
    {
      id: 1,
      icon: assets.Icons.hdfc,
      title: "USD",
      amount: 60500,
      rightIcon: true,
    },
    {
      id: 1,
      title: "Total Balance",
      amount: 210500,
      total: true,
    },
  ];
  const notifications = [
    {
      id: 1,
      profile: assets.Images.notificationProfile,
      type: helper.NotificationType.payment,
      data: "John Bacardi scheduled new payment to M/s ABC Corporation on 01 April 2023",
    },
  ];
  const [cardData] = useState([
    {
      id: 1,
      icon: assets.Icons.dollar,
      title: "Payables",
      amount: 63306.15,
      totalAmount: 134693.13,

      chartData: {
        datasets: [
          {
            data: [23.5, 40.8, 17.3, 18.4],
            backgroundColor: ["#9AE2A9", "#FFE188", "#DDCDF7", "#6796AB"],
            borderColor: ["#9AE2A9", "#FFE188", "#DDCDF7", "#6796AB"],
            borderWidth: 1,
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
      },
    },
    {
      id: 1,
      icon: assets.Icons.dollar,
      title: "Receivables",
      amount: 23306.15,
      totalAmount: 50665.54,
    },
  ]);

  const [pieChartData] = useState([
    {
      id: 1,
      chartData: {
        // labels: ["EU", "AUS", "IND", "US"],
        datasets: [
          {
            data: [23.5, 40.8, 17.3, 18.4],
            backgroundColor: ["#E36668", "#BA619A", "#153BA2", "#F3D573"],
            borderColor: ["#E36668", "#BA619A", "#153BA2", "#F3D573"],
            borderWidth: 1,
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
        
        cutout: 60,
      },
    },
    {
      id: 1,
      chartData: {
        // labels: ["EU", "AUS", "IND", "US"],
        datasets: [
          {
            data: [23.5, 40.8, 17.3, 18.4],
            backgroundColor: ["#E36668", "#BA619A", "#153BA2", "#F3D573"],
            borderColor: ["#E36668", "#BA619A", "#153BA2", "#F3D573"],
            borderWidth: 1,
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
        cutout: 60,
      },
    },
    {
      id: 1,
      chartData: {
        // labels: ["EU", "AUS", "IND", "US"],
        datasets: [
          {
            data: [23.5, 40.8, 17.3, 18.4],
            backgroundColor: ["#E36668", "#BA619A", "#153BA2", "#F3D573"],
            borderColor: ["#E36668", "#BA619A", "#153BA2", "#F3D573"],
            borderWidth: 1,
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
        cutout: 60,
      },
    },
    {
      id: 1,
      chartData: {
        // labels: ["EU", "AUS", "IND", "US"],
        datasets: [
          {
            data: [23.5, 40.8, 17.3, 18.4],
            backgroundColor: ["#E36668", "#BA619A", "#153BA2", "#F3D573"],
            borderColor: ["#E36668", "#BA619A", "#153BA2", "#F3D573"],
            borderWidth: 1,
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
        cutout: 60,
      },
    },
  ]);

  const formattedAmount = (amount, isTotal) => {
    return isTotal
      ? new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 2,
        }).format(amount)
      : new Intl.NumberFormat("en-US", {
          minimumFractionDigits: 2,
        }).format(amount);
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="dashboard-main-container">
      <div className="dashboard-left-container">
        <div className="dashboard-date-container">
          <div className="dashboard-from-date-container ">
            <DatePicker
              calendarStyle={true}
              placeHolder={true}
              isWeekdays={true}
              format={"dd-MM-yyyy"}
              placeholderText=" From Date"
              rightIcon
              calendarIcon
            />
          </div>
          <div className="dashboard-from-date-container">
            <DatePicker
              calendarStyle={true}
              placeHolder={true}
              isWeekdays={true}
              format={"dd-MM-yyyy"}
              placeholderText=" To Date"
              rightIcon
              calendarIcon
            />
          </div>
          <div className="dashboard-select-container">
            <NormalSelect name="year" options={options} />
          </div>
        </div>
        <div className="d-flex ">
          {cardData.map((data) => (
            <div className="col-md-6 pe-2">
              <DashCard
                icon={data.icon}
                title={data.title}
                amount={data.amount}
                totalAmount={data.totalAmount}
                data={data.chartData}
                options={data.chartOptions}
               plugins={[textCenterDown]}
              />
            </div>
          ))}
        </div>
        <div className="main-chart-container">
          <p className="cash-flow">Cash Flow</p>
          <div className="dashboard-bar-chart-icons">
                <div className="option-lable">
                  <img
                    src={assets.Icons.voilet}
                    alt="optionIcon"
                    className="option-icon"
                  />{" "}
                  $150,500.00
                </div>

                <div className="option-lable">
                  <img
                    src={assets.Icons.aqua}
                    alt="optionIcon"
                    className="option-icon"
                  />{" "}
                  $188,000.00
                </div>
                <div className="option-lable">
                  <img
                    src={assets.Icons.lightpink}
                    alt="optionIcon"
                    className="option-icon"
                  />{" "}
                  $143,306.15
                </div>
              </div>
          <div className="mixed-chart-container">
            <Bar
              data={{
                labels: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ],
                datasets: [
                  {
                    label: "Profit",
                    data: [
                      180000, 190000, 220000, 240000, 220000, 220000, 230000,
                      220000, 230000, 220000, 210000, 230000,
                    ],
                    backgroundColor: "#4FF5C3",
                    order: 2,
                  },
                  {
                    label: "Loss",
                    data: [
                      140000, 120000, 130000, 140000, 120000, 150000, 140000,
                      120000, 110000, 130000, 140000, 120000,
                    ],
                    backgroundColor: "#FF9CA9", // Red color for Loss
                    order: 2,
                  },
                  {
                    type: "line",
                    label: "Net",
                    data: [
                      160000, 165000, 170000, 175000, 175000, 170000, 165000,
                      160000, 160000, 155000, 160000, 160000,
                    ],
                    borderColor: "#7E57FF", // Purple color for the line
                    fill: true,
                    yAxisID: "y",
                    order: 1,
                    pointRadius: 0, // Set pointRadius to 0 to hide dots in the line chart
                  },
                ],
              }}
              options={{
                maintainAspectRatio: false, // Set to false to control aspect ratio
                aspectRatio: 6,
                scales: {
                  x: {
                    beginAtZero: false,
                    grid: {
                      display: false,
                    },
                    ticks: {
                      color: "#351c75",
                    },
                    axis: {
                      display: false,
                    },
                  },
                  y: {
                    beginAtZero: false,
                    grid: {
                      display: true,
                    },
                    border: {
                      display: false,
                    },
                    ticks: {
                      stepSize: 50000,
                      color: "#351c75",
                      callback: function (value, index, values) {
                        return value.toLocaleString();
                      },
                    },
                  },
                },
                plugins: {
                  legend: {
                    display: false,
                  },
                },
              }}
            />
          </div>
        </div>
        <div className="pie-chart-container">
          <div className="d-flex justify-content-between">
            <p className="cash-flow">Expenses</p>
            <NormalSelect name="year" options={options} chartSelect />
          </div>
          <div className="pie-chart">
            {pieChartData.map((list) => (
              <div className="pie-chart-data1">
                <Doughnut
                  data={list.chartData}
                  options={list.chartOptions}
                
                  width="116px"
                  // className="me-5"
                  height="116px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="dashboard-right-container">
        <div className="over-due-main-container">
          <div className="over-due-container">
            <img
              src={assets.Icons.overDuePay}
              alt="overDuePay"
              className="overdue-icon"
            />
            <div className="overdue-text-container">
              <p className="overdue-text">Overdue Payables</p>
            </div>
            <p className="overdue-data">7</p>
            <img
              src={assets.Icons.rightArrow}
              alt="rightIcon"
              className="right-icon"
            />
          </div>
          <div className="over-due-container">
            <img
              src={assets.Icons.overDueReceive}
              alt="overDuePay"
              className="overdue-icon"
            />
            <div className="overdue-text-container">
              <p className="overdue-text">Overdue Receivables</p>
            </div>
            <p className="overdue-data">6</p>
            <img
              src={assets.Icons.rightArrow}
              alt="rightIcon"
              className="right-icon"
            />
          </div>
        </div>
        <div className="banks-main-container">
          <p className="banks-text">Banks</p>
          {connectAccounts.map((list) => (
            <div className="banks-container">
              {list.icon && (
                <div className="connected-icon-container">
                  <img
                    src={list.icon}
                    alt="connected-accounts-icon"
                    className="connected-account-icon"
                  />
                </div>
              )}
              <div
                className={`${
                  list.total ? "total-container" : "bank-title-container"
                }`}
              >
                <p className={`${list.total ? "total-title" : "bank-title"}`}>
                  {list.title}
                </p>
                {list.default && <span className="bank-default">Default</span>}
              </div>
              <p className="bank-amount">
                {" "}
                {formattedAmount(list.amount, list.total)}
              </p>
              {list.rightIcon && (
                <img
                  src={assets.Icons.rightArrow}
                  alt="rightIcon"
                  className="bank-right-icon"
                />
              )}
            </div>
          ))}
        </div>
        <div className="notification-main-container">
          <p className="banks-text">Notifications</p>
          <div className="menu-container">
            {menus.map(({ title }) => (
              <div
                className={`menu-item ${activeMenu === title ? "active" : ""}`}
                onClick={() => handleMenuClick(title)}
              >
                {title}
              </div>
            ))}
          </div>

          {notifications.map((list) => (
            <div className="notification-custom-container">
              <div className="notification-content">
                {list.profile ? (
                  <img
                    src={list.profile}
                    alt="notification-profile"
                    className="notification-profile"
                  />
                ) : (
                  <div className="notification-profile-generator"></div>
                )}
                <div className="ms-1">
                  <p className="notification-text">{list.data}</p>
                  {list.type === helper.NotificationType.payment ? (
                    <div className="d-flex">
                      <div className="btn-container">
                        <NormalButton approveBtn label="Approve" />
                      </div>
                      <div className="btn-container">
                        <NormalButton notifyBtn label="Deny" />
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
