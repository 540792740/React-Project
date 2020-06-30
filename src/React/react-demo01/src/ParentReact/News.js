import React, {Component} from 'react';
import Header from "./Header";

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: 'This is New component',
            title:'New Component'
        }
    }
    run = () =>{
        alert('Run')
    }

    getData = () =>{
        alert('Data')
    }


    render() {
        return (
            <div>
                <Header run={this.run}
                        title={this.state.title}
                        news={this}
                />
                <br/><hr/><br/>
                This is Home Component
            </div>
        );
    }
}

export default News;
