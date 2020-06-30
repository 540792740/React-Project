import React, {Component} from 'react';

class Ref extends Component {
    constructor(props) {
        super(props);
        this.quantityRef = React.createRef();
    }
    render() {
        return (
            <div>
                <p>
                    <label> Enter Quantity :
                        <input type="text"
                               ref={this.quantityRef}
                        />
                        <button onClick={() => this.incrementQuantity()}>+</button>
                    </label>
                </p>
            </div>
        );
    }

    incrementQuantity() {
        this.quantityRef.current.value++;
    }
}

export default Ref;
