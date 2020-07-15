import {Row, Col, Tooltip, OverlayTrigger} from "react-bootstrap";

import React, {Component} from 'react';

class PickupSsaving extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const tooltip = (
            <Tooltip id='tooltip'>
                <p>Picking up your order in the store helps cut cost, and we pass the saving to you</p>
            </Tooltip>
        )
        return (
            <Row className='show-grid'>
                <Col md={6}>
                    <OverlayTrigger placement='bottom' overlay={tooltip}>
                        <div style={styles.pickupSavings}>pickup Savings</div>
                    </OverlayTrigger>
                </Col>
                <Col style={styles.totalSavings} md={6}>
                    {`$${this.props.price}`}
                </Col>
            </Row>
        );
    }
}
var styles = {
    pickupSavings:{
        textDecoration:'underline',
    },
    totalSavings:{
        color:'red',
        fontWeight:800

    }
}

export default PickupSsaving;
