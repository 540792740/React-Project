import React, {Component} from 'react';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        console.log(this.props.match.params.id)
        // console.log(this.props)
    }

    render() {
        return (
            <React.Fragment>
                <h1>User Component</h1>
            </React.Fragment>
        );
    }
}

export default User;
