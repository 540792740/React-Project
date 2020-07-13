import React, {Component} from 'react';
import './routers.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
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
        let pathQuery = {
            pathname:'/userq/9',
            query:{id:4534}
        }
        let pathObj =  `/user/${JSON.stringify({id:1, name:'Jacl'})}`
        
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
                        <li>
                            <NavLink to="/user/5"
                                     activeStyle={{color:'#4dc060'}}
                                     activeClassName={'selected'}
                            >User</NavLink>
                        </li>
                        <li>
                            <Link to={{
                                pathname:'/pathQuery',
                                search:'?id=8',
                                state:{name:'Jack'},
                                query: {set:'Male'}
                            }}
                            >Query Link</Link>
                        </li>
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
                        <Route path="/pathQuery" component={User}/>
                        <Route path="/pathQuery/:obj" component={User}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default BasicRouter;
