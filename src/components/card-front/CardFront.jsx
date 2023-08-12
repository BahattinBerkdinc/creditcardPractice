import React from 'react'
import "./card.scss"
const CardFront = ({selectedMonth,selectedYear,cardName, cardNumber}) => {

  const formatCardNumber = (cardNumber) => {
    if (!cardNumber) {
      return '';
    }

    const formattedNumber = cardNumber.replace(/\s/g, ''); // Boşlukları temizle
    let result = '';

    for (let i = 0; i < formattedNumber.length; i++) {
      if (i > 0 && i % 4 === 0) {
        result += ' '; // Her 4 karakterde bir boşluk ekle
      }
      result += formattedNumber[i];
    }

    return result;
  };
  

  return (
    <div className='card'>
      <div className="card-filter">
      <div className="card-color blue"></div>
      <div className="card-color pink"></div>
      <div className="card-color yellow"></div>
      <div className="card-color red"></div>
      <div className="layout"></div>
      </div>
      <div className="card-content">
        <div className="card-content-top">
          <div className="big-circle"></div>
          <div className="middle-circle"></div>
          <div className="small-circle"></div>
        </div>
        <div className="card-content-bottom">
          <div className="card-number">{!formatCardNumber(cardNumber)?"0000 0000 0000 0000":formatCardNumber(cardNumber)}</div>
          <div className="info">
          <div className="name">{!cardName?"CARDHOLDER NAME":cardName}</div>
          <div className="date">{selectedMonth==="" ? 0 : selectedMonth+1}/{selectedYear%100}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardFront
