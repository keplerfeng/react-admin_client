import React, { Component } from 'react';
import './login.less'
import LoginForm from './loginForm/LoginForm'
import memoryUtils from '../../utils/memoryUtils'
import { hashHistory } from 'react-router'

class Login extends Component {
    state = {};
    componentDidMount() {
        const user = memoryUtils.user        
        if (JSON.stringify(user) !== '{}') {
            hashHistory.replace('/admin/start')
        }
    }

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
