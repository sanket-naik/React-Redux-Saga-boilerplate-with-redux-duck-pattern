// import React from 'react';
// import './App.css';
// import Routes from './routes/routes';
// import './globalStyling.css'

// function App() {
//   return <Routes/>
// }

// export default App;

import './globalStyling.css'
import Routes from './routes/routes';
import React, { useEffect, useState } from 'react'
import { Menu, Switch, Divider, Layout, Breadcrumb } from 'antd';
import { 
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
  LinkOutlined,
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
 } from '@ant-design/icons';
import { urls } from './routes/router-urls';
import { withRouter } from 'react-router-dom';


const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component {
  state = {
    mode: 'inline',
    theme: 'dark',
    collapsed: false,
    selectedNav:"1"
  };

  changeMode = value => {
    this.setState({
      mode: value ? 'vertical' : 'inline',
    });
  };

  changeTheme = value => {
    this.setState({
      theme: value ? 'light' : 'dark',
    });
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

 Navigate=(selected, url)=>{
  this.setState({selectedNav:selected})
  this.props.history.push(url)
  }

  render() {
    return (
    
      <>
         <Switch onChange={this.changeMode} /> Change Mode
         <Divider type="vertical" />
         <Switch onChange={this.changeTheme} /> Change Style
         <br />
         <br />
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" style={{margin:'10px 0px 10px 20px'}}>
              <img src="https://res.cloudinary.com/onsurity/image/upload/v1580283811/OnSurity/assets/full_logo_2x_eo3cnd.png" height="35px"/>
          </div>
          <Menu 
            // defaultSelectedKeys={['1']} 
            // mode="inline"
            // style={{ width: 256, height:'100vh' }}
            // defaultOpenKeys={['sub1']}
            selectedKeys={this.state.selectedNav}
            mode={this.state.mode}
            theme={this.state.theme}
            >
            <Menu.Item key="1" onClick={()=>this.Navigate("1", urls.HOME)} icon={<PieChartOutlined />}>
              Home
            </Menu.Item>
            <Menu.Item key="2"  onClick={()=>this.Navigate("2", urls.TEST)} icon={<DesktopOutlined />}>
              Dummy
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />} />
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>

            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Routes/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Footer txt</Footer>
        </Layout>
      </Layout>
      </>
    );
  }
}


export default withRouter(App)

      