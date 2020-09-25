import React, {Component} from 'react';

class JwtApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:null,
            password:null,
            login:false,
            store:null,
        }
    }
    login(){
        fetch('http://127.0.0.1:5000/api/login',{
            method:"POST",
            body:JSON.stringify(this.state)
        }).then((res)=>res.json().then((result)=>{
            console.warn("result",result)
            localStorage.setItem('login',JSON.stringify({
                login:true,
                token:result.token
            }))
        }))
    }
    render() {
        return (
            <div>
                <h1>JWT Token with React</h1>
                <div>
                    <input type="text" onChange={(e)=>{this.setState({email: e.target.value})}}/>
                    <input type="password" onChange={(e)=>{this.setState({password: e.target.value})}}/>
                    <button onClick={(e)=>this.login(e)}>Login</button>
                </div>
            </div>
        );
    }
}

export default JwtApp;
