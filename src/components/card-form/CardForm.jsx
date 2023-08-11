import React, { useState } from 'react';
import './card-form.scss';
import { Button, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CardForm = () => {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  const handleMonthChange = (date) => {
    setSelectedMonth(date);
  };

  const handleYearChange = (date) => {
    setSelectedYear(date);
  };

  return (
    <Form className='card-form'>
      <Form.Label>CARDHOLDER NAME</Form.Label>
      <Form.Control type='text' placeholder='CARDHOLDER NAME' />

      <Form.Label>CARD NUMBER</Form.Label>
      <Form.Control type='text' placeholder='CARD NUMBER' />

      <div className='card-detail-info'>
        <Form.Group className='w-100'>
          <Form.Label>EXP. DATE (MM/YY)</Form.Label>
          <div className='d-flex gap-2'>
            <DatePicker className='datepicker form-control'
              selected={selectedMonth}
              onChange={handleMonthChange}
              dateFormat='MM'
              showMonthYearPicker
            />
            <DatePicker className='datepicker form-control'
              selected={selectedYear}
              onChange={handleYearChange}
              dateFormat='yy'
              showYearPicker
              yearDropdownItemNumber={10}
              scrollableYearDropdown
              minDate={new Date(2023, 0)}
              maxDate={new Date(2050, 11)}
            />
          </div>
        </Form.Group>
        <Form.Group className='w-100'>
          <Form.Label>CVC</Form.Label>
          <Form.Control type='number' placeholder='CVC' />
        </Form.Group>
      </div>
      <Button>Confirm</Button>
    </Form>
  );
};

export default CardForm;
