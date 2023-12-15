import React, { useRef } from "react";
import ReactDatePicker from "react-datepicker";
import assets from "../../assets";
import "./styles.scss";

const DatePicker = (props) => {
  const {
    value,
    placeholderText,
    onChange,
    format,
    disabled = false,
    maxDate = null,
    minDate = null,
    isTimer = false,
    rightIcon,
    calendarIcon,
  } = props;
  const calendarRef = useRef(false);

  const handleClick = () => {
    calendarRef.current.setOpen({ open: true });
  };
  return (
    <div className="date-picker-container">
      <ReactDatePicker
        value={value}
        selected={value ? new Date(value) : null}
        disabled={disabled}
        maxDate={maxDate}
        showTimeSelectOnly={isTimer}
        showTimeSelect={isTimer}
        minDate={minDate}
        dropdownMode="select"
        className={`date-picker-input ${disabled && "disabledInput"}`}
        placeholderText={placeholderText}
        dateFormat={format}
        onChange={onChange}
        ref={calendarRef}
      />
      <div className="calendar-icon-container">
        <img
          className={`calendar-icon`}
          src={assets.Icons.calendar}
          alt="calender"
          onClick={() => handleClick()}
        />
      </div>
    </div>
  );
};

export default DatePicker;
