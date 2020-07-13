import React, {Component} from 'react';
import './App.css';
import MyComponent from "./React_01Test/LifeCycleComponent";
import ChildComponent from "./React_01Test/ChildComponent";
import BasicRouter from "./Router/BasicRouter";

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
        let dom = 'Dom1';
        let dom2 = 123;
      return (
        <React.Fragment>
            <BasicRouter/>

            {/*Parent Children transition*/}
            {/*<ChildComponent age={age}*/}
            {/*                name={name}*/}
            {/*                header={header}*/}
            {/*                footer={footer}*/}
            {/*                text={123}*/}
            {/*>Parent Data*/}
            {/*</ChildComponent>*/}
            {/*<ChildComponent age={age}>{dom}</ChildComponent>*/}
            {/*<ChildComponent>{dom2}</ChildComponent>*/}

            {/*LifeCycle*/}
            {/*<MyComponent/>*/}
        </React.Fragment>
    );
  }
}

export default App;
