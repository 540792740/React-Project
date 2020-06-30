import React, {Component} from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.userNameRef = React.createRef()
    }

    componentDidMount() {
        this.userNameRef.current.focus();
    }

    render() {
        return (
            <div>
                <h2>Login Screen ...</h2>
                <p>
                    <label>UserName :
                        <input type="text"
                               ref={this.userNameRef}
                        />
                    </label>
                </p>
                <p>
                    <label>PassWord :
                        <input type="text"/>
                    </label>
                </p>
                <button>Login</button>


            </div>
        );
    }
}



export default Login;
