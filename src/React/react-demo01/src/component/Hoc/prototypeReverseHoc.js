import React, { Component } from 'react';
import withStorage from './prototypehoc';
class ReverseInput extends Component{
    constructor(props){
        super(props);
        this.state = {value:''}
    }
    render(){
        const { value } = this.state;
        return (
            <div>
                <input onChange={this.valueChange} value={value}/>
                <button onClick={this.toSubmit}>Submit</button> <br/>
                <button onClick={this._alert}>Alert</button>
            </div>
        )
    }
}
export default withStorage(ReverseInput)
