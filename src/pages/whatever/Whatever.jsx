import React, { Component } from 'react';
import FunTest from './funTest/FunTest'
import Amap from './amap/Amap'
class Whatever extends Component {
    state = {}
    render() {
        return (
            <div>
                <FunTest></FunTest>
                <Amap/>
            </div>
        );
    }
}

export default Whatever;