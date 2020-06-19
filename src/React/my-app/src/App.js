import './App.scss';
import React, {Component} from 'react';
import Login from "./components/login/login";
import Register from "./components/login/register";
import './App.scss'
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
        isLoginActive:true,
    }
  }
  render() {
    const { isLoginActive } = this.state
    return (
        <div className='App'>
            <div className="login">
                <div className="container">
                    {isLoginActive && <Login containerRef={(ref) =>{this.current = ref}}/>}
                    {!isLoginActive && <Register containerRef={(ref) =>{this.current = ref}} />}
                </div>
            </div>
        </div>
    );
  }
}

export default App;
