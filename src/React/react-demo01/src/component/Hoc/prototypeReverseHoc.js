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
                <button onClick={this.toSubmit}>sSubmit</button>
            </div>
        )
    }
}
export default withStorage(ReverseInput)
