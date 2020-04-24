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
	request("/api/auth/cart_num", "get", params)
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


// 取消收藏
function userCollectProductDel(id, params) {
	request("/api/store/user_collect_product_del/" +id, "delete", params)
}


// 获取领取优惠券列表
function getUseCoupons(typ, params) {
	request("/api/coupon/use_coupons/"+typ, "get", params)
}

//获取活动是否存在
function getActivity(params) {
	request("/api/user/activity", "get", params)
}

// 用户地址列表
function userAddressList(params) {
	request("/api/user/user_address_list", "get", params)
}

// 编辑用户地址
function editUserAddress(params) {
	request("/api/user/edit_user_address", "post", params)
}

// 	设置默认地址
function setUserDefaultAddress(id, params) {
	request("/api/user/set_user_default_address/"+id, "put", params)
}

// 删除地址
function removeUserAddress(id, params) {
	request("/api/user/remove_user_address/"+id, "delete", params)
}

// 获取用户地址
function getUserAddress(id, params) {
	request("/api/user/user_address/" + id, "get", params)
}

// 领取优惠券
function userGetCoupon(id, params) {
	request("/api/coupon/user_get_coupon/" + id, "post", params)
}

// 批量收藏
function collectProductAll(params) {
	request("/api/store/collect_product_all", "post", params)
}

// 移除购物车
function removeCart(params) {
	request("/api/auth/remove_cart", "post", params)
}

// 购物车列表
function cartList(params) {
	request("/api/auth/cart_list", "get", params)
}

// 获取购物车数量
function cartNum(params) {
	request("/api/auth/cart_num", "get", params)
}

// 修改购物车数量
function changeCartNum(params) {
	request("/api/auth/change_user_cart_num", "put", params)
}

// 设置购物车
function setCart(params) {
	request("/api/auth/set_cart", "post", params)
}

// 设置购物车
function nowBuy(params) {
	request("/api/auth/now_buy", "post", params)
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
  getIndexGroomList,
  userCollectProductDel,
  getUseCoupons,
  getActivity,
  userAddressList,
  editUserAddress,
  setUserDefaultAddress,
  removeUserAddress,
  getUserAddress,
  userGetCoupon,
  collectProductAll,
  removeCart,
  cartList,
  cartNum,
  changeCartNum,
  setCart,
  nowBuy
}
