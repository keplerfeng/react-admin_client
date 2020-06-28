import React, { Component } from 'react';
import memoryUtils from '../../../utils/memoryUtils'
import './myHeader.less'
import { withRouter, hashHistory } from 'react-router'
import menuList from '../../../config/menuList'
import { getWeather } from '../../../network/admin/header/weather'
import { formatDataTime } from '../../../utils/commonUtil'
import localStorageUtil from '../../../utils/localStorageUtil'
import LinkButton from '../../../components/linkButton/LinkButton'
class MyHeader extends Component {
    state = {
        currentTime: formatDataTime(new Date()),
        city: '',
        weather: '',
    }

    getTitle = () => {
        const path = this.props.location.pathname
        let title
        menuList.forEach((item) => {
            if (item.key === path) {
                title = item.title
            } else if (item.children) {
                const cItem = item.children.find(e => e.key === path)
                if (cItem) {
                    title = cItem.title
                }
            }
        })
        return title
    }

    getTime = () => {
        this.intervalId = setInterval(() => {
            const currentTime = formatDataTime(new Date())
            this.setState({ currentTime })
        }, 1000)
    }


    weatherNow = async () => {
        const result = await getWeather()
        console.log(result);

    }
    layout = () => {
        memoryUtils.user = {}
        localStorageUtil.removeUser()
        hashHistory.replace('/login')
    }

    componentDidMount() {
        // 刚render完之后启动一个定时器
        this.getTime()
        this.weatherNow()
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    render() {
        const { currentTime, city, weather } = this.state
        const user = memoryUtils.user
        const title = this.getTitle()
        return (

            <div className="myHeader">
                <div className="topDiv">
                    您好,管理员&nbsp;&nbsp;
                        {user.username}
                    <LinkButton onClick={this.layout}>注销</LinkButton>
                </div>
                <div className="bottomDiv">
                    <div className='displayName'>{title}</div>
                    <div className='displayTime'>
                        <span>{currentTime}</span>
                        <span>{city}</span>
                        <span>{weather}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(MyHeader);