import React, {Component} from 'react';

class RefTest extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.myRef = React.createRef()
    }
    componentDidMount() {
        this.myRef.current.focus()
    }

    inputHandler(){
        console.log(this.myRef.current.value)
    }
    render() {
        return (
            <div>
                <input type="text"
                       ref={this.myRef}
                       onChange={(e)=>this.inputHandler(e)}
                />
            </div>
        );
    }
}

export default RefTest;
