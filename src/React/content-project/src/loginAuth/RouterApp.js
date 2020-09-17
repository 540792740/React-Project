import React, {Component} from 'react';
import {Link, Switch, Route, BrowserRouter as Router,} from 'react-router-dom';
import Login from "./Login";
import Admin from "./Admin";
import Logout from "./Logout";

class RouterApp extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Login}></Route>
                    <Route path="/admin" component={Admin}></Route>
                    <Route path="/logout" component={Logout}></Route>
                </Switch>
            </Router>
        );
    }
}
const A = ()=>{
    return(
        <div>
            <h1>Component A</h1>
        </div>
    )
}
const B = ()=>{
    return(
        <div>
            <h1>Component B</h1>
        </div>
    )
}

export default RouterApp;
