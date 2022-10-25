import logo from './logo.svg';
import './App.css';
import Greet from './Greet';
import Welcome from './Welcome';
import Jsx from './JSX';
import StateClass from './StateClass'; 
import CountuseState from './CountuseState';
import FunctionalClick from './FunctionalClick';
import ClassesClass from './ClassClick';
import ClassClick from './ClassClick';
import BindingThis from './BindingThis';
import ParentComponent from './ParentComponent';
import ConditionalOperator from './ConditionalOperator';
import PersonList from './PersonList';


function App() {
  return (
    <div className="App">
     {/* <Greet name="Ali"><p>This is child tag</p> </Greet>
     <Greet name="Raj"/>
     <Greet name="Same"/>
     <Welcome />
     <Jsx></Jsx>
     <StateClass></StateClass>
     <CountuseState></CountuseState>
     <FunctionalClick></FunctionalClick>
     <ClassClick></ClassClick>
     <BindingThis></BindingThis>
     <ParentComponent/>
     <ConditionalOperator/> */}
     <PersonList/>
    </div>
  );
}

export default App;
