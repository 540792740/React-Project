import React from 'react';
// import './App.css';
import RouterHome from "./Component/RouterHome";
import DropDown from "./Component/DropDown";
import RouterApp from "./loginAuth/RouterApp";
import JwtApp from "./JWT/jwtApp";
import PostHttPform from "./HttpPost/PostHTTPform";

function App() {
  return (
      <div className="App">
          {/*<RouterHome/>*/}
          {/*<div className="dropDownCss"><DropDown/></div>*/}
          {/*<DropDown/>*/}
          <RouterApp/>
          <JwtApp/><hr/>
          <PostHttPform/>
      </div>
  );
}

export default App;
