import React, {Component} from 'react';
import HocComponent from "./HocComponent";

class HocComponentTest extends Component {
    render() {
        console.log('props', this.props)
        return (
            <div>
                {this.props.title} - {this.props.name}
            </div>
        );
    }
}

export default HocComponent(HocComponentTest);
