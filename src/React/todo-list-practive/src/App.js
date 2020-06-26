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
            showPerson:true
        }
    }
    render() {
        const style ={
            backgroundColor:'#f86666',
            color:'#fff',
            borderRadius:'20px',
            border: '1px solid black'
        }
        let persons = null;
        if(this.state.showPerson) {
            persons = (
                <div>
                    {this.state.persons.map((value, key) => {
                        return (
                            <Person key={key}
                                    click={() => this.switchNameHandle(value.id)}
                                    personItem={value}
                                    change={(event) => {
                                        return this.nameChangeHandler(event, value.id)
                                    }}
                            >{"Hello world, this is children prop"}</Person>
                        )
                    })}
                </div>
            )
        }
        else{
            persons= <div></div>
        }

        return (
            <div className='App'>
                <p>React</p>
                <button style={style}
                        onClick={() => this.toggleHandler()}
                >Hide</button>
                {persons}
            </div>
        );
    }
    switchNameHandle(id) {
        var persons = this.state.persons
        console.log(id)
        persons = persons.splice(parseInt(id),1)
        console.log(persons)
        this.setState({
            persons:persons
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
        const showPerson = !this.state.showPerson
        this.setState({
            showPerson:showPerson
        })
    }
}

export default App;
