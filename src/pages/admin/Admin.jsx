import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import logo from './logo/logo.png'
import './admin.less'
import { Link } from 'react-router'

const { Header, Sider, Content } = Layout;
class Admin extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout className="admin">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed} style={{ height: "100%" }} >
          <img src={logo} alt="pig" style={{ width: "200px", height: '80px' }} />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} className="menuLink">
            <Menu.Item key="1">
              <Icon type="user" />
              <Link to="/admin/start">开始吧</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <Link to="/admin/myecharts">图表</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <Link to="/admin/whatever">随便写写</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Admin;
