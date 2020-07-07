import React, {Component} from 'react';
import url from 'url';

class RouterProductContent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    // Dynamic Router
    componentDidMount() {
        console.log(url.parse(this.props.location.search, true).query)
    }

    render() {
        return (
            <div>
                <h3>RouterProductContent</h3>
            </div>
        );
    }
}

export default RouterProductContent;
