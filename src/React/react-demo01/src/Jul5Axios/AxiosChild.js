import React, {Component} from 'react';
import axios from 'axios'

class AxiosChild extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[]
        }
    }
    getData(){
        var api = 'https://api.github.com/users/hadley/orgs'
        axios.get(api)
            .then( (response)=> {
                var list = [];
                response.data.map((value)=>{
                    list.push(value.login)
                })
                this.setState({
                    list:list
                })
            })
            .catch( (error)=> {
                // handle error
                console.log(error);
            })
    }
    render() {
        return (
            <div>
                <h2>Axios</h2>
                <button onClick={()=>this.getData()}>GetData</button>
                <hr/>
                <ul>{
                    this.state.list.map((value, key) => {
                        return (
                            <li key={key}>
                                {value}
                            </li>
                        )

                    })}
                </ul>
            </div>
        );
    }
}

export default AxiosChild;
