import React, {Component} from 'react';
import AxiosChild from "./AxiosChild";

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
                This is Home page of Axios
                <AxiosChild/>
            </div>
        );
    }
}

export default AxioHome;
