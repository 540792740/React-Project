import React, {Component} from 'react';
import logo from "../asserts/images/1.jpg"

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg:'News',
            list:['1111', '2222', '3333'],
            list2:[<h2>This is a h2 tag.</h2>, <h2>This is a h2 tag.</h2>]
        }
    }
    render() {
        let listResult = this.state.list.map(function(value, key){
            return <h3>{value}</h3>
        })
        return (
            <div className='news'>
                <h3>{this.state.msg}</h3>
                <img src={logo}/>
                <img src="https://dss1.bdstatic.com/6OF1bjeh1BF3odCf/it/u=1790140221,4180337232&fm=173&app=49&f=JPEG?w=218&h=146&s=09F8ED175E236401164B51640300E068"/> <hr/>
                {this.state.list2}
                {listResult}

            </div>
        );
    }
}

export default News;
