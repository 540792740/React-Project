import React, {Component} from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: 'This is a header Component'
        }
    }
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <button onClick={this.props.run }>Run </button>
                <button onClick={this.props.news.getData}> data </button>

            </div>
        );
    }
}

export default Header;
