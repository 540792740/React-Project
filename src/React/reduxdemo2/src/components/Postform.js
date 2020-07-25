import React, {Component} from 'react';

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

export default PostForm;
