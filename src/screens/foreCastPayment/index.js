import React from 'react'
import { useState } from "react";
import NormalSelect from "../../components/NormalSelect";
import DatePicker from "../../components/DatePicker"
import { Bar, Doughnut } from "react-chartjs-2";
import "./styles.scss";
import assets from "../../assets";
import { Col, Container, Row, Form } from "react-bootstrap";
import NormalButton from '../../components/NormalButton';
import NormalTable from '../../components/NormalTable';
import NormalModal from '../../components/NormalModal';


const ForeCastPayment = () => {
    const [activeMenu, setActiveMenu] = useState("All");

    const options = [
        { label: "Travel", value: 1 },
        { label: "Month", value: 2 },
        { label: "Week", value: 3 },
    ];
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

    const headerDetails = [

        { label: "Months", sortKey: false },
        { label: "Customer Growth", sortKey: false },
        { label: "ChurnAdded", sortKey: false },
        { label: "Revenue", sortKey: false },

    ];

    const [payData] = useState([
        {
            id: 1,
            months: "1",
            customerGrowth: "300",
            churnAdded: "295.5",
            revenue: "$ 14,775.00",

        },
        {
            id: 1,
            months: "1",
            customerGrowth: "300",
            churnAdded: "295.5",
            revenue: "$ 14,775.00",

        },
        {
            id: 1,
            months: "1",
            customerGrowth: "300",
            churnAdded: "295.5",
            revenue: "$ 14,775.00",

        },
        {
            id: 1,
            months: "1",
            customerGrowth: "300",
            churnAdded: "295.5",
            revenue: "$ 14,775.00",

        },
        {
            id: 1,
            months: "1",
            customerGrowth: "300",
            churnAdded: "295.5",
            revenue: "$ 14,775.00",

        },
        {
            id: 1,
            months: "1",
            customerGrowth: "300",
            churnAdded: "295.5",
            revenue: "$ 14,775.00",

        },
        {
            id: 1,
            months: "1",
            customerGrowth: "300",
            churnAdded: "295.5",
            revenue: "$ 14,775.00",

        },
        {
            id: 1,
            months: "1",
            customerGrowth: "300",
            churnAdded: "295.5",
            revenue: "$ 14,775.00",

        },
        {
            id: 1,
            months: "1",
            customerGrowth: "300",
            churnAdded: "295.5",
            revenue: "$ 14,775.00",

        },
        {
            id: 1,
            months: "1",
            customerGrowth: "300",
            churnAdded: "295.5",
            revenue: "$ 14,775.00",

        },
    ]);

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    };

    const [isOverlayVisible, setOverlayVisibility] = useState(true);

    const handleCloseClick = () => {
        console.log("Close icon clicked");
        setOverlayVisibility(false);
      };
      
      
    return (
        <div>
            <div className='forecastpay'>
                <div className="forecastpay-title-container d-flex">

                    {menus.map(({ title }) => (
                        <div
                            className={`forecastpay-menu-item ${activeMenu === title ? "forecastpay-active" : ""
                                }`}
                            onClick={() => handleMenuClick(title)}
                        >
                            {title}
                        </div>
                    ))}

                    <div className="forecastpay-from-date-container ">
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

                    <div className="forecastpay-end-date-container ">
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

                    <div className="forecastpay-select-container ">
                        <NormalSelect name="year" options={options} />
                    </div>

                    <div className='exports-lable'> <NormalButton label={"Export"} exports
                    /></div>
                    <div className='scenarios-lable'>  <NormalButton label={"Create Scenarios"} scenarios /></div>
                </div>

                <div className="container mt-4">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="card dynamic-charts">
                                <div className="card-body dynamic-charts-container">

                                    <div className="d-flex justify-content-between mt-2">
                                        <p className="card-title dynamics-expenses">Dynamic Flow</p>
                                        <NormalSelect name="Travel" options={options} chartSelect />
                                    </div>
                                    <div className="dynamic-expenses-charts-container mt-3">
                                        <Bar
                                            data={{
                                                labels: [
                                                    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
                                                ],
                                                datasets: [
                                                    {
                                                        type: "line",
                                                        label: "Net",
                                                        data: [150000, 155000, 160000, 157000, 153000, 170000, 175000, 180000, 185000, 155000, 160000, 160000],
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
                            <div className="card cash-forecastpay-charts-container">
                                <div className="card-body">

                                    <div className="d-flex justify-content-between gap-2 mt-1">
                                        <p className="card-title dynamics-expenses">Cash Flow Forecast</p>
                                        <NormalSelect name="Travel" options={options} chartSelect />
                                        <NormalButton label={"View Detail"} chartButton />
                                    </div>
                                    <div className='bar-options d-flex gap-5 '>
                                        <div className='option-lables'>
                                            <img
                                                src={assets.Icons.rentIcon}
                                                alt="optionIcon"
                                                className="option-icons"
                                            /> Net Cash flow
                                        </div>
                                        <div className='option-lables'>
                                            <img
                                                src={assets.Icons.foodIcon}
                                                alt="optionIcon"
                                                className="option-icons"
                                            /> Cash In
                                        </div>

                                        <div className='option-lables'>
                                            <img
                                                src={assets.Icons.travelIcon}
                                                alt="optionIcon"
                                                className="option-icon"
                                            />  Expenses
                                        </div>



                                    </div>
                                    <div className="dynamic-expenses-charts-container mt-4">
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
                                                            230000, 235000, 240000, 245000, 235000, 230000, 225000,
                                                            225000, 230000, 235000, 240000, 245000,
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
                                                            180000, 185000, 190000, 195000, 180000, 175000, 170000,
                                                            165000, 160000, 165000, 170000, 180000,
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
                                                            100000, 115000, 120000, 125000, 100000, 120000, 125000,
                                                            130000, 135000, 125000, 120000, 100000,
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


                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card cash-forecastpay-charts-container">
                                <div className="card-body">
                                    <div className=" mt-3">
                                        <p className="card-title dynamics-expenses">Revenue Scenario</p>
                                    </div>
                                    <div className='bar-options d-flex gap-5'>
                                        <div className='option-lables'>
                                            <img
                                                src={assets.Icons.rentIcon}
                                                alt="optionIcon"
                                                className="option-icons"
                                            /> Main Scenario
                                        </div>
                                        <div className='option-lables'>
                                            <img
                                                src={assets.Icons.foodIcon}
                                                alt="optionIcon"
                                                className="option-icons"
                                            /> Hiring New Staff Member
                                        </div>
                                        <div className='option-lables'>
                                            <img
                                                src={assets.Icons.travelIcon}
                                                alt="optionIcon"
                                                className="option-icon"
                                            /> Investments
                                        </div>
                                    </div>
                                    <div className="dynamic-expenses-charts-container mt-4">
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
                                                        backgroundColor: "#ADADAD ",
                                                        order: 2,
                                                    },
                                                    {
                                                        label: "Loss",
                                                        data: [
                                                            140000, 120000, 130000, 140000, 120000, 150000, 140000,
                                                            120000, 110000, 130000, 140000, 120000,
                                                        ],
                                                        backgroundColor: "#ADADAD", // Red color for Loss
                                                        order: 2,
                                                    },
                                                    {
                                                        type: "line",
                                                        label: "Net",
                                                        data: [
                                                            230000, 235000, 240000, 245000, 235000, 230000, 225000,
                                                            225000, 230000, 235000, 240000, 245000,
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
                                                            180000, 185000, 190000, 195000, 180000, 175000, 170000,
                                                            165000, 160000, 165000, 170000, 180000,
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
                                                            100000, 115000, 120000, 125000, 100000, 120000, 125000,
                                                            130000, 135000, 125000, 120000, 100000,
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
                            <div className="card cash-forecastpay-charts-container">
                                <div className="card-body">

                                    <div className="mt-2">
                                        <p className="card-title dynamics-expenses">Revenue Overview</p>

                                    </div>
                                    <div className="dynamic-table-charts-container">
                                        <NormalTable headerDetails={headerDetails} >
                                            {payData.length > 0
                                                ? payData.map((list) => {
                                                    return (
                                                        <>
                                                            <tr className="px-3">

                                                                <td>{list.months}</td>
                                                                <td>{list.customerGrowth}</td>
                                                                <td>{list.churnAdded}</td>
                                                                <td>{list.revenue}</td>
                                                            </tr>
                                                        </>
                                                    );
                                                })
                                                : "No Data"}
                                        </NormalTable>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                   
                </div>

            </div>
            <NormalModal
                show={isOverlayVisible}
                setModal={setOverlayVisibility}

                customModalClass="forecastCancel"
            >
               <div className="recalculate-overlay container">
                        <div className="redcircle-container">
                            <img
                                src={assets.Icons.redcircle}
                                alt="optionIcon"
                                className="redcircle"
                                onClick={handleCloseClick}
                            />
                            <img
                                src={assets.Icons.redcanclebutton}
                                alt="optionIcon"
                                className="redcanclebutton"
                                onClick={handleCloseClick}
                            />
                        </div>
                        <div className='recalculate d-flex gap-5'>
                            <p className="mb-0">Recalculate the forecast considering 30% growth in sales and churn at 1.5%</p>
                            <NormalButton label="Cancel" approveBtn />
                        </div>
                    </div>

            </NormalModal>
        </div>
    )
}

export default ForeCastPayment



