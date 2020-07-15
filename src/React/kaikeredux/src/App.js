import React from 'react';
import './App.css';
import {Container, } from 'react-bootstrap'
import Subtotal from "./component/Subtotal/Subtotal";
import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total:100
        }
    }

    render() {
        return (
            <div className="container">
                <Container className='purchase-card'>
                    <Subtotal price={this.state.total}></Subtotal>
                </Container>
            </div>
        );
    }
}

export default App;
