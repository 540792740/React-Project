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
                Header Component
            </div>
        );
    }
}

export default Header;
