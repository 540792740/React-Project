import React, {Component} from 'react';

class ReactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            sex:'0',
            name2:'',
            city:'',
            cities:['Beijing', 'Shanghai', 'Shenzhen'],
            hobby:[
                {title:'Sleep', 'checked': true},
                {title:'Eat', 'checked': false},
                {title:'Coding', 'checked': true}
            ],
            info:''
        };
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/*Username*/}
                    Username: <input type="text"
                           value={this.state.name}
                           onChange={this.submitName}
                    /> <br/>

                    {/*Gender*/}
                    Gender: <input type="radio"
                                   checked={this.state.sex === '1'}
                                   value='1'
                                   onChange={this.handleSex}/> Male
                    Gender: <input type="radio"
                                   checked={this.state.sex === '2'}
                                   value='2'
                                   onChange={this.handleSex}/> Female
                    <br/>

                    {/*City*/}

                    City: <select value={this.state.city} onChange={this.handleCity}>
                        {this.state.cities.map((value, key)=>{
                            return <option key={key}>{value}</option>
                        })}
                    </select> <br/>

                    {/*Hobby*/}
                    Hobby: {this.state.hobby.map((value, key)=>{
                        return(
                            <span key={key}>
                                <input type="checkbox" checked={value.checked}
                                       onChange={() => this.handleHobby(key)}

                                />{value.title}
                            </span>
                        )})}
                    <br/>

                    {/* Additional Information  */}
                    Additionally: <br/>
                    <textarea value={this.state.info}
                              rows="10"
                              onChange={(e) => this.handleInfo(e)}
                    ></textarea>

                    <br/>
                    <input type="submit" value='Submit'/>
                </form>
            </div>
        );
    }

    handleSubmit = (e)=> {
        e.preventDefault()
        console.log(this.state.name)
        console.log(this.state.sex)
        console.log(this.state.cities)
        console.log(this.state.hobby)
        console.log(this.state.info)
        console.log(this.state)
    }

    submitName= (e) =>{
        var a = e.target.value;
        var b  = a.split('')
        console.log(b[b.length - 1])
        var newB = this.state.name2;
        newB += b[b.length - 1]

        this.setState({
            name: e.target.value,
            name2:newB
        })
        console.log(newB)
        console.log(a)
    }

    handleSex = (event) =>{
        this.setState({
            sex:event.target.value
        })
    }

    handleCity = (event) => {
        this.setState({
            city:event.target.value
        })
    }

    handleHobby(key){
        var hobby = this.state.hobby;

        hobby[key].checked = !hobby[key].checked;

        this.setState({
            hobby: hobby
        })
    }

    handleInfo(e) {
        this.setState({
            info:e.target.value
        })
    }
}

export default ReactForm;
