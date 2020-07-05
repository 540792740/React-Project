import React, {Component} from 'react';
import AxiosChild from "./AxiosChild";
import Fetchjsonp from "./Fetchjsonp";

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
                {/*<AxiosChild/>*/}
                <Fetchjsonp/>
            </div>
        );
    }
}

export default AxioHome;
