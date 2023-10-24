import request from '@/utils/request'

// 订单结算的接口
export const checkOrder = (mode, obj) => {
  return request.get('/checkout/order', {
    params: {
      mode, // cart buyNow
      delivery: 10, // 10快递配送 20门店自提
      couponId: 0, // 优惠卷id传0不使用优惠劵
      isUsePoints: 0, // 积分传0，不使用积分
      ...obj// 将传递过来的参数对象，动态展开
    }
  })
}
// 提交订单
export const submitOrder = (mode, obj) => {
  return request.post('/checkout/submit', {
    mode,
    delivery: 10,
    couponId: 0,
    isUsePoints: 0,
    payType: 10, // 余额支付
    ...obj
  })
}
// 订单列表
export const getMyOrderList = (dataType, page) => {
  return request.get('/order/list', {
    params: {
      dataType,
      page
    }
  })
}
