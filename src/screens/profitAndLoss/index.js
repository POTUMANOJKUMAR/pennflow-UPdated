import React, { useState } from "react";
import "./styles.scss";
import DatePicker from "../../components/DatePicker";
import NormalSelect from "../../components/NormalSelect";
// import NormalButton from '../../components/NormalButton';
import { Doughnut,Bar } from "react-chartjs-2";
import assets from "../../assets/index";

const ProfitAndLoss = () => {
  const [pieChartData] = useState([
    {
      id: 1,
      chartData: {
        // labels: ["EU", "AUS", "IND", "US"],
        datasets: [
          {
            data: [30, 30, 40],
            backgroundColor: ["#0010F7", "#55B1F3", "#1BE7FF"],
            borderColor: ["#0010F7", "#55B1F3", "#1BE7FF"],
            borderWidth: 1,
          },
        ],
      },

      chartOptions: {
          centerText: {
            display: true,
            text: `90%`
          },
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
        cutout: 75,
        center: {
          text: 'Center Label',
          color: '#000000',
           // Set the color of the center label
        },
      },
    },
  ]);

  const [activeMenu, setActiveMenu] = useState("Unpaid");
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const menus = [
    {
      id: 1,
      title: "Charts",
    },
    {
      id: 1,
      title: "Profit & Loss",
    },
  ];

  const yearOptions = [
    { value: "", label: "Select Year" },
    { value: "1", label: "Select Year" },
    { value: "2", label: "Select Year" },
  ];

  const textCenter ={
    id: 'textCenter',
    beforeDatasetsDraw(chart,args,pluginOptions){
      const{ctx, data} = chart;

      ctx.save();
      ctx.font = '600 16px poppins';
      ctx.fillStyle = '#373D3F';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      let text = '$ 754,94.00';
      let textHeight = ctx.measureText(text).actualBoundingBoxAscent + ctx.measureText(text).actualBoundingBoxDescent;
      ctx.fillText(text,chart.getDatasetMeta(0).data[0].x,chart.getDatasetMeta(0).data[0].y + textHeight / 2);
    }
  }
  const textCenterDown ={
    id: 'textCenterDown',
    beforeDatasetsDraw(chart,args,pluginOptions){
      const{ctx, data} = chart;

      ctx.save();
      ctx.font = '400 16px poppins';
      ctx.fillStyle = '#373D3F';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      let text = `Total`;
      let textHeight = ctx.measureText(text).actualBoundingBoxAscent + ctx.measureText(text).actualBoundingBoxDescent;
      ctx.fillText(text,chart.getDatasetMeta(0).data[0].x,chart.getDatasetMeta(0).data[0].y - textHeight / 2);
    }
  }

  return (
    <div className="profitLossContainer">
      <div className="profitLossHeader">
        <div className="profitLoss-pay-menu-container">
          {menus.map(({ title }) => (
            <div
              className={`profitLoss-pay-menu-item ${
                activeMenu === title ? "profitLoss-pay-active" : ""
              }`}
              onClick={() => handleMenuClick(title)}
            >
              {title}
            </div>
          ))}
        </div>
        <div className="profitLossHeaderLeft">
          <div className="col-3">
            <DatePicker placeholderText="From Date" />
          </div>
          <div className="col-3">
            <DatePicker placeholderText="To Date" />
          </div>
          <div className="col-4">
            <NormalSelect options={yearOptions} />
          </div>
          <div className="headerButton ">
            <button>Export</button>
          </div>
        </div>
      </div>
      <div className="profitLossChartContainer">
        <div className="net-income-pie-chart">
          <h2>Net Income</h2>
          {pieChartData.map((list) => (
            <div className="pie-chart-data-full">
              <div className="pie-chart-data1">
                <Doughnut
                  data={list.chartData}
                  options={list.chartOptions}
                  //   width="116px"
                  //   // className="me-5"
                  //   height="116px"
                  plugins={[textCenter,textCenterDown]}
                  className="label-top label-bottom"
                />
              </div>
              <div className="profitLossPieOptions">
                <div className="profitLossPieOptionsIn">
                  <img src={assets.Icons.revenueIcon} alt="" />Revenues (55%)
                </div>
                <div className="profitLossPieOptionsIn">
                  <img src={assets.Icons.interestIcon} alt="" />Interest Income (20%)
                </div>
                <div className="profitLossPieOptionsIn">
                  <img src={assets.Icons.donationIcon} alt="" />Donations (25%)
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="netIncomeTrendChartContainer">
          <h2>Net Income Trend</h2>
          <div className="overall-expenses-chart-container">
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
                        220000, 230000, 220000, 210000, 230000, 140000, 120000,
                        130000, 140000, 120000, 150000, 140000, 120000, 110000,
                        130000, 140000, 120000,
                      ],
                      backgroundColor: "#4FF5C3",
                      order: 2,
                      barThickness: 5,
                      // barPercentage: 50,
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
        <div className="net-income-pie-chart">
          <h2>Expense by Department</h2>
          {pieChartData.map((list) => (
            <div className="pie-chart-data-full">
              <div className="pie-chart-data1">
                <Doughnut
                  data={list.chartData}
                  options={list.chartOptions}
                  //   width="116px"
                  //   // className="me-5"
                  //   height="116px"
                  plugins={[textCenter,textCenterDown]}
                  className="label-top label-bottom"
                />
              </div>
              <div className="profitLossPieOptions">
                <div className="profitLossPieOptionsIn">
                  <img src={assets.Icons.revenueIcon} alt="" />Travel (55%)
                </div>
                <div className="profitLossPieOptionsIn">
                  <img src={assets.Icons.interestIcon} alt="" />Rent (20%)
                </div>
                <div className="profitLossPieOptionsIn">
                  <img src={assets.Icons.donationIcon} alt="" />Others (25%)
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="netIncomeTrendChartContainer">
          <h2>Expenses Trend</h2>
          <div className="overall-expenses-chart-container">
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
                        220000, 230000, 220000, 210000, 230000, 140000, 120000,
                        130000, 140000, 120000, 150000, 140000, 120000, 110000,
                        130000, 140000, 120000,
                      ],
                      backgroundColor: "#4FF5C3",
                      order: 2,
                      barThickness: 5,
                      // barPercentage: 50,
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
                          return value >= 1000 ? value / 1000+ "k":value;
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
  );
};

export default ProfitAndLoss;
