
import { Container } from 'react-bootstrap';
import './App.scss';
import CardBack from './components/card-back/CardBack';
import CardForm from './components/card-form/CardForm';
import CardFront from './components/card-front/CardFront';
import { useState } from 'react';


function App() {

  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [cvcNumber, setCvcNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");

  return (
     <Container>
    <div className="App">
     <div className="card-page">
     <div className="left">
      <div className="layout-gradient"></div>
     <div className="cardfront">
     <CardFront cardName={cardName} cardNumber={cardNumber}  selectedMonth={selectedMonth} selectedYear={selectedYear} />
     </div>
     <div className="cardback">
     <CardBack cvcNumber={cvcNumber}/>
     </div>
     </div>
     <div className="right">
     <CardForm 
     selectedMonth={selectedMonth} 
     setSelectedYear={setSelectedYear} 
     setSelectedMonth={setSelectedMonth} 
     selectedYear={selectedYear}
     cvcNumber={cvcNumber}
     setCvcNumber={setCvcNumber}
     setCardName={setCardName}
     cardName={cardName}
     cardNumber={cardNumber}
     setCardNumber={setCardNumber}
    
     />
     </div>
     </div>
    </div>
     </Container>
  );
}

export default App;
