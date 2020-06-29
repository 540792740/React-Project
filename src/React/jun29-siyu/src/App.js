import React, {Component} from 'react';
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            value:0
        }
    }
  render() {
    return (
        <div>
            Counter:
            {this.state.value}
            <button onClick={()=>this.handleAdd()}>Add</button>
            <button onClick={()=>this.handleSubscribe()}>Subscribe</button>
        </div>
    );
  }

    handleAdd() {
        let i = this.state.value;
            this.setState({
            value: ++i
        })
    }

    handleSubscribe() {
        let i = this.state.value;
        this.setState({
            value: --i
        })
    }


}

export default App;
