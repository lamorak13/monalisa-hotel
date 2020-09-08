import React from 'react';

function DatePickerForm(props) {
  let { datePickerForm, setDatePickerForm, submit } = props;

  function handleChange(e) {
    setDatePickerForm({
      ...datePickerForm,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <form onSubmit={(e) => submit(e)}>
      <input
        className='date-picker-form__input'
        name='name'
        type='text'
        value={datePickerForm.name}
        onChange={handleChange}
      />
      <input
        className='date-picker-form__input'
        name='lastName'
        type='text'
        value={datePickerForm.lastName}
        onChange={handleChange}
      />
      <input
        className='date-picker-form__input'
        name='email'
        type='text'
        value={datePickerForm.email}
        onChange={handleChange}
      />
      <input
        className='date-picker-form__input'
        name='numberOfPeople'
        type='number'
        min='1'
        value={datePickerForm.numberOfPeople}
        onChange={handleChange}
      />
      <button className='date-picker-form__submit' type='submit'>
        Book Now
      </button>
    </form>
  );
}

export default DatePickerForm;
