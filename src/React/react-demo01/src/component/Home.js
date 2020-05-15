import React, {Component} from 'react';
import '../asserts/css/index.css'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:'Peter',
            age:30,
            msg:'Home Component',
            title:'A title',
            style:{
                color:'blue',
                fontSize:'40px'
            }
        }
    }

    run(){
        alert("Here is a run function")
    }

    render() {
        return (
            <div>
                {/*Class 3*/}
                {/*<h3 style={{"color":'red'}}>{this.state.msg}</h3>*/}
                {/*<p title={this.state.title}>{this.state.name}</p>*/}
                {/*<div className="red">Red Div</div>*/}
                {/*<label htmlFor="name">Name</label>*/}
                {/*<input id='name' type="text"/>*/}
                {/*<div style={this.state.style}>This is a blue style font</div>*/}

                {/*Class 4*/}
                <button onClick={this.run}>Run</button>

            </div>
        );
    }
}

export default Home;
