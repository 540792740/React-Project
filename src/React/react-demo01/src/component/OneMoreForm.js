import React, {Component} from 'react';

class OneMoreForm extends Component {
    constructor(props) {
        super(props);
        this.state= {
            inputText:'',
            sex : '0',
            cities:['BJ','SH','HB'],
            hobby:[
                {title:'sleep', 'checked':true},
                {title:'Eat', 'checked':false},
                {title:'Coding', 'checked':true}
            ]
        }
    }

    render() {
        return (
            <form onSubmit={()=>this.formSubmit()}>
                <h3>Form</h3>
                Username : <input type="text"
                                 value={this.state.inputText}
                                 onChange={(e)=>{this.updateInput(e)}}
                /> <br/>
                Gender : <input type="radio"
                                value={'1'}
                                checked={this.state.sex === '1'}
                                onToggle={(e)=>{this.sexHandle(e)}}
                />Male <br/>
                Gender : <input type="radio"
                                value={'2'}
                                checked={this.state.sex === '2'}
                />Female <br/>
                City: <select>
                        {this.state.cities.map((value,key)=>{
                            return(
                                <option key={key}>
                                    {value}
                                </option>
                            )
                        })} <br/>
                Hobby: {this.state.hobby.map((value, key)=>{
                    return(
                        <span key={key}>
                            <input type="checkbox"
                                   onChange={()=>{this.hobbyHandle(key)}}/>
                            {value.title}
                        </span>
                    )
            })}
                </select>


            </form>
            );
    }

    formSubmit() {
        return undefined;
    }
    updateInput(e){
        this.setState({
            inputText:e.target.value,
        })
    }
    sexHandle(e){
        this.setState({
            sex:e.target.value,
        })
    }
    hobbyHandle(key){
        var hobby = this.state.hobby;

        hobby[key].checked = !hobby[key].checked
        this.setState({
            hobby:hobby
        })
    }

}

export default OneMoreForm;
