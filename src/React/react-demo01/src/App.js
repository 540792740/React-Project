import React from 'react';
import logo from './asserts/images/logo.svg';
import './App.css';
import Home from "./component/Home";
import News from "./component/News";
import HocComponentTest from "./component/HocComponent";

function App() {
  return (
    <div className="App">
        <h3>Hello World</h3>
        <Home></Home>
        <News></News>
        <hr/>
        <HocComponentTest/>
    </div>
  );
}

export default App;
