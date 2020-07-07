import React, {Component} from 'react';

class RouterContent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    // Dynamic Router
    componentDidMount() {
        console.log(this.props.match.params.aid)
        // console.log(this.props)
    }

    render() {
        return (
            <div>
                <h3>Content</h3>

            </div>
        );
    }
}

export default RouterContent;
