var app = getApp()
Page({
  data: {
    isLogin: false,
    userInfo: {},
    time: 60
  },

  onLoad: function () {
    wx.login({
      success (res) {
        if (res.code) {
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + app.globalData.appid + '&secret=' + app.globalData.appSecret + '&js_code=' + res.code + '&grant_type=authorization_code',
            method: 'GET',
            success: function(res) {
              app.globalData.openid = res.data.openid
              console.log(app.globalData.openid)
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },

  jumpToLogin: function() {
    wx.redirectTo({
      url: '/pages/login/login',
    })
  },

  onShow: function() {
    setTimeout(() => {
      if(app.globalData.isLogin == true)
        this.setData({
          isLogin: app.globalData.isLogin,
          userInfo: app.globalData.userInfo
        })
      else
        this.onShow()
    }, 1);
  }
})