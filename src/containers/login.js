import React from 'react';
import '../index.css';
import LoginComponent from '../components/login';

class Login extends React.Component {
    render() {
        return (
            <div className="login">
                <LoginComponent username="annad" password="chaudhary"/>
            </div>
        )
    }
}

export default Login;