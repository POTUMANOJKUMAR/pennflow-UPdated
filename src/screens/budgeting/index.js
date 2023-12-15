import React from 'react'
import { useState } from "react";
import NormalSelect from "../../components/NormalSelect";
import DatePicker from "../../components/DatePicker"
import { Bar, Doughnut } from "react-chartjs-2";
import "./styles.scss";
import assets from "../../assets";
import { Col, Container, Row, Form } from "react-bootstrap";



const Budgeting = () => {
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
            title: "Add Employee",
        },

    ];

    const [pieChartData] = useState([
        {
            id: 1,
            chartData: {
                labels: ["Travel", "others", "Rent", "Food"],
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
                labels: ["Travel", "others", "Rent", "Food"],
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
                labels: ["Travel", "others", "Rent", "Food"],
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
                labels: ["Travel", "others", "Rent", "Food"],
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
                labels: ["Travel", "others", "Rent", "Food"],
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





    const employeeLabels = ["Employee 1", "Employee 2", "Employee 3", "Employee 4", "Employee 5"];


    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    };

   
     return (
        <div>
            <div className='budgeting'>
                {/* <div className="budgeting-title-container d-flex">

                    {menus.map(({ title }) => (
                        <div
                            className={`budgeting-menu-item ${activeMenu === title ? "budgeting-active" : ""
                                }`}
                            onClick={() => handleMenuClick(title)}
                        >
                            {title}
                        </div>
                    ))}

                    <div className="budgeting-from-date-container ">
                        <DatePicker
                            calendarStyle={true}
                            placeHolder={true}
                            isWeekdays={true}
                            format={"dd-MM-yyyy"}
                            placeholderText=" From Date"
                            rightIcon
                            calendarIcon
                            className="date-picker-container"
                        />
                    </div>

                    <div className="budgeting-end-date-container ">
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

                    <div className="budgeting-select-container ">
                        <NormalSelect name="year" options={options} />
                    </div>

                </div> */}

<div className="budgeting-title-container d-flex">
            {menus.map(({ title }) => (
                <div
                    key={title}
                    className={`budgeting-menu-item ${activeMenu === title ? "budgeting-active" : ""}`}
                    onClick={() => handleMenuClick(title)}
                >
                    {title}
                </div>
            ))}

            <div className="budgeting-from-date-container">
                <Form.Group as={Row}>
                    <Col>
                        <DatePicker
                             calendarStyle={true}
                             placeHolder={true}
                             isWeekdays={true}
                             format={"dd-MM-yyyy"}
                             placeholderText=" From Date"
                             rightIcon
                             calendarIcon
                             className="date-picker-container"
                        />
                    </Col>
                </Form.Group>
            </div>

            <div className="budgeting-end-date-container">
                <Form.Group as={Row}>
                    <Col>
                        <DatePicker
                          calendarStyle={true}
                          placeHolder={true}
                          isWeekdays={true}
                          format={"dd-MM-yyyy"}
                          placeholderText=" From Date"
                          rightIcon
                          calendarIcon
                          className="date-picker-container"
                        />
                    </Col>
                </Form.Group>
            </div>

            <div className="budgeting-select-container">
                <Form.Group as={Row}>
                    <Col>
                        <NormalSelect
                            name="year"
                            options={options}
                        />
                    </Col>
                </Form.Group>
            </div>
        </div>

                <div className="pie-charts-container">
                    <div className="d-flex justify-content-between">
                        <p className="cash-flow1">Expense Distribution Employee Wise</p>
                        
                    </div>
                    <div className="pie-charts">
                        {pieChartData.map((list, index) => (
                            <div className="pie-charts-data" key={list.id}>
                                <Doughnut
                                    data={list.chartData}
                                    options={list.chartOptions}
                                    width="5%"
                                    height="5%"
                                />
                                <div className="employee-label">{employeeLabels[index]}</div>
                            </div>
                        ))}



                    </div>
                    <div>
                        <div className='pie-options d-flex '>
                            <div className='option-lable'>
                                <img
                                    src={assets.Icons.travelIcon}
                                    alt="optionIcon"
                                    className="option-icon"
                                /> Travel
                            </div>
                            <div className='option-lable'>
                                <img
                                    src={assets.Icons.foodIcon}
                                    alt="optionIcon"
                                    className="option-icon"
                                /> Food
                            </div>
                            <div className='option-lable'>
                                <img
                                    src={assets.Icons.rentIcon}
                                    alt="optionIcon"
                                    className="option-icon"
                                /> Rent
                            </div>
                            <div className='option-lable'>
                                <img
                                    src={assets.Icons.otherIcon}
                                    alt="optionIcon"
                                    className="option-icon"
                                /> Others
                            </div>
                        </div>


                    </div>
                </div>
                <div className='expenses-chart d-flex '>
                    <div className="overall-chart-container">
                        <p className="overall-expenses">Overall Expenses Chart</p>
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
                                                220000, 230000, 220000, 210000, 230000, 140000, 120000, 130000, 140000, 120000, 150000, 140000,
                                                120000, 110000, 130000, 140000, 120000,
                                            ],
                                            backgroundColor: "#4FF5C3",
                                            order: 2,
                                            barThickness: 10,
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

                    <div className="comapany-chart-container">
                        <div className="d-flex justify-content-between">
                            <p className="overall-expenses">Company Expenses Category wiset</p>
                            <NormalSelect name="Travel" options={options} chartSelect />
                        </div>
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
                                                220000, 230000, 220000, 210000, 230000, 140000, 120000, 130000, 140000, 120000, 150000, 140000,
                                                120000, 110000, 130000, 140000, 120000,
                                            ],
                                            backgroundColor: "#7E57FF",
                                            barThickness: 10,
                                            order: 2,
                                            barPercentage: 0.8,
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
                </div>
            </div>
        </div>
    )	
    };
    


export default Budgeting