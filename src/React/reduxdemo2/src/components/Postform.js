import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { createPosts } from "../actions/psotActions";


class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            body:''
        }
        this.onChange = this.onChange.bind(this)
    }
    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        const post = {
            title:this.state.title,
            body: this.state.body,
        }
        this.props.createPosts(post)
    }

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={(e)=>this.onSubmit(e)}>
                    <div>
                        <label>Title:</label><br/>
                        <input type="text"
                               value={this.state.title}
                               name='title'
                               onChange={this.onChange}
                        />
                    </div><br/>
                    <div>
                        <label>Body:</label><br/>
                        <textarea name="body"
                                  value={this.state.body}                               onChange={()=>this.onChange()}
                                  onChange={this.onChange}
                        />
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}
PostForm.Prototype = {
    createPosts: PropTypes.func.isRequired
}

export default connect(null, {createPosts})(PostForm);
