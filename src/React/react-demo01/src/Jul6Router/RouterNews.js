import React, {Component} from 'react';
import {Link} from "react-router-dom";

class RouterNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[
                {aid:'1', title:'News 1'},
                {aid:'2', title:'News 2'},
                {aid:'3', title:'News 3'},
                {aid:'4', title:'News 4'},
            ]
        }
    }

    render() {
        return (
            <div>
                Router News Component
                <ul>
                    {this.state.list.map((value, key)=>{
                        return (
                            <li key={key}>
                                <Link to={`/content/${value.aid}`}>{value.title}</Link>
                            </li>
                        )})}
                </ul>

            </div>
        );
    }
}

export default RouterNews;
