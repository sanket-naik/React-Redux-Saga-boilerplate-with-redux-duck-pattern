import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Drawer, Button } from 'antd';
import { Avatar } from 'antd';
import { BellOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { CloseOutlined } from '@ant-design/icons';

export const ProfileDrawer = (props) => {

  const onClose = () => {
    props.setVisible(false);
  };

  return (
    <>
      <Drawer
        // title="Basic Drawer"
        placement="right"
        width="400px"
        closable={false}
        onClose={onClose}
        visible={props.visible}
      >
        <div style={{textAlign:'center'}}>
                <div style={{textAlign:'right', paddingRight:'10px'}}><CloseOutlined/></div>
            <div style={{backgroundColor:"#F3F8FE", padding:'30px 0px'}}>
                <Avatar className="IconFont" size={75} icon={<UserOutlined />} />
                <div>Sanket Naik</div>
                <div>UID:3542UH</div>
                <div style={{display:'flex', margin:'10px auto'}}>
                    <div style={{width:'50%', textAlign:'right' ,color:'#2a74be'}}>My Account</div> &nbsp;
                    <div>|</div> &nbsp; 
                    <div style={{width:'50%', textAlign:'left' ,color:'#ec6161'}}>Sign Out</div>
                </div>
            </div>
            <div style={{display:'flex', padding:'20px'}}>
                <div style={{width:'50%', textAlign:'left'}}>MY ORGANISATION</div>
                <div style={{width:'50%', textAlign:'right'}}><SettingOutlined/> Manage</div>
            </div>
            <div style={{textAlign:'left', padding:'10px 20px', backgroundColor:'#268ddd', color:'#fff'}}>
                <div>Onsurity Tech pvt ltd</div>
                <div>Id: OSHS0001</div>
            </div>
            <div style={{textAlign:'left', padding:'10px 20px', color:'#000'}}>
                <div>Lux Actuaries & Analytics LLP</div>
                <div>Id: OSHS0001</div>
            </div>
            <div style={{borderTop:'.25px solid #d6d2d2'}}></div>
        </div>
      </Drawer>
    </>
  );
};