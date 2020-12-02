import logo from './logo.svg';
import './App.css';
// import { Button } from '@material-ui/core';
//import Bank from './components/header/Bank';
import Bh from './components/header2/Hb';



function App() {
  return (
    <div className="App">
      {/* <Button color="primary">Hello World</Button>; */}
    {/* <Bank/> */}
    <Bh/>
    
      
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
