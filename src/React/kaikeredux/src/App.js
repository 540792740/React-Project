import React, {Component} from 'react';
import './App.css';
import {Container, } from 'react-bootstrap'
import Subtotal from "./component/Subtotal/Subtotal";

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
                    <Subtotal price={this.state.total.toFixed(2)}></Subtotal>
                </Container>
            </div>
        );
    }
}

export default App;
