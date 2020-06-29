import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import './admin.less'
import { hashHistory } from 'react-router'
import memoryUtils from '../../utils/memoryUtils'
import LeftNav from './leftNav/LeftNav'
import MyHeader from './header/MyHeader'

const { Header, Sider, Content, Footer } = Layout;
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
    const user = memoryUtils.user
    console.log(user);

    if (!user) {
      hashHistory.replace('/')
      // username = user
    }

    return (
      <Layout className="admin" style={{ minHeight: '100vh' }}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <LeftNav />
        </Sider>
        <Layout>
          <Header className="adHeader" >
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
              style={{ paddingLeft: "30px", marginTop: "10px" }}
            />
            <MyHeader></MyHeader>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',


            }}
          >
            {this.props.children}
          </Content>
          <Footer>111</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Admin;
