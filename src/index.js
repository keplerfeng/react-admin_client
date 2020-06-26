import React from 'react';
import ReactDOM from 'react-dom'
import App from './App.js'
import localStorageUtil from './utils/localStorageUtil'
import memoryUtils from './utils/memoryUtils'
const user = localStorageUtil.getUser()
memoryUtils.user = user

ReactDOM.render(< App />, document.getElementById('root'))