import React from 'react';
import logo from './asserts/images/logo.svg';
import './App.css';
import Home from "./component/Home";
import News from "./component/News";
import Page1 from './component/hocpage1';

function App() {
  return (
    <div className="App">
        <h3>Hello World</h3>
        <Home></Home>
        <News></News>
        <hr/>
        <Page1/>
    </div>
  );
}

export default App;
