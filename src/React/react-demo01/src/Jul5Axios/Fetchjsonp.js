import React, {Component} from 'react';
import axios from 'axios'
import fetchJsonp from "fetch-jsonp";

class Fetchjsonp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[]
        }
    }
    getData(){
        var api = 'https://api.github.com/users/hadley/orgs'
        fetchJsonp(api)
            .then(function(response) {
                return response.json()
            }).then((json)=> {
                var list = [];
                json.data.map((value)=>{
                    list.push(value.login)
                })
                this.setState({
                    list:list
                })
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        })
    }
    render() {
        return (
            <div>
                <h2>Fetch Jsonp</h2>
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

export default Fetchjsonp;
