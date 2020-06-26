import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";
import Radium, {StyleRoot} from "radium";

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
        const style = {
            backgroundColor:'#f86666',
            color:'#fff',
            borderRadius:'20px',
            border: '1px solid black',
            padding:'8px',
            cursor:'pointer',
            ':hover' : {
                backgroundColor:'pink',
                color: '#66d266'
            }
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
            style.backgroundColor = 'blue';
            style[':hover'] = {
                backgroundColor:'rgba(156,78,205,0.84)'
            }
        }
        const classes = []
        if(this.state.persons.length <= 2){
            classes.push('lightblue')
        }
        if(this.state.persons.length <= 1){
            classes.push('lightblue', 'bold')
        }

        return (
            // <StyleRoot>
                <div className='App'>
                    <p>React</p>
                    <p className={classes.join(' ')}>I'm Working Now</p>
                    <button style={style}
                            onClick={() => this.toggleHandler()}
                    >Hide</button>
                    {persons}
                </div>
            // </StyleRoot>

        );
    }
    switchNameHandle(id) {
        var persons = [...this.state.persons]
        persons = persons.filter((item)=>item.id !== id)
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

export default Radium(App);
