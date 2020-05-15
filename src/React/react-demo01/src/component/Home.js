import React, {Component} from 'react';

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
                <p>{this.state.age}</p>
            </div>
        );
    }
}

export default Home;
