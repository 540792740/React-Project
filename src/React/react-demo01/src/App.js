import React, {Component} from 'react';
import './App.css';
import LifeCycle from "./LifeCycle/LifeCycle";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import RouterHome from "./Jul6Router/RouterHome";
import RouterNews from "./Jul6Router/RouterNews";
import RouterProduct from "./Jul6Router/RouterProduct";
import RouterContent from "./Jul6Router/RouterContent";
import RouterProductContent from "./Jul6Router/RouterProductContent";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'App.js title',
            flag:true
        }
    }
    setFlag() {
        this.setState({
            flag:!this.state.flag
        })
    }
    render() {
        return (
            <Router>
                <div>
                    <div className='title'>
                        <Link to="/">Home</Link>
                        <Link to="/news">News</Link>
                        <Link to="/product">Product</Link>
                    </div>
                    <Switch>
                        <Route exact path="/" component={RouterHome}></Route>
                        <Route path="/news" component={RouterNews}></Route>
                        <Route path="/product" component={RouterProduct}></Route>
                        <Route path="/productContent" component={RouterProductContent}></Route>
                        <Route path="/content/:aid" component={RouterContent}></Route>
                    </Switch>
                </div>
                <div className="App">
                    {/*<h3>Hello World</h3> <hr/>*/}
                    {/*<Home></Home>   <br/><hr/>*/}
                    {/*<OneMoreForm/><br/><hr/>*/}
                    {/*<News></News>*/}
                    {/*<hr/>*/}
                    {/*<Page2/><hr/>*/}
                    {/*<ReverseInput/>*/}
                    {/*<ReactForm/><hr/>*/}
                    {/*<Home/>*/}
                    {/*<br/><hr/><br/>*/}
                    {/*<Ref/>*/}
                    {/*<br/><hr/><br/>*/}
                    {/*<Login/>*/}
                    {/*<VideoPlayer/>*/}
                    {/*Jul 5<AxioHome/>*/}
                    {/*{this.state.flag?<LifeCycle title={this.state.title}/>:''}*/}
                    {/*<button onClick={()=>this.setFlag()}>Unmount</button>*/}
                    {/*<br/><hr/><br/>*/}
                </div>
            </Router>



        );
    }
}


export default App;
