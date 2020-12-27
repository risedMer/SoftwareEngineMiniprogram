App({
  globalData: {
    userInfo: {},
    isLogin: false,
    appid: "wx3a96cc6c6e93793f",
    appSecret: "398e7da599ff8f79af6040c38ab777ef",
    openid: "",
    ip: "http://localhost:8080/"
  },

  onLaunch: function() {
    var th = this
    wx.getUserInfo({
      success:(res) => {
        var userInfo = res.userInfo
        th.globalData.userInfo = userInfo
        th.globalData.isLogin = true
        console.log(th.globalData.isLogin)
      }
    })
    console.log('When launch ' + th.globalData.isLogin)
  }
})