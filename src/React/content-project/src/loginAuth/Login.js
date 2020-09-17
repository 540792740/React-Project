import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props);
        let loggedIn = false
        this.state = {
            username:'',
            password:'',
            loggedIn,
        }
    }

    render() {
        if(this.state.loggedIn){
            return <Redirect to='/admin'></Redirect>
        }
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={(e)=>this.submitForm(e)}>
                    <input type="text"
                           placeholder="username"
                           name="username"
                           value={this.state.username}
                           onChange={(e)=>this.onChange(e)}
                    /><br/>
                    <input type="text"
                           placeholder="password"
                           name="password"
                           value={this.state.password}
                           onChange={(e)=>this.onChange(e)}
                    /><br/>
                    <input type="submit"/>
                </form>
            </div>
        );
    }

    submitForm(e) {
        e.preventDefault()
        const { username, password} = this.state
        if(username === "a" && password === 'b'){
            localStorage.setItem('token','absihjijf')
            this.setState({loggedIn:true})
        }
    }
    onChange(e){
        this.setState({
            [e.target.name]:e.target.value,
        })
    }
}

export default Login;
