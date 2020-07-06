import React, {Component} from 'react';
 import './App.css';
import LifeCycle from "./LifeCycle/LifeCycle";


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

                {this.state.flag?<LifeCycle title={this.state.title}/>:''}
                <button onClick={()=>this.setFlag()}>Unmount</button>
                <br/><hr/><br/>

            </div>
        );
    }
}


export default App;
