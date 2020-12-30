App({
  globalData: {
    userInfo: {},
    isLogin: false,
    appid: "",
    appSecret: "",
    openid: "",
    ip: "http://localhost:8080/",
    Matching_Game_failedCount: 0,
    Schulte_Grid_failedCount: 0,
    Schulte_Grid_Time: 0
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
