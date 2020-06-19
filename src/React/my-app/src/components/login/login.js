import React, {Component} from 'react';
import loginImg from '../../login.svg'

export class Login extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='base-container' ref={this.props.containerRef}>
                <div className='header'>Login</div>

                {/*Content*/}
                <div className='content'>
                    <div className='image'>
                        <img src={loginImg} alt=""/>
                    </div>

                    <div className='form'>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name='username' placeholder='username'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name='password' placeholder='Password'/>
                        </div>
                    </div>
                 </div>
                <div className='footer'>
                    <button type='button' className='btn'>Login</button>
                </div>
            </div>
        );
    }
}

