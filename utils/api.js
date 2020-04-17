import { request } from './request'


// 登录
function login(params) {
	request('/api/login', 'post', params)
}

function setCode(params) {
	request('/api/setCode', 'post', params)
}

// 首页信息
function index(params) {
	request("/api/index", 'get', params)
}

export default { // 暴露接口
  login,
  setCode,
  index
}
