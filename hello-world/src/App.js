import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'

function App() {
  return (
    <div className="App">
      <ParentComponent/>
      {/* <EventBind /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <Counter/> */}
      {/* <Message /> */}
      {/* <Greet name="Nyahehe" heroName="1">
        <p>Children props</p>
      </Greet>
      <Greet name="Hehehe" heroName="2">
        <button>Action</button>
      </Greet>
      <Greet name="Wahehe" heroName="3" /> */}
{/*
      <Welcome name="Nyahehe" heroName="1">
        <p>Children props</p>
      </Welcome>
      <Welcome name="Hehehe" heroName="2">
        <button>Action</button>
      </Welcome>
      <Welcome name="Wahehe" heroName="3"/> */}
      {/*
      <Welcome /> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
