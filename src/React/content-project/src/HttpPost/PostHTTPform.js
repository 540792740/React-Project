import React, {Component} from 'react';
import axios from 'axios'

class PostHttPform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId:'',
            title:'',
            body:''
        }
    }
    changeHandler(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        const {userId, title, body} = this.state
        return (
            <div>
                <form onSubmit={(e)=>this.submitHandler(e)}>
                    <div><input type="text"
                                name='userId'
                                value={userId}
                                onChange={(e)=>this.changeHandler(e)}
                    /></div>
                    <div><input type="text"
                                name='title'
                                value={title}
                                onChange={(e)=>this.changeHandler(e)}
                    /></div>
                    <div><input type="text"
                                name='body'
                                value={body}
                                onChange={(e)=>this.changeHandler(e)}
                    /></div>
                    <button >Click</button>
                </form>
            </div>
        );
    }

    submitHandler(e) {
        e.preventDefault()
        console.log(this.state)
        return undefined;
    }
}

export default PostHttPform;
