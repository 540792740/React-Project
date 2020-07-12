import React, {Component} from 'react';
import './App.css';
import MyComponent from "./React_01Test/LifeCycleComponent";
import ChildComponent from "./React_01Test/ChildComponent";

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            age:12, name:'jack'
        }
    }
  render() {
        let{name, age} = this.state;
        let header = <div>Header</div>;
        let footer = <div>footer</div>;

      return (
        <div>
            <ChildComponent age={age}
                            name={name}
                            header={header}
                            footer={footer}
                            text={123}
            >Parent Data
            </ChildComponent>

            {/*LifeCycle*/}
            {/*<MyComponent/>*/}
        </div>
    );
  }
}

export default App;
