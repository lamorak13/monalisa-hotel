import React, { useState } from 'react';
import DatePicker from './DatePicker';
import DatePickerForm from './DatePickerForm';

function DatePickerWrapper() {
  const currentDate = new Date();

  //state for the datepicker month and year heading
  let [datePicker, setDatePicker] = useState({
    currentMonth: currentDate.getMonth(),
    currentYear: currentDate.getFullYear(),
  });

  //state that stores start and end date and keeps track which date is currently selected to be overridden
  let [dateRange, setDateRange] = useState({
    selectStartDate: true,
    selectEndDate: false,
    startDate: null,
    endDate: null,
  });

  let [datePickerForm, setDatePickerForm] = useState({
    name: '',
    lastName: '',
    email: '',
    numberOfPeople: 1,
  });

  function datePickerFormSubmit(e) {
    e.preventDefault();
    console.log(datePickerForm, dateRange.startDate, dateRange.endDate);
  }

  return (
    <div className='date-picker-wrapper'>
      <DatePicker
        setDatePicker={setDatePicker}
        setDateRange={setDateRange}
        datePicker={datePicker}
        dateRange={dateRange}
      />
      <DatePickerForm
        datePickerForm={datePickerForm}
        setDatePickerForm={setDatePickerForm}
        submit={datePickerFormSubmit}
      />
    </div>
  );
}

export default DatePickerWrapper;
