import React, {Component} from 'react';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        // console.log(this.props.match.params.id)
        console.log(this.props)
    }
    goBack(){
        this.props.history.goBack();
    }
    goForward(){
        this.props.history.goForward();

    }
    render() {
        return (
            <React.Fragment>
                <h1>User Component</h1>
                <button onClick={e =>{this.goBack()}}>Go Back</button>
                <button onClick={e =>{this.goForward()}}>Go Forward</button>
            </React.Fragment>
        );
    }
}

export default User;
