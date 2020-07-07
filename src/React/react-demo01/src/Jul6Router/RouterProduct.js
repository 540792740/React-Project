import React, {Component} from 'react';

class RouterProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[
                {aid:'1', title:'Product 1'},
                {aid:'2', title:'Product 2'},
                {aid:'3', title:'Product 3'},
                {aid:'4', title:'Product 4'},
            ]
        }
    }

    render() {
        return (
            <div>
                Router Product Component
            </div>
        );
    }
}

export default RouterProduct;
