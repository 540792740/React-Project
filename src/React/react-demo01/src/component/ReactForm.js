import React, {Component} from 'react';

class ReactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            sex:'0',
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



                    <br/>
                    <input type="submit" value='Submit'/>
                </form>
            </div>
        );
    }

    handleSubmit = (e)=> {
        e.preventDefault()
        console.log(this.state.name)
    }

    submitName= (e) =>{
            this.setState({
                name: e.target.value
            })
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
}

export default ReactForm;
