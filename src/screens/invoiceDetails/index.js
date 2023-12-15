
import React, { useState } from "react";

import assets from "../../assets";
import "./styles.scss";
import NormalInput from "../../components/inputField";
import NormalButton from "../../components/NormalButton";
import NormalSelect from "../../components/NormalSelect";
import DatePicker from "../../components/DatePicker";
import { useForm } from "react-hook-form";

import { Col, Container, Row, Form } from "react-bootstrap";

const InvoiceDetails = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("2023-11-10");
  const [dueDate, setDueDate] = useState("2023-11-10");
  const [startMonth, setStartMonth] = useState("Nov 2023");
  const [endMonth, setEndMonth] = useState("Nov 2023");

  const [success, setSuccess] = useState(false);
  const [isRecurring, setIsRecurring] = useState(false);
  const handleEmailChange = async (event) => {
    setSuccess(true);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });
  const customErrorMessages = {
    required: "Email is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: "Invalid email address",
    }
  };
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleInvoiceDateChange = (date) => {
    // Update the state with the selected date
    setInvoiceDate(date);
  };
  const handleDueDateChange = (date) => {
    // Update the state with the selected date
    setDueDate(date);
  };

  const handleMarkRecurringChange = () => {
    setIsRecurring(!isRecurring); // Toggle the state when the checkbox changes
  };

const handleStartMonthChange = (date) => {
    // Update the state with the selected date
    setStartMonth(date);
  };

  const handleEndMonthChange = (date) => {
    // Update the state with the selected date
    setEndMonth(date);
  };
  return (
    <div>
      <div className="backList-container">
        <img
          src={assets.Icons.leftArrow}
          alt="backList"
          className="backList-icon"
        />
        <div className="backList">
          Back to Pay List
        </div>
      </div>
      <div className="inovice-details-container">
        <div className="invoice-details-head ">
          <div className="invoice-details">
            Invoice Details
          </div>
          <div className="invoice-mark-delete">
            <div className="inovice-mark-container">
              <div className="d-flex">
                <NormalInput type={"checkbox"}
                  checkboxInput
                  onChange={handleMarkRecurringChange}
                />
                <p className="mark-checkbox-label ">Mark as Recurring</p>
              </div>
            </div>
            <div className="delete-container">
              <img
                src={assets.Icons.bin}
                alt="delete"
                className="delete-icon"
              />
              <div className="delete-lable">
                Delete
              </div>
            </div>
          </div>
        </div>
        <hr className="horizontal-line"></hr>
        <div className="custom-form">
          <Row className="mb-3">
            <Col md={4}>
              <label className="fw-bold mb-2">Vendor Name</label>
              <NormalSelect
                name="vertical-dropdown"
                options={options}
                value={selectedValue}
                onChange={handleSelectChange}
                register={register}
                className="vertical-dropdown"
              />
            </Col>
            <Col md={4}>
              <label className="fw-bold mb-2">VAT Number</label>
              <div className="vat-lable">
                <NormalInput placeholder={123456898} className="vat-lable"></NormalInput>
              </div>
            </Col>
            <Col md={4}>
              <label className="fw-bold mb-2">Reason (optional)</label>
              <NormalSelect
                name="vertical-dropdown"
                className="vertical-dropdown1"
                options={options}
                value={selectedValue}
                onChange={handleSelectChange}
                register={register}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={4}>
              <label className="fw-bold mb-2">Email</label>
              <NormalInput
                type={"text"}
                onChange={handleEmailChange}
                placeholder={"john@gmail.com"}
                register={register("email", {
                  required: customErrorMessages.required,
                  pattern: customErrorMessages.pattern,
                })}
                error={errors.email}
                messages={customErrorMessages}
              />
            </Col>
            <Col md={4}>
              <label className="fw-bold mb-2">Invoice Number</label>
              <div className="invoice-number-lable">
                <NormalInput placeholder={123456}></NormalInput>
              </div>
            </Col>
            <Col md={4}>
              <label className="fw-bold mb-2">Currency</label>
              <NormalSelect
                name="vertical-dropdown"
                options={options}
                value={selectedValue}
                onChange={handleSelectChange}
                register={register}
                className="vertical-dropdown2"
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={4}>
              <label className="fw-bold mb-2">Invoice Date</label>
              <DatePicker
                value={invoiceDate}
                placeholderText="Select date"
                onChange={handleInvoiceDateChange}
                format="yyyy-MM-dd"
                className="invoice-datepicker"
                invoicePay="true"
              />
            </Col>
            <Col md={4}>
              <label className="fw-bold mb-2">Due Date</label>
              <DatePicker
                value={dueDate}
                placeholderText="Select date"
                onChange={handleDueDateChange}
                format="yyyy-MM-dd"
                className="due-datepicker"
                duePay="true"
              />
            </Col>
            <Col md={4}>
              <label className="fw-bold mb-2">Type</label>
              <NormalSelect
                name="vertical-dropdown"
                options={options}
                value={selectedValue}
                onChange={handleSelectChange}
                register={register}
                className="vertical-dropdown3"
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={4}>
              <label className="fw-bold mb-2">Total Amount</label>
              <div className="amount-lable">
                <NormalInput
                  type={"text"}
                  placeholder={"Enter here"}
                />
              </div>
            </Col>
            <Col md={4}>
              <label className="fw-bold mb-2">Status</label>
              <NormalSelect
                name="vertical-dropdown"
                options={options}
                value={selectedValue}
                onChange={handleSelectChange}
                register={register}
                className="vertical-dropdown4"
              />
            </Col>
          </Row>
          <Row className="mb-3 notes-input-container">
            <Col md={12}>
              <label className="fw-bold mb-2">Notes</label>
              <NormalInput
                type={"text"}
                placeholder={"Loreum ipsum"} className="note-lable"
              />
            </Col>
          </Row>
          {isRecurring && (
            <div className="recurring-details">
              <div className="recurring-lable pt-4">Recurring details</div>
              <Row className="mb-3 mt-3">
                <Col md={4}>
                  <label className="fw-bold mb-2">Recurring Type</label>
                  <NormalSelect
                    name="vertical-dropdown"
                    options={options}
                    value={selectedValue}
                    onChange={handleSelectChange}
                    register={register}
                    className="vertical-dropdown3"
                  />
                </Col>
                <Col md={4}>
                  <label className="fw-bold mb-2">Start Month & year</label>
                  <DatePicker
                    value={startMonth}
                    placeholderText="Select date"
                    onChange={handleStartMonthChange}
                    format="yyyy-MM-dd"
                    className="invoice-datepicker"
                    invoicePay="true"
                  />
                </Col>
                <Col md={4}>
                  <label className="fw-bold mb-2">End Month & year</label>
                  <DatePicker
                    value={endMonth}
                    placeholderText="Select date"
                    onChange={handleEndMonthChange}
                    format="yyyy-MM-dd"
                    className="due-datepicker"
                    duePay="true"
                  />
                </Col>

              </Row>
            </div>
          )}
        </div>
        <Row className="mb-3 ">
          <Col md={12} className="save-button d-flex  gap-2 d-flex justify-content-end">
            <NormalButton label={"Save As Draft"} saveindraft />
            <NormalButton label={"Send Invoice"} sendinvoice />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default InvoiceDetails;
