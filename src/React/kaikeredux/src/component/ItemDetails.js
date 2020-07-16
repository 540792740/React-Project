import React, {Component} from 'react';
import {Row, Col, Button, Collapse, Media} from 'react-bootstrap'

class ItemDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open:false
        }
    }

    render() {
        const savingPrice = parseInt(this.props.price) - parseInt(this.props.PickupSavings)
        return (
            <div>
                <Button className='item-details-button'
                        variant='link'
                        onClick={()=> this.setState({open:!this.state.open})}
                >
                    {this.state.open === false ? `See` : `Hide`} Item details
                    {this.state.open === false ? ` +` :  ` -`}
                </Button>
                <Collapse in={this.state.open}>
                    <div>
                        <Media>
                            <img src='https://i5.wal.co/asr/8e60f4d0-6cfb-44bb-9676-eec9cc01dd02_1.800ef5e3234c65fb6a74293352a2aaa7.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff'
                                 width={220}
                                 height={160}
                                 className="mr-3"
                                 alt="Generic placeholder"
                            />
                        </Media>
                        <Media.Body>
                            <p>Super Car!</p>
                            <Row className='show-grid'>
                                <Col md={6}>
                                    <strong className='price-strike'>{`$${savingPrice}`}</strong>
                                    <br/>
                                    <strong >
                                        {`$${this.props.price}`}
                                    </strong>
                                </Col>
                                <Col md={6}>
                                    Qty: 1
                                </Col>
                            </Row>
                        </Media.Body>
                    </div>
                </Collapse>
            </div>
        );
    }
}

export default ItemDetails;
