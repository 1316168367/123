import req from '../base'

//登录接口封装
export var login_api = params => req.post('/login',params)
//注册
export var res_api = params => req.post('/reg',params)
