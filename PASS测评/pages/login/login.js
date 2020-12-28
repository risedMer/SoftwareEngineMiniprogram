var app = getApp()
Page({
  onLoad: function() {
    wx.getUserInfo({
      success:(res) => {
        var userInfo = res.userInfo
        app.globalData.userInfo = userInfo
        app.globalData.isLogin = true
      }
    })
  },

  onLogin: function() {
    wx.getUserInfo({
      success:(res) => {
        var userInfo = res.userInfo
        app.globalData.userInfo = userInfo
        app.globalData.isLogin = true
        console.log(app.globalData.userInfo)
        wx.reLaunch({
          url: '/pages/mine/mine',
        })
        wx.request({
          url: app.globalData.ip + 'addNewUser',
          method: 'POST',
          data: {
            'avatarUrl': app.globalData.userInfo.avatarUrl,
            'city': app.globalData.userInfo.city,
            'country': app.globalData.userInfo.country,
            'gender': app.globalData.userInfo.gender,
            'language': app.globalData.userInfo.language,
            'nickName': app.globalData.userInfo.nickName,
            'province': app.globalData.userInfo.province,
            'openid': app.globalData.openid
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
          },
          success (res) {
            console.log(res.data)
          }
        })
      }
    })
  }
})