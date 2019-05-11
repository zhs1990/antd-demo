import React,{Component} from 'react';
import {Menu,Icon} from 'antd'
import './LeftMenu.less'
import {Link} from "react-router-dom"

const SubMenu = Menu.SubMenu;
export default class LeftMenu extends Component {
    rootSubmenuKeys = ['sub1', 'sub2','sub3', 'sub4', 'sub5','sub6', 'sub6','sub8', 'sub9',
    'sub10', 'sub11','sub12', 'sub13','sub14', 'sub15', 'sub16','sub17', 'sub18','sub19', 
    'sub20','sub21', 'sub22','sub23',"sub24","sub25","sub26"];
    state = {
        openKeys: [],
    };
    
    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }
    render(){
        return (
            <div id="LeftMenu">
                <div className="menutitle">哈哈代驾<br/><span>(美国,旧金山)</span></div>
                <Menu
                    mode="inline"
                    openKeys={this.state.openKeys}
                    onOpenChange={this.onOpenChange}
                    style={{ width: 220 }}
                    theme="dark"
                >
                    <SubMenu key="sub1" title={<span><Icon type="bar-chart" /><span>数据统计</span></span>}>
                        <Menu.Item key="1">
                            <Link to="/home/DataStatistics">数据统计</Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="compass" /><span>监控中心</span></span>}>
                        <Menu.Item key="2">
                            <Link to="/home/MonitoringSystem">监控管理</Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="file-word" /><span>订单管理</span></span>}>
                        <Menu.Item key="3">
                            <Link to="/home/DrivingOrder">代驾订单</Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to="/home/CashbackOrder">返现订单</Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="car" /><span>司机管理</span></span>}>
                        <Menu.Item key="5">
                            <Link to="/home/DriverList">司机列表</Link>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <Link to="/home/DriverClassify">司机分类</Link>
                        </Menu.Item>
                        <Menu.Item key="7">
                            <Link to="/home/ApplyFor">提现申请</Link>
                        </Menu.Item>
                        <Menu.Item key="8">
                            <Link to="/home/WorkStatistics">工作统计</Link>
                        </Menu.Item>
                        <Menu.Item key="9">
                            <Link to="/home/DriverSettings">司机端设置</Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub5" title={<span><Icon type="solution" /><span>用户管理</span></span>}>
                        <Menu.Item key="10">
                            <Link to="/home/UserList">用户列表</Link>
                        </Menu.Item>
                        <Menu.Item key="11">
                            <Link to="/home/UserTag">用户标签</Link>
                        </Menu.Item>
                        <Menu.Item key="12">
                            <Link to="/home/InvoiceApplication">发票申请</Link>
                        </Menu.Item>
                        <Menu.Item key="13">
                            <Link to="/home/UserSettings">用户端设置</Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub6" title={<span><Icon type="area-chart" /><span>推广管理</span></span>}>
                        <Menu.Item key="14">
                            <Link to="/home/CouponManager">优惠券管理</Link>
                        </Menu.Item>
                        <Menu.Item key="15">
                            <Link to="/home/GiftCard">代金卡管理</Link>
                        </Menu.Item>
                        <Menu.Item key="16">
                            <Link to="/home/ActivityManager">活动管理</Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub7" title={<span><Icon type="money-collect" /><span>财务管理</span></span>}>
                        <Menu.Item key="17">
                            <Link to="/home/BillRecord">账单记录</Link>
                        </Menu.Item>
                        <Menu.Item key="18">
                            <Link to="/home/RechargeRecord">司机充值记录</Link>
                        </Menu.Item>
                        <Menu.Item key="19">
                            <Link to="/home/paymentRecord">用户支付记录</Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub8" title={<span><Icon type="laptop" /><span>系统管理</span></span>}>
                        <Menu.Item key="20">
                            <Link to="/home/RoleManager">角色管理</Link>
                        </Menu.Item>
                        <Menu.Item key="21">
                            <Link to="/home/ManagerMes">管理员信息</Link>
                        </Menu.Item>
                        <Menu.Item key="22">
                            <Link to="/home/OperationLog">操作日志</Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub9" title={<span><Icon type="setting" /><span>设置</span></span>}>
                        <Menu.Item key="23">
                            <Link to="/home/DrivingSettings">代驾设置</Link>
                        </Menu.Item>
                        <Menu.Item key="24">
                            <Link to="/home/SystemSettings">系统设置</Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub10" title={<span><Icon type="cloud-upload" /><span>版本更新</span></span>}>
                        <Menu.Item key="25">
                            <Link to="/home/DownloadMa">下载二维码</Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub11" title={<span><Icon type="bell" /><span>消息管理</span></span>}>
                        <Menu.Item key="26">
                            <Link to="/home/MessageManager">消息管理</Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}