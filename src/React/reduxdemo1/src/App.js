import React, {Component} from 'react';
import {connect} from "react-redux"
import {createAdd, createSub} from "./actions/actionType"


const App = (props) =>{
    console.log(props)
        return(
            <div>
                Counter: {props.value.counter.count}
                <button onClick={props.handleAdd}>Add</button>
                <button onClick={props.handleSub}>Sub</button>
            </div>
        )
}
const mapStateToProps = (state) =>{
    return {value: state}
}

const mapDispatchToProps = (dispatch) =>{
    return {
        handleAdd(){
                dispatch(createAdd())
            },
            handleSub(){
                dispatch(createSub())
            }
        }
}



export default connect (mapStateToProps, mapDispatchToProps)( App );
