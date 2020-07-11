import React, {Component} from 'react';

class MyComponent extends Component {
    constructor(props) {
        super(props);
        console.log('Constructor');
        this.state={
            num:2
        }
    }

    componentDidMount() {
        console.log('Did Mount')

    }

    static getDerivedStateFromProps(props, state) {
        console.log('Did getDriveStateFromProps')
        return null

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

    }

    buttonHandler(){
        console.log(this.state.num + 1)
        this.setState({
            num:this.state.num + 1
        })
    }
    render() {
        console.log('Render')
        return (
            <div>
                {this.state.num}
                <button onClick={()=>this.buttonHandler()}>Control</button>
            </div>
        );
    }

}

export default MyComponent;
