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
  LinkOutlined,
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
 } from '@ant-design/icons';
import { urls } from './routes/router-urls';
import { withRouter } from 'react-router-dom';
import './App.css'
import { Avatar, Input } from 'antd';
import { BellOutlined, SettingOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { ProfileDrawer } from './components/main/ProfileDrawer';

const { Search } = Input;
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component {
  state = {
    mode: 'inline',
    theme: 'light',
    collapsed: false,
    selectedNav:"1",
    showDrower:false
  };

  changeMode = value => {
    this.setState({
      mode: value ? 'vertical' : 'inline',
    });
  };

  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light',
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
         {/* <Switch onChange={this.changeMode} /> Change Mode
         <Divider type="vertical" />
         <Switch onChange={this.changeTheme} /> Change Style
         <br />
         <br /> */}
      <ProfileDrawer visible={this.state.showDrower} setVisible={(e)=>this.setState({showDrower:e})}/>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} style={{backgroundColor:"#eeeeee"}}>
          <div className="logo" style={{margin:'15px 0px 15px 20px'}}>
              <img src="https://res.cloudinary.com/onsurity/image/upload/fl_lossy,f_auto,q_auto/v1595591334/New-home-screen/Group_1328_bbme78.svg" height="25px"/>
          </div>
          <Menu 
            // defaultSelectedKeys={['1']} 
            // mode="inline"
            style={{ backgroundColor:"#eeeeee"}}
            // defaultOpenKeys={['sub1']}
            selectedKeys={this.state.selectedNav}
            mode={this.state.mode}
            theme={this.state.theme}
            >
            <Menu.Item key="1" onClick={()=>this.Navigate("1", urls.HOME)} icon={<PieChartOutlined />}>
              Invoice
            </Menu.Item>
            <Menu.Item key="2"  onClick={()=>this.Navigate("2", urls.TEST)} icon={<DesktopOutlined />}>
              Payments
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
            {/* <Menu.Item key="9" icon={<FileOutlined />} /> */}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 , backgroundColor:'#f7f7f7'}} >
            <div>
           
            <div style={{textAlign:'right'}}>
              <div style={{marginRight:'30px'}}>
               <Search
                    placeholder="search"
                    onSearch={value => console.log(value)}
                    style={{ width: 200, marginRight:"650px", borderRadius:"15px" }}
                  />
                <BellOutlined className="IconFont"/> &nbsp; &nbsp; &nbsp;
                <SettingOutlined className="IconFont" /> &nbsp; &nbsp; &nbsp;
                <QuestionCircleOutlined className="IconFont" /> &nbsp; &nbsp; &nbsp;
                <Avatar onClick={()=>this.setState({showDrower:true})} className="IconFont gggY" size={35} icon={<UserOutlined />} />
              </div>
              
            </div>
            </div>
          </Header>
          <Content style={{ margin: '0px', backgroundColor:"#fff" }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb> */}

            <div className="site-layout-background" style={{ padding: 10, minHeight: 360 }}>
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

      