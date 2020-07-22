import React, {Component} from 'react';

class RefChild extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg:'child data'
        }
    }
    buttonHandler(e){
        this.props.parent.buttonParent(this.state.msg)
    }
    render() {
        return (
            <div>
                <button onClick={(e)=>this.buttonHandler(e)}>Click</button>
            </div>
        );
    }
}

export default RefChild;
