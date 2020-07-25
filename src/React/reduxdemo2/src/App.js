import './App.css';
import React, {Component} from 'react';
import Posts from "./components/Posts";
import PostForm from "./components/Postform";
import {Provider} from 'react-redux';
import store from './store'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Provider store={store}>
                <div className='App'>
                    <PostForm/>
                    <hr/>
                    <Posts/>
                </div>
            </Provider>

        );
    }
}

export default App;
