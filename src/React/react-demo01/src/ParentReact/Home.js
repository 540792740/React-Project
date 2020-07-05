import React, {Component} from 'react';
import Header from "./Header";
import News from "./News";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: 'This is Home component',
            title:'Home Component'
        }
    }
    render() {
        return (
            <div>
                <Header title={this.state.title} num={20}/>
                <br/><hr/><br/>
                This is Home Component
                <br/><hr/><br/>
                <News/>
                This is News Component
            </div>
        );
    }
}

export default Home;
