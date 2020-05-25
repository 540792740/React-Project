import React, { Component } from 'react'
import withStorage from "./hocbox";

class Page1 extends Component{

    render() {
        console.log(this.props)
        return <div>
            <h2>{this.props.data}</h2>
            <div>
                这是组件Page1自己的内容
            </div>
            {this.props._renderContent()}

        </div>
    }
}

export default withStorage(Page1)
