import React from "react";
import NormalModal from "../../components/NormalModal";
import { useState } from "react";
import "./styles.scss";
import assets from "../../assets";
import { Bar, Doughnut } from "react-chartjs-2";
import NormalInput from "../../components/inputField";
import NormalButton from "../../components/NormalButton";
import NormalSelect from "../../components/NormalSelect";
import DatePicker from "../../components/DatePicker";
import { useNavigate } from "react-router-dom";

function Forecast() {
  let navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [showCreateScenario, setShowCreateScenario] = useState(false);
  const options = [
    { label: "Revenue" },

    { label: "Revenue" },

    { label: "Revenue" },

    { label: "Revenue" },
  ];

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
        // labels: ["EU", "AUS", "IND", "US"],

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

  function handle() {
    setShow(!show);
  }
  const [activeMenu, setActiveMenu] = useState("Charts");
  const travelOptions = [
    { label: "Travel", value: 1 },
    { label: "Month", value: 2 },
    { label: "Week", value: 3 },
  ];
  const menus = [
    {
      id: 1,
      title: "Charts",
      link: "/main/forecast",
    },
    {
      id: 1,
      title: "Profit & Loss",
      link: "/main/profit-loss",
    },
  ];

  const handleMenuClick = (menu, link) => {
    setActiveMenu(menu);
    navigate(link);
  };
  function handleCreateScenario() {
    setShowCreateScenario(!showCreateScenario);
  }
  return (
    <>
      <div>
        <div className="forecast">
          <div className="forecast-title-container d-flex">
            {menus.map(({ title, link }) => (
              <div
                className={`forecast-menu-item ${
                  activeMenu === title ? "forecast-active" : ""
                }`}
                onClick={() => handleMenuClick(title, link)}
              >
                {title}
              </div>
            ))}

            <div className="forecast-from-date-container ">
              <DatePicker
                calendarStyle={true}
                placeHolder={true}
                isWeekdays={true}
                format={"dd-MM-yyyy"}
                placeholderText=" From Date"
                rightIcon
                calendarIcon
                // className="date-picker-container"
              />
            </div>

            <div className="forecast-end-date-container ">
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

            <div className="forecast-select-container ">
              <NormalSelect name="year" options={options} />
            </div>

            <div className="exports-lable">
              {" "}
              <NormalButton label={"Export"} exports />
            </div>
            <div className="scenarios-lable">
              {" "}
              <NormalButton
                label={"Create Scenarios"}
                scenarios
                onClick={() => setShowCreateScenario(true)}
              />
            </div>
          </div>

          <div className="container-fluid mt-4">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="card dynamic-chart">
                  <div className="card-body dynamic-chart-container">
                    <div className="d-flex justify-content-between mt-2">
                      <p className="card-title dynamic-expenses">
                        Dynamic Flow
                      </p>
                      <NormalSelect
                        name="Travel"
                        options={options}
                        chartSelect
                      />
                    </div>
                    <div className="dynamic-expenses-chart-container mt-3">
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
                              type: "line",
                              label: "Net",
                              data: [
                                150000, 155000, 160000, 157000, 153000, 170000,
                                175000, 180000, 185000, 155000, 160000, 160000,
                              ],
                              borderColor: "#7E57FF",
                              fill: true,
                              yAxisID: "y",
                              order: 1,
                              pointRadius: 4,
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
                                stepSize: 10000,
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
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="card cash-forecast-chart-container">
                  <div className="card-body">
                    <div className="d-flex justify-content-between gap-2 mt-1">
                      <p className="card-title dynamic-expenses">
                        Cash Flow Forecast
                      </p>
                      <NormalSelect
                        name="Travel"
                        options={options}
                        chartSelect
                      />
                      <NormalButton
                        label={"View Detail"}
                        notifyBtn
                        onClick={() => setShow(true)}
                      />
                    </div>
                    <div className="bar-options d-flex gap-5 ">
                      <div className="option-lables">
                        <img
                          src={assets.Icons.rentIcon}
                          alt="optionIcon"
                          className="option-icons"
                        />{" "}
                        Net Cash flow
                      </div>
                      <div className="option-lables">
                        <img
                          src={assets.Icons.foodIcon}
                          alt="optionIcon"
                          className="option-icons"
                        />{" "}
                        Cash In
                      </div>

                      <div className="option-lables">
                        <img
                          src={assets.Icons.travelIcon}
                          alt="optionIcon"
                          className="option-icon"
                        />{" "}
                        Expenses
                      </div>
                    </div>
                    <div className="dynamic-expenses-chart-container mt-4">
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
                              type: "line",
                              label: "Net",
                              data: [
                                230000, 235000, 240000, 245000, 235000, 230000,
                                225000, 225000, 230000, 235000, 240000, 245000,
                              ],
                              borderColor: "#7E57FF", // Purple color for the line
                              fill: true,
                              yAxisID: "y",
                              order: 1,
                              pointRadius: 4, // Set pointRadius to 0 to hide dots in the line chart
                            },
                            {
                              type: "line",
                              label: "Net2",
                              data: [
                                180000, 185000, 190000, 195000, 180000, 175000,
                                170000, 165000, 160000, 165000, 170000, 180000,
                              ],
                              borderColor: "#EDC809 ",
                              fill: true,
                              yAxisID: "y",
                              order: 1,
                              pointRadius: 4, // Set pointRadius to 0 to hide dots in the line chart
                            },
                            {
                              type: "line",
                              label: "Net3",
                              data: [
                                100000, 115000, 120000, 125000, 100000, 120000,
                                125000, 130000, 135000, 125000, 120000, 100000,
                              ],
                              borderColor: " #FF796E ",
                              fill: true,
                              yAxisID: "y",
                              order: 1,
                              pointRadius: 4, // Set pointRadius to 0 to hide dots in the line chart
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
                                stepSize: 10000,
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
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="card cash-forecast-chart-container">
                  <div className="card-body">
                    <div className="mt-2">
                      <p className="card-title dynamic-expenses">Scenarios</p>
                    </div>
                    <div className="bar-options d-flex gap-5 ">
                      <div className="option-lables">
                        <img
                          src={assets.Icons.rentIcon}
                          alt="optionIcon"
                          className="option-icons"
                        />{" "}
                        Main Scenario
                      </div>
                      <div className="option-lables">
                        <img
                          src={assets.Icons.foodIcon}
                          alt="optionIcon"
                          className="option-icons"
                        />{" "}
                        Reception of Funding
                      </div>

                      <div className="option-lables">
                        <img
                          src={assets.Icons.travelIcon}
                          alt="optionIcon"
                          className="option-icon"
                        />{" "}
                        Late Payments
                      </div>
                    </div>
                    <div className="dynamic-expenses-chart-container mt-4">
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
                                180000, 190000, 220000, 240000, 220000, 220000,
                                230000, 220000, 230000, 220000, 210000, 230000,
                              ],
                              backgroundColor: "#4FF5C3",
                              order: 2,
                            },
                            {
                              label: "Loss",
                              data: [
                                140000, 120000, 130000, 140000, 120000, 150000,
                                140000, 120000, 110000, 130000, 140000, 120000,
                              ],
                              backgroundColor: "#FF9CA9", // Red color for Loss
                              order: 2,
                            },
                            {
                              type: "line",
                              label: "Net",
                              data: [
                                230000, 235000, 240000, 245000, 235000, 230000,
                                225000, 225000, 230000, 235000, 240000, 245000,
                              ],
                              borderColor: "#7E57FF", // Purple color for the line
                              fill: true,
                              yAxisID: "y",
                              order: 1,
                              pointRadius: 4, // Set pointRadius to 0 to hide dots in the line chart
                            },
                            {
                              type: "line",
                              label: "Net2",
                              data: [
                                180000, 185000, 190000, 195000, 180000, 175000,
                                170000, 165000, 160000, 165000, 170000, 180000,
                              ],
                              borderColor: "#EDC809 ",
                              fill: true,
                              yAxisID: "y",
                              order: 1,
                              pointRadius: 4, // Set pointRadius to 0 to hide dots in the line chart
                            },
                            {
                              type: "line",
                              label: "Net3",
                              data: [
                                100000, 115000, 120000, 125000, 100000, 120000,
                                125000, 130000, 135000, 125000, 120000, 100000,
                              ],
                              borderColor: " #FF796E ",
                              fill: true,
                              yAxisID: "y",
                              order: 1,
                              pointRadius: 4, // Set pointRadius to 0 to hide dots in the line chart
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
                                stepSize: 10000,
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
                </div>
              </div>

              <div className="col-md-6">
                <div className="card cash-forecast-chart-container">
                  <div className="card-body">
                    <div className=" mt-3">
                      <p className="card-title dynamic-expenses">
                        Cash Flow Position
                      </p>
                    </div>
                    <div className="bar-options d-flex gap-5">
                      <div className="option-lables">
                        <img
                          src={assets.Icons.rentIcon}
                          alt="optionIcon"
                          className="option-icons"
                        />{" "}
                        Main Scenario
                      </div>
                      <div className="option-lables">
                        <img
                          src={assets.Icons.foodIcon}
                          alt="optionIcon"
                          className="option-icons"
                        />{" "}
                        Hiring New Staff Member
                      </div>

                      <div className="option-lables">
                        <img
                          src={assets.Icons.travelIcon}
                          alt="optionIcon"
                          className="option-icon"
                        />{" "}
                        Investments
                      </div>
                    </div>
                    <div className="dynamic-expenses-chart-container mt-4">
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
                                180000, 190000, 220000, 240000, 220000, 220000,
                                230000, 220000, 230000, 220000, 210000, 230000,
                              ],
                              backgroundColor: "#ADADAD ",
                              order: 2,
                            },
                            {
                              label: "Loss",
                              data: [
                                140000, 120000, 130000, 140000, 120000, 150000,
                                140000, 120000, 110000, 130000, 140000, 120000,
                              ],
                              backgroundColor: "#ADADAD", // Red color for Loss
                              order: 2,
                            },
                            {
                              type: "line",
                              label: "Net",
                              data: [
                                230000, 235000, 240000, 245000, 235000, 230000,
                                225000, 225000, 230000, 235000, 240000, 245000,
                              ],
                              borderColor: "#7E57FF", // Purple color for the line
                              fill: true,
                              yAxisID: "y",
                              order: 1,
                              pointRadius: 4, // Set pointRadius to 0 to hide dots in the line chart
                            },
                            {
                              type: "line",
                              label: "Net2",
                              data: [
                                180000, 185000, 190000, 195000, 180000, 175000,
                                170000, 165000, 160000, 165000, 170000, 180000,
                              ],
                              borderColor: "#EDC809 ",
                              fill: true,
                              yAxisID: "y",
                              order: 1,
                              pointRadius: 4, // Set pointRadius to 0 to hide dots in the line chart
                            },
                            {
                              type: "line",
                              label: "Net3",
                              data: [
                                100000, 115000, 120000, 125000, 100000, 120000,
                                125000, 130000, 135000, 125000, 120000, 100000,
                              ],
                              borderColor: " #FF796E ",
                              fill: true,
                              yAxisID: "y",
                              order: 1,
                              pointRadius: 4, // Set pointRadius to 0 to hide dots in the line chart
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
                                stepSize: 10000,
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NormalModal show={show}>
        <div className="forecast-pie-chart-container">
          <div className="forecast-popup-header-container">
            <p>Cash Flow Forecast Details</p>
            <img
              src={assets.Icons.close_btn}
              alt="close-btn"
              onClick={() => setShow(!show)}
            />
          </div>

          <hr></hr>
          <div className="forecast-main-chart-container">
            {pieChartData.map((list) => (
              <div className="forcast-chart-container" key={list.id}>
                <div>
                  <p className="chart-name">{list.name}</p>
                </div>

                <div className="pie-chart-and-percentage">
                  <div className="pie-chart-data">
                    <Doughnut
                      data={list.chartData}
                      options={list.chartOptions}
                    />
                  </div>
                  <div className="chart-percentage">{list.percentage}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="forecast-popup-values">
            <div className="">
              <div className="forecast-header-values">Net Runway</div>
              <div className="forecast-header-values1">24 Months</div>
            </div>
            <div className="">
              <div className="forecast-header-values">Burn Rate</div>
              <div className="forecast-header-values1">$750,000.00</div>
            </div>
            <div className="">
              <div className="forecast-header-values">Investments</div>
              <div className="forecast-header-values1">$150,000.00</div>
            </div>
          </div>
          <div className="forecast-popup-values1">
            <div className="">
              <div className="forecast-header-values">Monthly Cash Needs</div>
              <div className="forecast-header-values1">$15,000.00</div>
            </div>
            <div className="">
              <div className="forecast-header-values">Yearly Cash Needs</div>
              <div className="forecast-header-values1">$120,000.00</div>
            </div>
          </div>
        </div>
      </NormalModal>
      <NormalModal
        show={showCreateScenario}
        customModalClass="createScenarioPopup"
      >
        <div className="formContainer">
          <div className="header">
            <div className="heading">Create Scenarios</div>
            <div>
              <img
                onClick={handleCreateScenario}
                src={assets.Icons.close}
                alt="closeIcon"
              />
            </div>
          </div>
          <hr />
          <div className="mainForm">
            <form action="">
              <div className="formDetails">
                <label htmlFor="scenarioType">Scenario Type</label>
                <NormalSelect options={options} />
              </div>
              <div className="formDetails">
                <label htmlFor="avgRevenueMonth">Avg Revenue / Month</label>
                <NormalInput placeholder="0.00" leftIcon dollarIcon />
              </div>
              <div className="formDetails">
                <label htmlFor="avgNoOfCustomers">
                  Avg Number of Customers/ Month
                </label>
                <NormalInput placeholder="No. of Customers" />
              </div>
              <div className="formDetails">
                <label htmlFor="avgRevenueCustomer">
                  Avg. Revenue / Customer
                </label>
                <NormalInput placeholder="No. of Customers" />
              </div>
              <div className="formDetails">
                <label htmlFor="momGrowth">MoM Growth</label>
                <NormalInput placeholder="Enter here" />
              </div>
              <div className="formDetails">
                <label htmlFor="noOfMonths">Number of Months</label>
                <NormalInput placeholder="No. of Months" />
              </div>
              <div className="formDetails">
                <label htmlFor="churnRate">Churn Rate</label>
                <NormalInput placeholder="Enter here" />
              </div>
            </form>
          </div>
          <div className="buttons">
            <NormalButton label="Cancel" cancelBtn />
            <NormalButton label="Show" showBtn />
          </div>
        </div>
      </NormalModal>
    </>
  );
}

export default Forecast;
