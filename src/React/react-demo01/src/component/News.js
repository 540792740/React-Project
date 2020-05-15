import React, {Component} from 'react';
import logo from "../asserts/images/1.jpg"

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg:'News'
        }
    }
    render() {
        return (
            <div>
                <h3>{this.state.msg}</h3>
                <img src={logo}/>
            </div>
        );
    }
}

export default News;
