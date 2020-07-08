import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./component/Home";
import '../src/assert/css/basic.css'
import '../src/assert/css/index.css'
import PContent from "./component/Pcontent";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                    </ul>
                    <hr />
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/pContent/:id" component={PContent}></Route>
                        <Route exact path="/" component={Home}></Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
