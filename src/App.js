// import logo from './logo.svg';
import './App.css';
// import Hello from './mycomponents/Hello.js';
// import Welcome from './mycomponents/Welcome';
// import Arrow from './mycomponents/Arrow';
// import Hello2 from './mycomponents/Hello2';
// import Condition from './mycomponents/Condition';
// import Refresh from './mycomponents/Refresh';
// import Newdemo from './mycomponents/Newdemo';
// import Anotherdome from './mycomponents/Anotherdome';
// import Form from './mycomponents/Form';
// import Signup from './mycomponents/Signup';
// import Textarea from './mycomponents/Textarea';
// import Select from './mycomponents/Select';
// import List from './mycomponents/List';
// import JsonList from './mycomponents/JsonList';
import Styles from './Mycss.module.css';
import './Mysass.scss'
function App() {

  const textStyle={
    backgroundColor:"red",
    color:"white",
    margin:"40px",
    padding:"30px"
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* <Hello age="23" name="rabub"></Hello>

      <Welcome name="class 1"></Welcome>

      <Arrow/>

      <Hello2/>

      <Condition/>

      <Refresh/> */}

      {/* <Newdemo/> */}
      {/* <Anotherdome/> */}
      {/* <Form/> */}
      {/* <Signup/> */}
      {/* <Textarea/> */}
      {/* <Select/> */}
      {/* <List></List> */}
      {/* <JsonList></JsonList> */}

      <h1 style={{ color:"red" }}>My name is safwan</h1>.
      <h1 style={{ backgroundColor:"green",color:"white" }}>My name is safwan</h1>.
      <h1 style={textStyle}>My name is safwan</h1>.
      <h2 className="TextStyle2">My name is safwan</h2>.
      
      <h3 className={Styles.TextStyle3}>My name is safwan</h3>

      <h4 className="TextStyle4">My name is safwan</h4>
    </div>
  );
}

export default App;
