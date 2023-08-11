
import { Container } from 'react-bootstrap';
import './App.scss';
import CardBack from './components/card-back/CardBack';
import CardForm from './components/card-form/CardForm';
import CardFront from './components/card-front/CardFront';

function App() {
  return (
     <Container>
    <div className="App">
     <div className="card-page">
     <div className="left">
      <div className="layout-gradient"></div>
     <div className="cardfront">
     <CardFront />
     </div>
     <div className="cardback">
     <CardBack/>
     </div>
     </div>
     <div className="right">
     <CardForm/>
     </div>
     </div>
    </div>
     </Container>
  );
}

export default App;
