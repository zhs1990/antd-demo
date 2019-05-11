import React,{Component} from "react";
import moment from 'moment';
import { DatePicker,Row, Col,Select  } from 'antd';
import echarts from "echarts"
import "./DataStatistics.less"

const Option = Select.Option;

export default class DataStatistics extends Component{
    state = {
        echartsData : [],
        months : [],
        currentYear : ""
    }
    componentWillMount = ()=>{
        this.setXData(()=>{
            this.drawEcharts();
            this.drawContainer();
        });
    }
    componentDidMount = () => {

    }
    drawEcharts = ()=>{
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts'));
        // 绘制图表
        myChart.setOption({
            title: { 
                text: '收入统计',
                x : "center",
                top : 30,
                subtext : "5月总收入 ：600元"
            }, 
            grid : {
                top :120,
                left : 80,
                right : 80
            },  
            color: ['#5cadff'],
            tooltip: {},
            xAxis: {
                data: this.state.echartsData
            },
            yAxis: {
                //data : [0, 50, 100, 150, 200, 250]
            },
            series: [{
                name: '今日收入金额：',
                type: 'bar',
                data: [10, 20, 15, 30, 100, 180],
                barWidth : "50%"
            }]
        });
        window.onresize = function(){
            myChart.resize();
        }
    }
    drawContainer = ()=>{
        var colors = ['#5793f3', '#d14a61', '#675bba'];
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('container'));
        // 绘制图表
        myChart.setOption({
            color: colors,
            title : { 
                text: '订单统计',
                x : "center",
                top : 30,
                subtext : "订单统计5月总收入 ：600元；消单统计5月总收入 ：600元"
            },
            tooltip: {
                trigger: 'none',
                axisPointer: {
                    type: 'cross'
                }
            },
            legend: {
                data:['订单统计', '消单统计'],
                left : 20,
                top:20
            },
            grid : {
                top :120,
                left : 80,
                right : 80
            },
            xAxis: [
                {
                    type: 'category',
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: "#000"
                        }
                    },
                    axisPointer: {
                        label: {
                            formatter: function (params) {
                                return '订单统计:  ' + params.value
                                    + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                            }
                        }
                    },
                    data: this.state.echartsData
                },
                {
                    type: 'category',
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: "#000"
                        }
                    },
                    axisPointer: {
                        label: {
                            formatter: function (params) {
                                return '消单统计：  ' + params.value
                                    + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                            }
                        }
                    },
                    data: this.state.echartsData
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name:'订单统计',
                    type:'line',
                    xAxisIndex: 1,
                    smooth: true,
                    data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                },
                {
                    name:'消单统计',
                    type:'line',
                    smooth: true,
                    data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
                }
            ]
        });
        window.onresize = function(){
            myChart.resize();
        }
    }
    
    setXData = (callback) => {
        var oDate = new Date();
        var oY = oDate.getFullYear();
        var oM = oDate.getMonth();
        var day = new Date(oY,oM+1,0).getDate();
        var arr = [];
        var month = [];
        for(var i=1;i<=day;i++){
            arr.push(i)
        }
        for(var i=1;i<=oM+1;i++){
            month.push(i)
        }
        this.setState({
            echartsData : arr,
            months : month,
            currentYear : oY
        },()=>{
            callback();
        });
    }
    disabledDate = (current) => {
        return current && current > moment().endOf('day');
    }
    handleChange = (value)=> {
        console.log(`selected ${value}`);
    }
      
    render(){
        var {handleChange,months,currentYear} = this.state;
        return (
            <div id="DataStatistics">
                <div className="checkDate">
                    <span>查询日期:</span>
                    <DatePicker
                        format="YYYY-MM-DD"
                        disabledDate={this.disabledDate}
                        onChage={this.changeTime}
                    />
                </div>
                <div className="gutter-example">
                    <Row gutter={16}>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">当前收入</div>
                            <div className="second"><span>40.00</span>元</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">今日上线司机</div>
                            <div className="second"><span>100</span>人</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">当日订单</div>
                            <div className="second"><span>30</span>单</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">当日消单量</div>
                            <div className="second"><span>10</span>单</div>
                        </Col>
                    </Row>
                </div>
                <div className="parent">
                    <div className="selectBox">
                        <label>{currentYear}年：</label>
                        <Select className="select" defaultValue={months[months.length-1]+"月"} style={{ width: 120 }} onChange={handleChange}>
                            {this.state.months.map(function(item,index){
                                return <Option value={item} key={index}>{item}月</Option>
                            })}
                        </Select>
                    </div>
                    
                    <div id="echarts" className="charts"></div>
                </div>
                <div className="parent">
                    <div className="selectBox">
                        <label>{currentYear}年：</label>
                        <Select className="select" defaultValue={months[months.length-1]+"月"} style={{ width: 120 }} onChange={handleChange}>
                            {this.state.months.map(function(item,index){
                                return <Option value={item} key={index}>{item}月</Option>
                            })}
                        </Select>
                    </div>
                    <div id="container" className="charts"></div>
                </div>
            </div>
        )
    }
}