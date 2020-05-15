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
        //Type 2
        this.getData2 = this.getData2.bind(this);
    }

    run(){
        alert("Here is a run function")
    }

    getData(){
        alert(this.state.msg)
    }

    getData2(){
        alert(this.state.msg)
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
                <button onClick={this.getData.bind(this)}>Type1: getData</button>
                <button onClick={this.getData2}>Type2: getData</button>


            </div>
        );
    }
}

export default Home;
