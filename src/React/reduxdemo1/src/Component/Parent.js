import React, {Component} from 'react';
import Child from "./Child";

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: 'Parent Component',
            name:'Parent',
            childMsg:""
        }
    }
    getChildrenMsg = (msg)=>{
        this.setState({
            childMsg:msg
        })
    }
    render() {
        return (
            <div>
                <h2 style={{color:'#b82222'}}>This is Parent component</h2>
                <Child parent={this}/>
                Child msg: {this.state.childMsg}
            </div>
        );
    }
}


export default Parent;
