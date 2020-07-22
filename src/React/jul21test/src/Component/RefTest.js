import React, {Component} from 'react';
import RefChild from "./RefChild";

class RefTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg:'this is parent'
        }
        this.myRef = React.createRef()
        this.myChildRef = React.createRef()
    }
    componentDidMount() {
        this.myRef.current.focus()
    }

    inputHandler(){
        console.log(this.myRef.current.value)
    }
    buttonParent(e){
        this.setState({
            msg:e
        })
    }
    render() {
        return (
            <div>
                <input type="text"
                       ref={this.myRef}
                       onChange={(e)=>this.inputHandler(e)}
                />
                {this.state.msg}
                <RefChild parent={this} />
            </div>
        );
    }
}

export default RefTest;
