import React, {Component} from 'react';
import './App.css';
import MyComponent from "./React_01Test/LifeCycleComponent";
import ChildComponent from "./React_01Test/ChildComponent";

class App extends Component {

  render() {
    return (
        <div>
            <ChildComponent/>

            {/*LifeCycle*/}
            {/*<MyComponent/>*/}
        </div>
    );
  }
}

export default App;
