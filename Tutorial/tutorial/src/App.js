import logo from './logo.svg';
import './App.css';
import Greet from './Greet';
import Welcome from './Welcome';

function App() {
  return (
    <div className="App">
     <Greet name="Ali"/>
     <Greet name="Raj"/>
     <Greet name="Same"/>
     <Welcome />
    </div>
  );
}

export default App;
