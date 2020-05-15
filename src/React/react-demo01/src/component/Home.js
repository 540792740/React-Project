import React, {Component} from 'react';
import '../asserts/css/index.css'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:'Peter',
            age:30,
            msg:'Home Component',
            title:'A title'
        }
    }
    render() {
        return (
            <div>
                <h3>{this.state.msg}</h3>
                <p title={this.state.title}>{this.state.name}</p>
                <div className="red">Red Div</div>
                <label htmlFor="name">Name</label>
                <input id='name' type="text"/>
            </div>
        );
    }
}

export default Home;
