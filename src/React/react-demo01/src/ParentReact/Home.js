import React, {Component} from 'react';
import './Header'
import Header from "./Header";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: 'This is Home component',
            title:'Title'
        }
    }
    render() {
        return (
            <div>
                <Header/>
            </div>
        );
    }
}

export default Home;
