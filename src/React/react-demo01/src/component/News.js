import React, {Component} from 'react';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo:'Cris'
        }
    }
    render() {
        return (
            <div>
                <h3>{this.state.userInfo}</h3>
                <ul>
                    <li>List1</li>
                    <li>List2</li>
                    <li>List3</li>
                </ul>
            </div>
        );
    }
}

export default News;
