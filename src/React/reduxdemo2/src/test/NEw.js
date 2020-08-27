/*
* 1. Write a react code for the carousel, you can use this api for getting the pics: (≤15 mins)

	`https://jsonplaceholder.typicode.com/photos`
	For this api, add `/1` to the end of the url, you will get the first one photos object,
	Requirements:

	- need 5 pics from the api

	- there are two buttons on the each side of the pics, one is left, the other is right. Click left or right will change the pic, left for the left direction and right for the right.

	- center ur component plz

	- it will back to the first pic when reach the last one and click the right button, of course, head to the last one when reach the first page and click the left button.

	- (optional) add some transition to the pic if you are comfortable with this.
*/

import React, {Component} from 'react';

class NEw extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag : 1,
            data:[]
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/photos?_limit=5')
            .then(r => r.json())
            .then(d => this.setState({data: d}))
    }

    // d.map((e) =>e.url)


    render() {
        const urlPicture = this.state.data
        return (
            <div>
                {this.state.data.map((value, key)=>{
                    if(value.id === this.state.flag){
                        return (<div><img src={value.url}></img>
                        </div>)
                    }
                })}
                <button onClick={(e)=>this.buttonLeftHandler(e)}> {'<-'} </button>
                {this.state.flag}
                <button onClick={(e)=>this.buttonRightHandler(e)}> {'->'} </button>
            </div>
        );
    }

    buttonLeftHandler(e) {
        if(this.state.flag > 1){this.setState({flag:this.state.flag - 1})}
        else if(this.state.flag === 1) this.setState({flag:5})
    }

    buttonRightHandler(e) {
        if(this.state.flag < 5){this.setState({flag:this.state.flag+ 1})}
        else if(this.state.flag === 5) this.setState({flag:1})
    }
}

export default NEw;
