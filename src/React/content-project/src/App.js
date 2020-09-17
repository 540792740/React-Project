import React from 'react';
// import './App.css';
import RouterHome from "./Component/RouterHome";
import DropDown from "./Component/DropDown";
import RouterApp from "./JWT/RouterApp";

function App() {
  return (
      <div className="App">
          {/*<RouterHome/>*/}
          {/*<div className="dropDownCss"><DropDown/></div>*/}
          {/*<DropDown/>*/}
          <RouterApp/>
      </div>
  );
}

export default App;
