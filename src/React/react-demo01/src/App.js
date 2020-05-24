import React from 'react';
import logo from './asserts/images/logo.svg';
import './App.css';
import Home from "./component/Home";
import News from "./component/News";
import HocComponent from "./component/HocComponent";

function App() {
  return (
    <div className="App">
        <h3>Hello World</h3>
        <Home></Home>
        <News></News>
        <hr/>
        <HocComponent/>
    </div>
  );
}

export default App;
