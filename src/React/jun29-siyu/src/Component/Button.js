import React, {Component} from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <button onClick={this.props.onclick}>
                    {this.props.text}
                </button>
            </div>
        );
    }
}

export default Button;
