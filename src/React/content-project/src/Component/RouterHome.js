import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./home";
import About from "./about";
import User from "./user";

function RouterHome(props) {
    return (
        <Router>
            <div className="App" >
                <header className="App-header">
                    <ul>
                        <li>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link to={
                                {
                                    pathname:"/about",
                                    state:{
                                        from:'root',
                                        value:''
                                    }
                                }}>About</Link>
                        </li>
                        <li>
                            <Link to={'/user/Peter/Wang'}>User</Link>
                        </li>
                    </ul>

                    <div>
                        <Switch>
                            <Route exact path='/'  component={Home}></Route>
                            <Route exact path='/about' component={About}></Route>
                            <Route exact path='/user/:firstName/:lastName' component={User}></Route>
                        </Switch>
                    </div>
                </header>
            </div>
        </Router>
    );
}

export default RouterHome;
