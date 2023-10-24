export default {
  // 此处编写的就是Vue组件实例的配置项，通过一定语法，可以直接混入到组件内部
  // data methods computed 生命周期函数...
  // 注意点，如果此处和组件内，提供了同名的data或method，则组件内优先级更高
  // 如果编写了生命周期函数，则mixins中的生命周期函数和页面的生命周期函数，会用数组管理，统一执行
  methods: {
    loginConfirm () {
      // 判断token是否存在
      // 如果token不存在，弹确认框
      // 如果token存在，继续请求操作
      if (!this.$store.getters.token) {
        this.$dialog.confirm({
          title: '温馨提示',
          message: '此时需要先登录才能操作哦',
          confirmButtonText: '去登录',
          cancelButtonText: '再逛逛'
        })
          .then(() => {
            // 如果希望，跳转到登录=>登录后能回跳回来
            // 需要在跳转时，去携带参数（当前的路径地址）
            // this.$route.fullPath(会包含查询参数)
            this.$router.replace({
              path: '/login',
              query: {
                backUrl: this.$route.fullPath
              }
            })
          }).catch(() => {})
        return true
      }
      return false
    }
  }
}
