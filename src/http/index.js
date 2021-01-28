import api from './api'; // 导入接口域名列表
import http from './http'; // 导入http中创建的axios实例



export default {
  install(Vue) {
    Vue.prototype.$http = this
  },
  //登录
  login(params = '',header='') {
    return http.post(api.login, params,header);
  },
  //退出登录
  loginout(params = '',header='') {
    return http.post(api.loginout, params,header);
  },
  //商品管理
  listdo(pageNum,params = '',header=''){
      return http.get(api.listdo + `?pageNum=${pageNum}`,params,header)
  }
}