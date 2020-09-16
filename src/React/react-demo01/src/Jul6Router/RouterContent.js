import React, {Component} from 'react';

class RouterContent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    // Dynamic RouterHome
    componentDidMount() {
        console.log(this.props.match.params.aid)
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
