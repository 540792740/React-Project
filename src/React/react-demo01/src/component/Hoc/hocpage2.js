import React, { Component } from 'react'
import withStorage from "./hocbox";

class Page2 extends Component{

    render() {
        return <div>
            <h2>{this.props.data}</h2>
            <div>
                这是组件Page2自己的内容
            </div>
            {this.props._renderContent()}
        </div>
    }
}

export default withStorage(Page2)
