import React,{Component} from "react";
import { Form, Input,Button,message} from "antd" 
import "./LoginUser.less"
import Request from "../../utils/request"
class LoginUser extends Component{
    constructor(props){
        super();
        this.state = {
            form : Form,
            ssid : "",
            code : "",
            phone : "",
            pwd : "",
            ssidImg : "",
            alertMes : ""
        }
    }
    componentDidMount=()=>{
        //获取登录验证码
        this.getSsid();
    }
    inputPhone = (e)=>{
        this.setState({
            phone : e.target.value
        });
    }
    inputPwd = (e)=>{
        this.setState({
            pwd : e.target.value
        });
    }
    inputSsid = (e)=>{
        this.setState({
            code : e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        var re = /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[0-9]{1})|(18[0-9]{1})|(19[0-9]{1}))+\d{8})$/ ;
        if(!re.test(this.state.phone)){
            message.error('请输入正确的手机号');
        }else if(this.state.pwd.length<6||this.state.pwd.length>12){
            message.error('请输入正确的密码');
        }else if(this.state.code.length==0){
            message.error('请输入正确的验证码');
        }
        Request("user/Login",{
            Account : this.state.phone ,
            Password : this.state.pwd ,
            Code : this.state.code ,
            SessId : this.state.ssid
        },(res)=>{
            if(res.State.Code==1){
                message.success('登录成功');
                this.props.history.push("/home/Home");
            }else{
                message.error("验证码错误");
            }
        });
    }
    getSsid = () =>{
        Request("user/Login/Getcode",{},(res)=>{
            if(res.State.Code==1){
                if(res.data){
                    this.setState({
                        ssid : res.data.SessId,
                        ssidImg : res.data.CodeData
                    })
                }else{
                    message.warning(res.State.Message);
                }
            }
        });
    }
    changeSsid = ()=>{
        this.getSsid();
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div id="LoginUser" className="userLogin">
                <video className="video_bg" src={require("../../assets/login.mp4")} autoPlay="autoplay"></video>
                <div className="form">
                    <div className="form_left">
                        <h2>代驾平台管理</h2>
                        <p className="hello">Hello!</p>
                        <p className="words">开启您美好的一天</p>
                    </div>
                    <div className="form_right">
                        <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }}  className="login-form">
                            <Form.Item label="账号" className="changeNatural">
                                {getFieldDecorator('note', {
                                    rules: [{ required: true, message: '请输入账号' }],
                                })(
                                    <Input type="text" onChange={this.inputPhone} placeholder="请输入账号" maxLength="11" />
                                )}
                            </Form.Item>
                            <Form.Item label="密码" className="changeNatural">
                                {getFieldDecorator('userPwd', {
                                    rules: [{ required: true, message: '请输入密码' }],
                                })(
                                    <Input type="password"  onChange={this.inputPwd} placeholder="请输入密码" />
                                )}
                            </Form.Item>
                            <Form.Item label="验证码" className="changeNatural">
                                {getFieldDecorator('ssid', {
                                    rules: [{ required: true, message: '请输入验证码' }],
                                })(
                                    <Input type="text" onChange={this.inputSsid} placeholder="请输入验证码"  maxLength="4" />
                                )}
                                <img className="ssidMa" src={this.state.ssidImg} onClick={this.changeSsid} />
                            </Form.Item>
                            <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                                <Button type="primary" onClick={this.handleSubmit} htmlType="submit"  style={{width : "100%" }}>
                                    登 录
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form.create()(LoginUser);