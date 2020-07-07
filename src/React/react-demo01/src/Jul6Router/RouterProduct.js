import React, {Component} from 'react';
import {Link} from "react-router-dom";

class RouterProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[
                {aid:'1', title:'Product 1'},
                {aid:'2', title:'Product 2'},
                {aid:'3', title:'Product 3'},
                {aid:'4', title:'Product 4'},
            ]
        }
    }
    render() {
        return (
            <div>
                Router Product Component
                <ul>
                    {this.state.list.map((value, key)=>{
                        return (
                            <li key={key}>
                                <Link to={`/productContent?aid=${value.aid}`}>{value.title}</Link>
                            </li>
                        )})}
                </ul>
            </div>
        );
    }
}

export default RouterProduct;
