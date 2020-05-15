import React, {Component} from 'react';
import logo from "../asserts/images/1.jpg"

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg:'News',
            list:['1111', '2222', '3333'],
            list2:[<h2 key='1'>This is a h2 tag.</h2>, <h2 key='2'>This is a h2 tag.</h2>],
            list3:[
                {title:'News + 11111'},
                {title:'News + 22222'},
                {title:'News + 33333'},
                {title:'News + 44444'},
                {title:'News + 55555'}
            ]
        }
    }
    render() {
        let listResult = this.state.list.map(function(value, key){
            return <ul key={key}><li><h3 >{value}</h3></li></ul>
        });

        return (
            <div className='news'>
                {/*Class 3*/}
                {/*<h3>{this.state.msg}</h3>*/}
                {/*<img src={logo}/>*/}
                {/*<img src="https://dss1.bdstatic.com/6OF1bjeh1BF3odCf/it/u=1790140221,4180337232&fm=173&app=49&f=JPEG?w=218&h=146&s=09F8ED175E236401164B51640300E068"/> <hr/>*/}
                {/*{this.state.list2}*/}
                {/*{listResult}*/}
                {/*<hr/>*/}
                {/*<ul>*/}
                {/*    {*/}
                {/*        this.state.list3.map(function(value,key){*/}
                {/*            return <li key={key}>{value.title}</li>*/}
                {/*        })*/}
                {/*    }*/}
                {/*</ul>*/}


            </div>
        );
    }
}

export default News;
