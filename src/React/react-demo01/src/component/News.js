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
            <div className='news'>
                <h3>{this.state.msg}</h3>
                <img src={logo}/>
                <img src="https://dss1.bdstatic.com/6OF1bjeh1BF3odCf/it/u=1790140221,4180337232&fm=173&app=49&f=JPEG?w=218&h=146&s=09F8ED175E236401164B51640300E068"/>
            </div>
        );
    }
}

export default News;
