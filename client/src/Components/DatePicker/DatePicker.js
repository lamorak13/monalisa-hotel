import React, { useEffect } from 'react';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';

//component
function DatePicker(props) {
  //get functions and state from wrapper component
  let { dateRange, setDateRange, setDatePicker, datePicker } = props;

  //useEffect that colors the current start and end date in a different color
  useEffect(() => {
    let inRangeClass = document.querySelectorAll('.day.in-range');
    inRangeClass.forEach((element) => {
      element.classList.remove('in-range');
    });
    let startClass = document.querySelector('.start-date');
    let endClass = document.querySelector('.end-date');

    if (startClass) startClass.classList.remove('start-date');
    if (endClass) endClass.classList.remove('end-date');

    if (dateRange.startDate) {
      let startDateAttribute = dateRange.startDate;
      let start = document.querySelectorAll(`.day[day="${startDateAttribute}"]`)[0];
      if (start) start.classList.add('start-date');
    }
    if (dateRange.endDate) {
      let endDateAttribute = dateRange.endDate;
      let end = document.querySelectorAll(`.day[day="${endDateAttribute}"]`)[0];
      if (end) end.classList.add('end-date');
    }

    if (dateRange.startDate && dateRange.endDate) {
      let days = document.querySelectorAll('.day');
      days.forEach((day) => {
        let attribute = day.getAttribute('day');
        attribute = new Date(attribute);
        if (dateRange.startDate < attribute && attribute < dateRange.endDate) {
          day.classList.add('in-range');
        }
      });
    }
  }, [dateRange.startDate, dateRange.endDate, datePicker.currentMonth, datePicker.currentYear]);

  //initializes the grid and gets the days of the current month and year
  const monthGrid = [];
  getMonthGrid(datePicker.currentYear, datePicker.currentMonth, monthGrid);

  //takes the monthgrid and maps it to day elements that are then displayed on the page
  const days = monthGrid.map((element, id) => {
    if (element === null) {
      return <div className='day empty-day' key={id}></div>;
    }
    let date = new Date(datePicker.currentYear, datePicker.currentMonth, element);
    // date = getDateFormatted(date);
    return (
      <div
        className='day'
        key={date}
        day={date}
        onClick={(e) => onClickDateRange(e)}
        onMouseOver={onDayHover}
      >
        {element}
      </div>
    );
  });

  return (
    <div className='date-picker'>
      <div className='input-container'>
        <input
          type='text'
          name='start-date'
          className={`${
            dateRange.selectStartDate && 'date-picker__input-active'
          } date-picker__input`}
          placeholder='Start Date'
          value={dateRange.startDate ? getDateFormatted(dateRange.startDate) : ''}
          onClick={onInputStartClick}
          readOnly
        />
        <input
          type='text'
          name='end-date'
          className={`${dateRange.selectEndDate && 'date-picker__input-active'} date-picker__input`}
          placeholder='End Date'
          value={dateRange.endDate ? getDateFormatted(dateRange.endDate) : ''}
          onClick={onInputEndClick}
          readOnly
        />
        <button className='date-picker__clear' onClick={clearDateRange}>
          <FaTimes size={20} />
        </button>
      </div>
      <div className='year-container'>
        <button className='prev-month' onClick={prevMonth}>
          <FaArrowLeft size={20} />
        </button>
        <h2 className='date-picker__title'>{`${getMonthTitle(datePicker.currentMonth)} ${
          datePicker.currentYear
        }`}</h2>
        <button className='next-month' onClick={nextMonth}>
          <FaArrowRight size={20} />
        </button>
      </div>
      <div className='week-container'>
        <div>Mo</div>
        <div>Tu</div>
        <div>We</div>
        <div>Th</div>
        <div>Fr</div>
        <div>Sa</div>
        <div>So</div>
      </div>
      <div className='days'>{days}</div>
    </div>
  );

  //MAIN FUNCTIONS
  //gets the days of the current month and year
  function getMonthGrid(year, month, monthGrid) {
    const firstDayType = new Date(year, month, 1).getDay();
    const lastDay = new Date(year, month + 1, 0);
    let lastDayType = lastDay.getDay();
    const numberOfDays = lastDay.getDate();

    if (firstDayType === 0) {
      for (let i = 1; i < 7; i++) {
        monthGrid.push(null);
      }
    } else {
      for (let i = 1; i < firstDayType; i++) {
        monthGrid.push(null);
      }
    }

    for (let i = 0; i < numberOfDays; i++) {
      monthGrid.push(i + 1);
    }

    if (lastDayType !== 0) {
      for (lastDayType; lastDayType < 7; lastDayType++) {
        monthGrid.push(null);
      }
    }
  }

  //on click function that is called whenever a day element is clicked
  function onClickDateRange(e) {
    //gets the date of the element that was clicked
    let date = new Date(datePicker.currentYear, datePicker.currentMonth, e.target.innerText);

    //end date is selected to be overridden, but date is out of bounds (smaller than start date)
    if (dateRange.selectEndDate && dateRange.startDate && date < dateRange.startDate) {
      setDateRange({
        selectStartDate: false,
        selectEndDate: true,
        startDate: date,
        endDate: null,
      });
      return;
    }

    //start date is selected to be overridden, but date is out of bounds (bigger than end date)
    if (dateRange.selectStartDate && dateRange.endDate && date > dateRange.endDate) {
      setDateRange({
        selectStartDate: false,
        selectEndDate: true,
        startDate: date,
        endDate: null,
      });
      return;
    }

    //there is no start date but an end date and date is out of bounds (bigger than end date)
    if (!dateRange.startDate && dateRange.endDate && date > dateRange.endDate) {
      setDateRange({
        selectStartDate: false,
        selectEndDate: true,
        startDate: date,
        endDate: null,
      });
      return;
    }

    //there is no start date but an end date
    if (!dateRange.startDate && dateRange.endDate) {
      setDateRange({
        ...dateRange,
        selectStartDate: false,
        selectEndDate: true,
        startDate: date,
      });
      return;
    }

    //base case if end date is selected
    if (dateRange.selectEndDate) {
      setDateRange({
        ...dateRange,
        endDate: date,
      });
      return;
    }

    //base case if start date is selected
    if (dateRange.selectStartDate) {
      setDateRange({
        ...dateRange,
        selectStartDate: false,
        selectEndDate: true,
        startDate: date,
      });
      return;
    }
  }

  function onDayHover(e) {
    if (dateRange.startDate && dateRange.endDate) return;

    let inRangeClass = document.querySelectorAll('.in-range');
    inRangeClass.forEach((day) => day.classList.remove('in-range'));

    let current = new Date(e.target.getAttribute('day'));

    if (dateRange.startDate && current > dateRange.startDate) {
      document.querySelectorAll('.day').forEach((day) => {
        let date = new Date(day.getAttribute('day'));
        if (date > dateRange.startDate && date <= current) day.classList.add('in-range');
      });
    }

    if (dateRange.endDate && current < dateRange.endDate) {
      document.querySelectorAll('.day').forEach((day) => {
        let date = new Date(day.getAttribute('day'));
        if (date < dateRange.endDate && date >= current) day.classList.add('in-range');
      });
    }
  }

  //Handles clicks on the Inputs => sets which dates have to be overwritten
  function onInputStartClick() {
    setDateRange({ ...dateRange, selectStartDate: true, selectEndDate: false });
  }

  function onInputEndClick() {
    setDateRange({ ...dateRange, selectStartDate: false, selectEndDate: true });
  }

  //HELPER FUNCTIONS
  //gets the name of the current month
  function getMonthTitle(month) {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return months[month];
  }

  //onclick function that sets the state of the datepicker to preview or next month
  function prevMonth() {
    if (datePicker.currentMonth - 1 < 0) {
      setDatePicker({ currentMonth: 11, currentYear: datePicker.currentYear - 1 });
      return;
    }
    setDatePicker({ ...datePicker, currentMonth: datePicker.currentMonth - 1 });
  }

  function nextMonth() {
    if (datePicker.currentMonth + 1 > 11) {
      setDatePicker({ currentMonth: 0, currentYear: datePicker.currentYear + 1 });
      return;
    }
    setDatePicker({ ...datePicker, currentMonth: datePicker.currentMonth + 1 });
  }

  //onclick function that clears the date range
  function clearDateRange() {
    setDateRange({
      selectStartDate: true,
      selectEndDate: false,
      startDate: null,
      endDate: null,
    });
  }

  //function that takes a date object as imput and formats it as dd/mm/yyyy
  function getDateFormatted(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
}

export default DatePicker;
