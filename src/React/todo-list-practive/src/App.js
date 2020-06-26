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
            ],
            otherState:'Some other value',
        }
    }
    render() {
        const style ={
            backgroundColor:'#f86666',
            color:'#fff',
            borderRadius:'20px',
            border: '1px solid black'
        }

        return (
            <div className='App'>
                <p>React</p>
                <button style={style}
                        onClick={() => this.toggleHandler()}
                >Switch</button>
                {this.state.persons.map((value, key)=>{
                    return (
                        <Person key={key}
                                click={()=>this.switchNameHandle()}
                                personItem={value}
                                change={(event)=>{
                                    return this.nameChangeHandler(event, value.id)
                                }}
                        >{"Hello world, this is children prop"}</Person>
                    )
                })}
            </div>
        );
    }

    switchNameHandle() {
        this.setState({
            persons:[
                {id:'1', name:'Hob', age:12},
                {id:'2', name:'Cris', age:22},
                {id:'3', name:'Jack', age:32},
            ]
    })
    }

    nameChangeHandler(event, id) {
        var persons = this.state.persons;
        var name = event.target.value
        this.state.persons.map((value)=>{
            if(value.id === id){
                value.name = name
            }
        })
        this.setState({
            persons:persons
        })
    }

    toggleHandler() {
        return undefined;
    }
}

export default App;
