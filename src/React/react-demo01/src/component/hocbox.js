import React, { Component } from 'react'

const withStorage = WrappedComponent => {
    return class extends Component{
        constructor(props) {
            super(props);
            this.state = {
                data : "Data State"
            }
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
