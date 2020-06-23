import React, { Component } from 'react';
import './login.less'
import LoginForm from './loginForm/LoginForm'

class Login extends Component {
    state = {};
    render() {
        return (
            <div className="login">
                <header className="login-header"><h1>后台管理</h1></header>
                <header className="login-content">
                    <h2>用户登录</h2>
                    <LoginForm className="login-form"></LoginForm>
                </header>
            </div>
        )
    }
}

export default Login;
