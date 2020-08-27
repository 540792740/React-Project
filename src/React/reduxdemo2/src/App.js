import './App.css';
import React, {Component} from 'react';
import Posts from "./components/Posts";
import PostForm from "./components/Postform";
import {Provider} from 'react-redux';
import store from './store'
import UseEffectTest from "./components/UseEffectTest";
import NEw from "./test/NEw";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag : true
        }
    }

    render() {
        return (
            <Provider store={store}>
                <NEw/>
                {/*<UseEffectTest/>*/}
                {/*<hr/>*/}
                {/*<div className='App'>*/}
                {/*    <PostForm/>*/}
                {/*    <hr/>*/}
                {/*    <Posts/>*/}
                {/*</div>*/}
            </Provider>

        );
    }
}

export default App;
