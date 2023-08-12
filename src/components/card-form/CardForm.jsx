
import './card-form.scss';
import { Button, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'

const CardForm = ({
  setSelectedMonth,
  setSelectedYear,
  setCvcNumber,
  setCardName,
  setCardNumber,
  selectedMonth,
  selectedYear,
  cvcNumber,
  cardName,
  cardNumber
}) => {
  
  
  const isFormComplete = selectedMonth && selectedYear && cardName && cvcNumber && cardNumber;

  const handleMonthChange = (date) => {
    const month = date.getMonth(); 
    setSelectedMonth(month);
  };

  const handleYearChange = (date) => {
    const year = date.getFullYear(); 
    setSelectedYear(year);
  };
  console.log(selectedMonth, selectedYear);

  const handleCvc = (e) => {
    const inputValue = e.target.value;
      setCvcNumber(inputValue);
  
  };

  const handleName = (e) => {
    let val = e.target.value;
    setCardName(val);
  }

  const handleCardNumber = (e) => {
    let val = e.target.value;
      setCardNumber(val);
    
  }

  const handleSubmit = (e) => {

    e.preventDefault();

    
    
    Swal.fire(
      'Harika! Ödemeniz Alındı!',
      'Siparişiniz Onay Aşamasında',
      'success'
    )
    setCardName("");
  setCardNumber("");
  setCvcNumber("");
  setSelectedMonth("");
  setSelectedYear("");
    

  }
  
  
  

  return (
  
      
          <Form noValidate  className='card-form' onSubmit={handleSubmit}>
      <Form.Label> NAME</Form.Label>
      <Form.Control type='text' placeholder=' NAME'
      onChange={handleName}
      value={cardName}
      />

      <Form.Label>NUMBER</Form.Label>
      <Form.Control type='number' placeholder='CARD NUMBER'
      onChange={handleCardNumber}
      value={cardNumber}
      maxLength="16" 
      onInput={(e)=>{
        e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,16)
      }}
     
      />

      <div className='card-detail-info'>
        <Form.Group className='w-100'>
          <Form.Label>EXP. DATE (MM/YY)</Form.Label>
          <div className='d-flex gap-2'>
            <DatePicker className='datepicker form-control'
              selected={selectedMonth}
              value={`${selectedMonth && selectedMonth+1}`}
              onChange={handleMonthChange}
              dateFormat='MM'
              showMonthYearPicker
            />
            <DatePicker className='datepicker form-control'
              selected={selectedYear}
              value={`${selectedYear}`}
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
          <Form.Control 
          type='number' 
          placeholder='CVC'
          value={cvcNumber}
          onChange={handleCvc}
          maxLength={3}
          onInput={(e)=>{
            e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,3)
          }}
          />
        </Form.Group>
      </div>
      <Button disabled={!isFormComplete} type='submit'>Confirm</Button>
    </Form>
   
  );
};

export default CardForm;
