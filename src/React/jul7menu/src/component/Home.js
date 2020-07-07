import React, {Component} from 'react';
const axios = require('axios')

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    requestData = ()=>{
        var api = 'http://a.itying.com/api/productlist';
        axios.get(api)
            .then((response)=> {
                // handle success
                this.setState({
                    list:response.data.result
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    componentDidMount() {
        this.requestData()
    }

    render() {
        return (
            <div className='home'>
                <div className="list">
                    <div className="item">
                        <h3 className="item_cate">皮蛋瘦肉粥</h3>
                        <ul className="item_list">
                            <li>
                                <div className="inner">
                                    <img src={require('../assert/images/1.jpg')}/>
                                        <p className="title">大蒜腊肉</p>
                                        <p className="price">¥26</p>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
