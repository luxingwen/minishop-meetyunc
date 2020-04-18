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

// 个人中心，用户信息
function userInfo(params) {
	request("/api/user/my", "get", params)
}

// 获取产品分类
function getpidCate(params) {
	request("/api/store/pid_cate", "get", params)
}

function getProductCategory(params) {
	request("/api/store/product_category", "get", params)
}

export default { // 暴露接口
  login,
  setCode,
  index,
  userInfo,
  getpidCate,
  getProductCategory
}
