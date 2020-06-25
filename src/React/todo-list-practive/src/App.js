import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            persons:[
                {id:'1', name:'Peter', age:12},
                {id:'2', name:'Cris', age:22},
                {id:'3', name:'Jack', age:32},
            ]
        }
    }


    render() {
        return (
            <div className='App'>
                <p>React</p>
                <button>Switch</button>
                <Person click={()=>this.switchNameHandle()}
                        personItem={this.state.persons[0]}
                >{"Hello world, this is children prop"}</Person>
            </div>
        );
    }

    switchNameHandle() {
        this.setState({
            persons:[
                {id:'1', name:'Boss', age:12},
                {id:'2', name:'Cos', age:22},
                {id:'3', name:'Moss', age:32},
            ]
        })
    }
}

export default App;
