import './app.less';
import React, { Component } from 'react';
import { hashHistory, Route, IndexRoute, Router } from 'react-router'
import Login from './pages/login/Login.jsx'
import Admin from './pages/admin/Admin.jsx'
import Start from './pages/start/Start.jsx'
import Whatever from './pages/whatever/Whatever.jsx'
import Line from './pages/myEcharts/Line.jsx'
import Bar from './pages/myEcharts/Bar.jsx'
import Pie from './pages/myEcharts/Pie.jsx'
import Category from './pages/category/Category.jsx'
import Product from './pages/product/Product.jsx'
import PmMap from './pages/myEcharts/PmMap'
import MyEcharts from './pages/myEcharts/MyEcharts'
import Round from './pages/myEcharts/Round'


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
                        <Route path='/myecharts' >
                            <Route path='line' component={Line}></Route>
                            <Route path='bar' component={Bar}></Route>
                            <Route path='pie' component={Pie}></Route>
                            <Route path='myecharts' component={MyEcharts}></Route>
                            <Route path='round' component={Round}></Route>
                            <Route path='pmmap' component={PmMap}></Route>
                        </Route>
                        <Route path='/products'>
                            <IndexRoute component={Category}></IndexRoute>
                            <Route path='category' component={Category}></Route>
                            <Route path='product' component={Product}></Route>
                        </Route>
                        <Route path='whatever' component={Whatever}></Route>
                    </Route>
                </Route>
            </Router>

        );
    }
}

export default App;