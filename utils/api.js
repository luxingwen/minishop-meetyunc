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

// 产品详情信息
function productDetails(id, params) {
	request("/api/store/product/" + id, "get", params)
}

// 产品列表
function productList(params) {
	request("/api/store/product_list", "get", params)
}

// 热卖产品列表
function hotProducts(params) {
	request("/api/store/hot_products", "get", params)
}

// 个人中心图标
function getMyNaviga(params) {
	request("/api/my_naviga", "get", params)
}

// 获取是否收藏
function getProductCollect(id, params) {
	request("/api/store/product_collect/"+id, "get", params)
}

// 获取优惠券
function getIssueCouponList(params) {
	request("/api/coupon/issue_coupon_list", "get", params)
}

// 获取授权登陆logo
function getLogoUrl(params) {
	request("/api/logo_url", "get", params)
}

// 获取购物车数量
function getCartNum(params) {
	request("/api/store/cart_num", "get", params)
}

// 获取用户信息
function getMyUserInfo(params) {
	request("/api/user/my_user_info", "get", params)
}


// 取消收藏
function uncollectProduct(id, params) {
	request("/api/store/uncollect_product/" + id, "delete", params)
}

// 收藏
function collectProduct(id, params) {
	request("/api/store/collect_product/" + id, "post", params)
}

// 获取用户收藏产品
function getUserCollectProduct(params) {
	request("/api/store/user_collect_product", "get", params)
}

// 获取砍价活动
function getBargainList(params) {
	request("/api/bargain/bargain_list", "get", params)
}

// 拼团列表
function getCombinationList(params) {
	request("/api/pink/combination_list", "get", params)
}


function getIndexGroomList(typ, params) {
	request("/api/index_groom_list/" + typ, "get", params)
}

export default { // 暴露接口
  login,
  setCode,
  index,
  userInfo,
  getpidCate,
  getProductCategory,
  productDetails,
  productList,
  hotProducts,
  getMyNaviga,
  getProductCollect,
  getIssueCouponList,
  getLogoUrl,
  getCartNum,
  getMyUserInfo,
  uncollectProduct,
  collectProduct,
  getUserCollectProduct,
  getBargainList,
  getCombinationList,
  getIndexGroomList
}
