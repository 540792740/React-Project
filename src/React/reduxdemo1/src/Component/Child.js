import React, {Component} from 'react';

class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: 'Child Component',
            name:'Child'
        }
    }
    toParent(e){
        this.props.parent.getChildrenMsg(this.state.msg)
    }

    render() {
        return (
            <div>
                {this.state.name} <br/>
                <button style={{border:'none', backgroundColor:'#797979', borderRadius:'30px'}}
                    onClick={(e) => this.toParent(e)}>Click</button>
            </div>
        );
    }
}

export default Child;
