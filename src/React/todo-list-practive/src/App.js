import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
    constructor(props) {
        super(props);
    }
    state={
        persons:[
            {id:'1', name:'Peter', age:12},
            {id:'2', name:'Cris', age:22},
            {id:'3', name:'Jack', age:32},
        ]
    }

    render() {
        return (
            <div className='App'>
                <p>React</p>
                <Person name={this.state.persons[0].name}
                        id={this.state.persons[0].id}
                        age={this.state.persons[0].age}

                />
            </div>
        );
    }
}

export default App;
