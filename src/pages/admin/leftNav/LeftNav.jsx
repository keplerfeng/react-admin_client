import React, { Component } from 'react';
import logo from '../../../assets/img/logo.png'
import { Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router'
import './leftNav.less'
import menuList from '../../../config/menuList'

const { SubMenu } = Menu;


class LeftNav extends Component {
    state = {
    };

    // 根据menu的数据生成menu标签list
    getMenuNodes = (menuList) => {
        const path = this.props.location.pathname

        return menuList.map(item => {
            if (!item.children) {
                return (
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                )
            } else {
                const cItem = item.children.find(e => e.key === path)
                if (cItem) {
                    this.openKey = '/' + path.split('/')[1]
                }
                return (
                    <SubMenu
                        key={item.key}
                        title={
                            <span>
                                <Icon type={item.icon} />
                                <span>{item.title}</span>
                            </span>
                        }
                    >
                        {
                            this.getMenuNodes(item.children)
                        }
                    </SubMenu>
                )
            }
        })
    }


    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentWillMount() {
        this.menuNodes = this.getMenuNodes(menuList)
    }

    render() {
        const path = this.props.location.pathname
        const openKey = this.openKey
        console.log(openKey);

        return (
            <div className="nav">
                <div className='leftBanner'>
                    <img src={logo} alt="pig" />
                    <p>啦啦啦</p>
                </div>

                <Menu theme="dark" mode="inline" selectedKeys={[path]} defaultOpenKeys={[openKey]}

                    className="menuLink">
                    {
                        this.menuNodes
                    }
                </Menu>

                {/* <Menu theme="dark" mode="inline" defaultSelectedKeys={['start']}
                    className="menuLink">
                    <Menu.Item key="1">
                        <Icon type="user" />
                        <Link to="/admin/start">开始吧</Link>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <Icon type="mail" />
                                <span>商品</span>
                            </span>
                        }
                    >
                        <Menu.Item key="9"><Link to="/admin/category">品类管理</Link></Menu.Item>
                        <Menu.Item key="8"><Link to="/admin/product">商品管理</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                                <Icon type="mail" />
                                <span>图表</span>
                            </span>
                        }
                    >
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <Link to="/admin/myecharts">我的图表</Link>
                        </Menu.Item>
                        <Menu.Item key="4"><Link to="/admin/line">柱状图</Link></Menu.Item>
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <Menu.Item key="7">Option 7</Menu.Item>
                    </SubMenu>

                    <Menu.Item key="3">
                        <Icon type="upload" />
                        <Link to="/admin/whatever">随便写写</Link>
                    </Menu.Item>
                </Menu> */}
            </div >
        )
    }
}

export default withRouter(LeftNav);