import React, { Component } from "react";
import "./login.scss";
import { InputItem, Button,Toast} from "antd-mobile";
import { Link} from "react-router-dom";
import { imgurl } from "../../utils/utils";
import {login_api} from '../../apis/login/login';

export default class login extends Component {
  state = {
    acc: "",
    pwd: "",
    pwdflag: false,
  };
  render() {
    let { pwdflag } = this.state;
    return (
      <div className="login">
        <div className="login-logo">
          <img alt="123" src={imgurl("logo.jpg")}></img>
        </div>
        <div className="login-form">
          <InputItem
            placeholder="请输入用户名或手机"
            onChange={this.accchange}
            clear
          >
            <img alt="" src={imgurl("icon_user.png")}></img>
          </InputItem>
          <InputItem
            placeholder="请输入密码"
            onChange={this.pwdchange}
            clear
            type={pwdflag ? "text" : "password"}
          >
            <img
              onClick={this.pwdSwitchover}
              alt=""
              src={imgurl("icon_pwd.png")}
            ></img>
          </InputItem>
          <Button
            style={{ backgroundColor: "#ff2f66", color: "#fff" }}
            onClick={this.btnsubmit}
          >
            登录
          </Button>
          <div className="login-handle">
            <Link style={{color:'#ff2f66'}} to='/register'>前往注册</Link>
            <span>忘记密码</span>
          </div>
        </div>
        <div className="login-agreement">
          <p>3213131332131</p>
        </div>
        
      </div>
    );
  }
  //用户名输入
  accchange = (val) => {
    this.setState({
      acc: val,
    });
  };
  //密码输入
  pwdchange = (val) => {
    this.setState({
      pwd: val,
    });
  };
  //提交登录
  btnsubmit = async () => {
    let {acc,pwd} = this.state
    var res = await login_api({acc,pwd})
    if(res.data.code === 1){
      Toast.success('登录成功',1)
      window.location.href = '/#/'
    }else{
      Toast.fail('登录失败',1)
    }
  };
  //密码明文暗文切换
  pwdSwitchover = () => {
    let a = !this.state.pwdflag;
    this.setState({
      pwdflag: a,
    });
  };
}
