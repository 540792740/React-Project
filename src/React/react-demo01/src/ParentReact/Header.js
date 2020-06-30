import React, {Component} from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: 'This is a header Component'
        }
    }
    getNews = () =>{
        alert(this.props.news.state.msg)
    }



    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <button onClick={this.props.run }>Run </button>
                <button onClick={this.props.news.getData}> data </button>
                <button onClick={this.getNews}> getNews </button>
                <button onClick={this.props.news.getChildData.bind(this, 'Child Data')}>
                    Get data from children
                </button>
            </div>
        );
    }
}

export default Header;
