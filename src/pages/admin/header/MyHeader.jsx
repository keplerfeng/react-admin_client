import React, { Component } from 'react';
import memoryUtils from '../../../utils/memoryUtils'
import './myHeader.less'
import { Link, withRouter } from 'react-router'
import menuList from '../../../config/menuList'


class MyHeader extends Component {
    state = {
    }

    getTitle = () => {
        const path = this.props.location.pathname
        let title
        menuList.forEach((item) => {
            console.log(item.title);
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

    render() {
        const user = memoryUtils.user
        const title  = this.getTitle()

        return (
            <div className="myHeader">
                <div className="topDiv">
                    您好,管理员&nbsp;&nbsp;
                        {user.username}
                    <Link><span>注销</span></Link>
                </div>
                <div className="bottomDiv">
                    <div className='displayName'>{title}</div>
                    <div className='displayTime'></div>
                </div>
            </div>
        );
    }
}

export default withRouter(MyHeader);