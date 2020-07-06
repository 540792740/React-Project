import React, {Component} from 'react';

class LifeCycle extends Component {
    constructor(props) {
        console.log('Constructor')
        super(props);
        this.state = {}
    }


    getDerivedStateFromProps(){
        console.log('getDerivedStateFromProps')
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate')
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate')
    }

    componentDidMount() {
        console.log('componentDidMount')
    }


    render() {
        return (
            <div>
                Render

            </div>
        );
    }
}

export default LifeCycle;
