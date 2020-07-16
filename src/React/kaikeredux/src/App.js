import React, {Component} from 'react';
import './App.css';
import {Container, } from 'react-bootstrap'
import Subtotal from "./component/Subtotal";
import PickupSsaving from "./component/PickupSsaving";
import ServiceFees from "./component/ServiceFees";
import EstimatedTotal from "./component/EstimatedTotal";
import ItemDetails from "./component/ItemDetails";
import PromoCode from "./component/PromoCode";
import LifeCycle from "./lifeCycle";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total:100000,
            PickupSavings: -1000,
            taxes: 0,
            estimatedTotal: 0,
            disablePromoButton: false,

        }
    }
    // componentDidMount() {
    //     this.setState({
    //         taxes:(this.state.total + this.state.PickupSavings) * 0.00875
    //     },
    //         function () {
    //             this.setState({
    //                 estimatedTotal:this.state.total + this.state.PickupSavings + this.state.taxes
    //             })
    //         })
    // }
    //
    // giveDiscountHandler(){
    //
    // }
    render() {
        return (
            <div className="container">
                {()=>this.control() }
                {/*<Container className='purchase-card'>*/}
                {/*    <Subtotal price={this.state.total.toFixed(2)}/>*/}
                {/*    <PickupSsaving price={this.state.PickupSavings} />*/}
                {/*    <ServiceFees taxes={this.state.taxes.toFixed(2)}/>*/}
                {/*    <hr/>*/}
                {/*    <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)}/>*/}
                {/*    <ItemDetails price={this.state.estimatedTotal.toFixed(2)}*/}
                {/*                 PickupSavings={this.state.PickupSavings}*/}
                {/*    />*/}
                {/*    <hr/>*/}
                {/*    <PromoCode giveDiscount={()=>this.giveDiscountHandler()}*/}
                {/*               isDisabled={this.state.disablePromoButton}*/}

                {/*    />*/}
                {/*</Container>*/}
                <LifeCycle/>
            </div>
        );
    }
}

export default App;
