import React from 'react';
import logo from './asserts/images/logo.svg';
import './App.css';
import Home from "./component/Home";
import News from "./component/News";
import Page2 from "./component/Hoc/hocpage2";
import ReverseInput from "./component/Hoc/prototypeReverseHoc";
import ReactForm from "./component/ReactForm";

function App() {
  return (
    <div className="App">
        <h3>Hello World</h3>
        <Home></Home>
        <News></News>
        <hr/>
        <Page2/><hr/>
        <ReverseInput/>
        <hr/>
        <ReactForm/>

    </div>
  );
}

export default App;
