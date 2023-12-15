import React, { useState } from "react";
import "./styles.scss";
import assets from "../../assets";
import DatePicker from "../../components/DatePicker";
import NormalSelect from "../../components/NormalSelect";
import { Bar, Line } from "react-chartjs-2";
function Insight() {
  const [activeMenu, setActiveMenu] = useState("charts");
  const insightOptions = [
    {
      label: "This Year",
      value: "This Year",
    },
    {
      label: "Last Year",
      value: "Last Year",
    },
    {
      label: "Next Year",
      value: "Next Year",
    },
  ];

  const insightTabDetail = [{ id: 1, title: "charts" }];
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <>
      <div className="insight-main-container">
        <div className="insight-header-container">
          <div className="insight-menu-container">
            {insightTabDetail.map(({ title }) => (
              <div
                className={`insight-menu-item ${
                  activeMenu === title ? "insight-active" : ""
                }`}
                onClick={() => handleMenuClick(title)}
              >
                {title}
              </div>
            ))}
          </div>
          <div className=" row insight-input-container">
            <div className="col-3">
              <DatePicker placeholderText="From Date" />
            </div>
            <div className="col-3">
              <DatePicker placeholderText="TO Date" />
            </div>
            <div className="col-5">
              <NormalSelect options={insightOptions} />
            </div>
          </div>
        </div>

        <div className="insight-main-chart-container">

          <div className="charts-top">
            <div className="insight-bar-chart-container">
              <p className="chart-heading">Money Flows</p>
              <div className="insight-up-icons">
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
              <div className="bar-chart">
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
                          160000, 165000, 170000, 175000, 175000, 170000,
                          165000, 160000, 160000, 155000, 160000, 160000,
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
                    maintainAspectRatio: false,
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
                            return value >= 1000 ? value / 1000 + "k" : value;
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

            <div className="insight-line-chart-container">
              <p className="chart-heading">Net Cash Flow</p>
              <div className="insight-up-icons">
                <div className="option-lable">
                  <img
                    src={assets.Icons.voilet}
                    alt="optionIcon"
                    className="option-icon"
                  />{" "}
                  $150,500.00
                </div>
              </div>
              <div className="line-chart">
                <Line
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
                          180000, 190000, 220000, 240000, 120000, 330000, 220000, 240000,
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
                    maintainAspectRatio: false,
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
                            return value >= 1000 ? value / 1000 + "k" : value;
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

          <div className="chart-bottom">
          <div className="bottom-left-bar-chart-container">
                        <p className="chart-heading">Inflow by Category</p>
                        <p className="chart-heading">$143,306.00</p>
                        <div className="bottom-icon-chart">
                        <div className="insight-bottom-icons">
                <div className="option-lable">
                  <img
                    src={assets.Icons.no_category}
                    alt="optionIcon"
                    className="option-icon"
                  />{" "}
                No Category
                </div>
                <div className="option-lable">
                  <img
                    src={assets.Icons.internatiinal_bal}
                    alt="optionIcon"
                    className="option-icon"
                  />{" "}
                 Internal Balance 
                </div>
                <div className="option-lable">
                  <img
                    src={assets.Icons.other}
                    alt="optionIcon"
                    className="option-icon"
                  />{" "}
             Deposit
                </div>
                <div className="option-lable">
                  <img
                    src={assets.Icons.rent}
                    alt="optionIcon"
                    className="option-icon"
                  />{" "}
                Received
                </div>
            
              </div>
              
              <div className=" bottom-right-bar-chart">
  <Bar
    data ={{
      labels: [
        "",
        "",
        "",
        "",
    
      ],
      datasets: [
        {
          axis: 'y',
          data: [180000, 190000, 220000, 240000,],
          backgroundColor: ["#B5DFFE", "#B3FDAD", "#FFE5A1", "#CEB0FF"],
          order: 2,
          barThickness: 20,
        },
       
      ],
    }}
    options = {{
      indexAxis: 'y',
      maintainAspectRatio: false,
      aspectRatio: 6,
      scales: {
        y: {
          beginAtZero: false,
          grid: {
            display: false,
          },
          border: {
            display: false,
          },
          ticks: {
            color: "#351c75",
          },
        },
        x: {
          beginAtZero: false,
          grid: {
            display: true,
           
          
          },
          ticks: {
            stepSize: 50000,
            color: "#351c75",
            callback: function (value, index, values) {
              return value >= 1000 ? value / 1000 + "k" : value;
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
          <div className="bottom-right-bar-chart-container">
                        <p className="chart-heading">Outflow by Category</p>
                        <p className="chart-heading">$143,306.00</p>
                        <div className="bottom-icon-chart">
                        <div className="insight-bottom-icons ">
                <div className="option-lable">
                  <img
                    src={assets.Icons.no_category}
                    alt="optionIcon"
                    className="option-icon"
                  />{" "}
                No Category
                </div>
                <div className="option-lable">
                  <img
                    src={assets.Icons.internatiinal_bal}
                    alt="optionIcon"
                    className="option-icon"
                  />{" "}
                 Internal Balance Out
                </div>
                <div className="option-lable">
                  <img
                    src={assets.Icons.other}
                    alt="optionIcon"
                    className="option-icon"
                  />{" "}
             other
                </div>
                <div className="option-lable">
                  <img
                    src={assets.Icons.rent}
                    alt="optionIcon"
                    className="option-icon"
                  />{" "}
                Rent
                </div>
                <div className="option-lable">
                  <img
                    src={assets.Icons.taxes}
                    alt="optionIcon"
                    className="option-icon"
                  />{" "}
                 Taxes
                </div>
              </div>
              <div className="bottom-right-bar-chart">
  <Bar
    data ={{
      labels: [
        "",
        "",
        "",
        "",
        "",
    
      ],
      datasets: [
        {
          axis: 'y',
          data: [180000, 190000, 220000, 240000,250004],
          backgroundColor: ["#B5DFFE", "#B3FDAD", "#FFE5A1", "#CEB0FF","#FFC2CD"],
          order: 2,
          barThickness: 20,
        },
      ],
    }}
    options = {{
      indexAxis: 'y',
      maintainAspectRatio: false,
      aspectRatio: 6,
      scales: {
        y: {
          beginAtZero: false,
          grid: {
            display: false,
          },
          border: {
            display:false,
          },
          ticks: {
            color: "#351c75",
          },
        },
        x: {
          beginAtZero: false,
          grid: {
            display: true,
          },
          ticks: {
            stepSize: 50000,
            color: "#351c75",
            callback: function (value, index, values) {
              return value >= 1000 ? value / 1000 + "k" : value;
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
      
    </>
  );
}

export default Insight;
