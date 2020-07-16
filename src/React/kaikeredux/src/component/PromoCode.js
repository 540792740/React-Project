import React, {Component} from 'react';
import {Row, Col,
    Button,
    Collapse,
    Media,
    FormGroup,
    Form,
    FormControl} from 'react-bootstrap'

class PromoCode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open:false,
            value:''
        };
    }
    changeHandler(){

    }
    render() {
        return (
            <div>
                <Button className='promo-code-button'
                        variant='link'
                        onClick={()=>this.setState({open: !this.state.open})}
                >
                    {this.state.open === false ? `Apply` : `Hide`}
                    Promo Code
                    {this.state.open === false ? ` +` : ` -`}
                </Button>
                <Collapse in={this.state.open}>
                    <Row className='show-grid'>
                        <Col md={12}>
                            <Form>
                                <FormGroup controlId='formInlineName'>
                                    <Form.Label>Promo Code</Form.Label>
                                    <FormControl
                                        type='text'
                                        placeholder='Enter Promo Code'
                                        value={this.props.promoCode}
                                        onChange={(e)=>this.changeHandler(e)}
                                    />
                                </FormGroup>
                                <Button block
                                        variant='success'
                                        className='btn-round'
                                        disabled={this.props.isDisabled}
                                        onClick={this.props.giveDiscount}
                                >
                                    Apply
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Collapse>
            </div>
        );
    }
}

export default PromoCode;
