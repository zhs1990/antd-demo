import React,{Component} from 'react';
import {Menu,Icon} from 'antd'
import './HeadNav.less'
import {Link} from "react-router-dom"

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class HeadNav extends Component {
    state = {
        current: 'mail',
    }
    render(){
        return (
            <div id="HeadNav">
                <Menu
                    mode="horizontal"
                    selectable = {false}
                >
                    <SubMenu title={<span className="submenu-title-wrapper"><img className="header" src={require("../assets/head.png")}/>哈哈代驾</span>}>
                        <Menu.Item key="setting:1"><Icon type="user" />个人中心</Menu.Item>
                        <Menu.Item key="setting:2"><Icon type="key" />修改密码</Menu.Item>
                        <Menu.Item key="setting:3"><Icon type="logout" />退出登录</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}