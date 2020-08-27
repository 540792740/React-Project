import React, {Component} from 'react';
import './App.css';
import {connect} from "react-redux"
import {createAdd, createSub} from "./actions/index"
import Button from "./Component/Button";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    onClick(){
        console.log('test log')
    }
    render() {
        return (
            <div>
                <Button text={'Text'} onClick={()=>this.onClick()}></Button>
            </div>
        );
    }
}

export default App;

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state={
//             fullName:`${props.firstName} ${props.lastName}`
//         }
//     }
//     render() {
//         var fullName = this.state.fullName
//         return (
//             <div>
//                 {fullName}
//             </div>
//         );
//     }
// }
//
// export default App;
//
//
//
//
//

// const App = (props) =>{
//     console.log(props)
//         return(
//             <div>
//                 Counter: {props.value.counter}
//                 <button onClick={props.handleAdd}>Add</button>
//                 <button onClick={props.handleSub}>Sub</button>
//             </div>
//         )
// }
// const mapStateToProps = (state) =>{
//     return {value: state}
// }
//
// const mapDispatchToProps = (dispatch) =>{
//     return {
//         handleAdd(){
//                 dispatch(createAdd())
//             },
//             handleSub(){
//                 dispatch(createSub())
//             }
//         }
// }
//
//
//
// export default connect (mapStateToProps, mapDispatchToProps)( App );





//
// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state={
//             value:0
//         }
//     }
//   render() {
//     return (
//         <div>
//             Counter:
//             {this.state.value}
//             <button onClick={()=>this.handleAdd()}>Add</button>
//             <button onClick={()=>this.handleSubscribe()}>Subscribe</button>
//         </div>
//     );
//   }
//
//     handleAdd() {
//         let i = this.state.value;
//             this.setState({
//             value: ++i
//         })
//     }
//
//     handleSubscribe() {
//         let i = this.state.value;
//         this.setState({
//             value: --i
//         })
//     }
//
//
// }
