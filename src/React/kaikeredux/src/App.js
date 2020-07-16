import React, {Component} from 'react';
import './App.css';
import {Container, } from 'react-bootstrap'
import Subtotal from "./component/Subtotal";
import PickupSsaving from "./component/PickupSsaving";
import ServiceFees from "./component/ServiceFees";
import EstimatedTotal from "./component/EstimatedTotal";
import ItemDetails from "./component/ItemDetails";
import PromoCode from "./component/PromoCode";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total:100,
            PickupSavings: -3.85,
            taxes: 0,
            estimatedTotal: 0,
            disablePromoButton: false,

        }
    }
    componentDidMount() {
        this.setState({
            taxes:(this.state.total + this.state.PickupSavings) * 0.0875
        },
            function () {
                this.setState({
                    estimatedTotal:this.state.total + this.state.PickupSavings + this.state.taxes
                })
            })
    }

    giveDiscountHandler(){

    }
    render() {
        return (
            <div className="container">
                <Container className='purchase-card'>
                    <Subtotal price={this.state.total.toFixed(2)}/>
                    <PickupSsaving price={this.state.PickupSavings} />
                    <ServiceFees taxes={this.state.taxes.toFixed(2)}/>
                    <hr/>
                    <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)}/>
                    <ItemDetails price={this.state.estimatedTotal.toFixed(2)}/>
                    <hr/>
                    <PromoCode giveDiscount={()=>this.giveDiscountHandler()}
                               isDisabled={this.state.disablePromoButton}

                    />
                </Container>
            </div>
        );
    }
}

export default App;
