import React from 'react';
// import './App.css';
import RouterHome from "./Component/RouterHome";
import DropDown from "./Component/DropDown";
import RouterApp from "./loginAuth/RouterApp";
import JwtApp from "./JWT/jwtApp";

function App() {
  return (
      <div className="App">
          {/*<RouterHome/>*/}
          {/*<div className="dropDownCss"><DropDown/></div>*/}
          {/*<DropDown/>*/}
          <RouterApp/>
          <JwtApp/>
      </div>
  );
}

export default App;
