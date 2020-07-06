import React, {Component} from 'react';

class LifeCycle extends Component {
    constructor(props) {
        console.log('Constructor')
        super(props);
        this.state = {
            msg:'Init',
            hasError:true
        }
        this.listRef = React.createRef();
    }

    // Finish mount
    componentDidMount() {
        // DOM option, Request Data
        console.log('componentDidMount')
    }

    static getDerivedStateFromProps(){
        console.log('getDerivedStateFromProps')
        return {hasError:true}
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate')
        return true

    }
    //
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate')

        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
        console.log('-------------------------------------------')
    }

    componentWillUnmount() {
        console.log('Unmount')
    }


    render() {
        console.log('Render')
        return (
            <div>
                {this.state.msg}{this.props.title}
                <button onClick={()=>this.clickButton()}>Click</button>
            </div>
        );
    }

    clickButton() {
        this.setState({
            msg:'updated'
        });
    }
}

export default LifeCycle;
