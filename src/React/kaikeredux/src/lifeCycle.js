import React, {Component} from 'react';

class MyComponent extends Component {
    constructor(props) {
        super(props);
        console.log('constructor')
        this.state={
            flag:1
        }
    }

    componentDidMount() {
        console.log('Did Mount')
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );

    }

    static getDerivedStateFromProps(props, state) {
        console.log('Did getDriveStateFromProps')
        return null

    }
    tick() {
        this.setState({
            date: new Date()
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Should update?')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('get shnapshot')
        return null
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Did Update')
    }

    componentWillUnmount() {
        console.log('Unmounct')
        clearInterval(this.timerID);
    }
    buttonHandler(){
        this.setState({
            flag:this.state.flag + 1
        })}


    render() {
        console.log('render')
        return (
            <div>
                {this.state.flag}
                <button onClick={()=>this.buttonHandler()}>Click to add</button>
            </div>
        );
    }
}

export default MyComponent;
