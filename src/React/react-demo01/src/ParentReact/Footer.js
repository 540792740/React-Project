import React, {Component} from 'react';
import Header from "./Header";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: 'This is Footer component',
            title:'Footer Component'
        }
    }
    run = () =>{
        alert('Run')
    }

    getData = () =>{
        alert('Data')
    }

    getChildData = (result) =>{
        alert(result)
        this.setState({
            msg:result
        })
    }

    render() {
        return (
            <div>
                <h2>This is Footer Component</h2>
            </div>
        );
    }
}

export default Footer;
