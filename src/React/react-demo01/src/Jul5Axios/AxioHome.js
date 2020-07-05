import React, {Component} from 'react';
import Axios from 'axios'

class AxioHome extends Component {
    constructor(props) {
        super(props);
        this.state={
            title:'Home Axios'
        }
    }
    render() {
        return (
            <div>
                <Axios/>
                This is Home page of Axios
            </div>
        );
    }
}

export default AxioHome;
