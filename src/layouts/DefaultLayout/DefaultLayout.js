import React,{Component} from 'react';
import {Layout} from "antd"
import {Route} from "react-router-dom"
import HeadNav from '../../common/HeadNav'
import LeftMenu from '../../common/LeftMenu'
import './DefaultLayout.less'
import Welcome from "../../components/Welcome/Welcome"
import DataStatistics from "../../components/DataStatistics/DataStatistics"
import MonitoringSystem from "../../components/MonitoringSystem/MonitoringSystem"
import DrivingOrder from "../../components/DrivingOrder/DrivingOrder"
import CashbackOrder from "../../components/CashbackOrder/CashbackOrder"

export default class DefaultLayout extends Component{
    constructor(){
        super();
        this.state =  {
        }
    }
    render(){
        return (
            <div id="DefaultLayout">
                <Layout>
                    <LeftMenu/>
                    <Layout className="container">
                        <HeadNav/>
                        <div id="Contents">
                            <Route path={this.props.match.url+"/Home"} component={Welcome} exact/>
                            <Route path={this.props.match.url+"/DataStatistics"} component={DataStatistics} />
                            <Route path={this.props.match.url+"/MonitoringSystem"} component={MonitoringSystem}/>
                            <Route path={this.props.match.url+"/DrivingOrder"} component={DrivingOrder}/>
                            <Route path={this.props.match.url+"/CashbackOrder"} component={CashbackOrder}/>
                        </div>
                    </Layout>
                </Layout>
            </div>
        )
    }
}