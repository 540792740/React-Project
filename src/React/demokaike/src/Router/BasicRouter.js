import React, {Component} from 'react';
import './routers.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import User from "./User";
class BasicRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let pathObj = {pathname:'/user/9'}
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <NavLink to="/a/man"
                                     activeStyle={{color:'#4dc060'}}
                                     activeClassName={'selected'}
                            >Style of Male</NavLink>

                        </li>
                        <li>
                            <NavLink to="/a/woman"
                                     activeStyle={{color:'#4dc060'}}
                                     activeClassName={'selected'}
                            >Style of Female</NavLink>
                        </li>
                        {/*<li>*/}
                        {/*    <NavLink to="/user/5"*/}
                        {/*             activeStyle={{color:'#4dc060'}}*/}
                        {/*             activeClassName={'selected'}*/}
                        {/*    >User</NavLink>*/}
                        {/*</li>*/}
                        <li>
                            <NavLink to={pathObj}
                                     activeStyle={{color:'#4dc060'}}
                                     activeClassName={'selected'}
                            >User</NavLink>
                        </li>
                    </ul>

                    <hr />

                    {/*
        */}
                    <Switch>
                        <Route exact path="/a/man" component={Home}/>
                        <Route path="/a/woman" component={About}/>
                        <Route path="/user/:id" component={User}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default BasicRouter;
