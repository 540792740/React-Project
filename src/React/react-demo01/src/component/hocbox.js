import React, { Component } from 'react'

const withStorage = WrappedComponent => {
    return class extends Component{
        componentWillMount() {
            let data = "这是hoc的data"
            this.setState({ data : "Data State"})
        }
        _renderContent = () =>{
            return <div>
                这是 hoc 的content 内容
            </div>
        }
        render() {
            return <WrappedComponent _renderContent={this._renderContent}
                                     data={this.state.data}
                                     {...this.props}/>
        }
    }
}

export default withStorage
