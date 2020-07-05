import React from 'react';
import logo from './asserts/images/logo.svg';
import './App.css';
import News from "./component/News";
import Page2 from "./component/Hoc/hocpage2";
import ReverseInput from "./component/Hoc/prototypeReverseHoc";
import ReactForm from "./component/ReactForm";
import OneMoreForm from "./component/OneMoreForm";
import Header from "./ParentReact/Header";
import Home from "./ParentReact/Home";
import Ref from "./ParentReact/Ref";
import Login from "./ParentReact/Login";
import VideoPlayer from "./ParentReact/VideoPlayer";
import AxioHome from "./Jul5Axios/AxioHome";

function App() {
  return (
    <div className="App">
        {/*<h3>Hello World</h3> <hr/>*/}
        {/*<Home></Home>   <br/><hr/>*/}
        {/*<OneMoreForm/><br/><hr/>*/}
        {/*<News></News>*/}
        {/*<hr/>*/}
        {/*<Page2/><hr/>*/}
        {/*<ReverseInput/>*/}
        {/*<ReactForm/><hr/>*/}
        <Home/>
        <br/><hr/><br/>
        {/*<Ref/>*/}
        {/*<br/><hr/><br/>*/}
        {/*<Login/>*/}
        {/*<VideoPlayer/>*/}
        <AxioHome/>
    </div>
  );
}

export default App;
