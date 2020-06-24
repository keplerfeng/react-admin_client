import './app.less';
import React, { Component } from 'react';
import { hashHistory, Route, IndexRoute, Router } from 'react-router'
import Login from './pages/login/Login.jsx'
import Admin from './pages/admin/Admin.jsx'
import Start from './pages/start/Start.jsx'
import MyEcharts from './pages/myEcharts/MyEcharts.jsx'
import Whatever from './pages/whatever/Whatever.jsx'

class App extends Component {
    state = {}

    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' >
                    <IndexRoute component={Login}></IndexRoute>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/admin' component={Admin}>
                        <IndexRoute component={Start}></IndexRoute>
                        <Route path='start' component={Start}></Route>
                        <Route path='myecharts' component={MyEcharts}></Route>
                        <Route path='whatever' component={Whatever}></Route>
                    </Route>
                </Route>
            </Router>

        );
    }
}

export default App;