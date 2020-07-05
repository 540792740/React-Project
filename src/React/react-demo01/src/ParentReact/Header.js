import React, {Component} from 'react';
import PropTypes from 'prop-types'

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
                {/*<button onClick={this.props.run }>Run </button>*/}
                {/*<button onClick={this.props.news.getData}> data </button>*/}
                {/*<button onClick={this.getNews}> getNews </button>*/}
                {/*<button onClick={this.props.news.getChildData.bind(this, 'Child Data')}>*/}
                {/*    Get data from children*/}
                {/*</button>*/}
            </div>
        );
    }
}
Header.defaultProps = {
    title:'Default Title',
}

// Type of pass data from parent
Header.propTypes={
    title: PropTypes.string,
    num: PropTypes.number,
}


export default Header;
