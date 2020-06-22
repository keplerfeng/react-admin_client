import './app.less';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './pages/login/Login.jsx'
import Admin from './pages/admin/Admin.jsx'

class App extends Component {
    state = {}

    render() {
        return (
            <BrowserRouter >
                <Switch >
                    <Route path='/login' component={Login}></Route>
                    <Route path='/' component={Admin}></Route>
                </Switch>
            </BrowserRouter>

        );
    }
}

export default App;