import Toast from '../../../dist/toast/toast';
var app = getApp()
Page({
  data: {
    numbers: [],
    count: 1,
    failedCount: 0,
    time: 60,
    finish: false,
    level: 1
  },

  onLoad: function () {
    this.initGame(this.data.level)
  },

  onShow: function() {
    var th = this
    setTimeout(function() {
      if(th.data.time != 0 && th.data.finish != true) {
        var time = th.data.time
        time = time - 1
        th.setData({
          time: time
        })
        th.onShow()
      }
      else {
        console.log('游戏结束')
        console.log('错误点击次数: ' + th.data.failedCount)
      }
    }, 1000);
  },

  initGame: function(level) {
    var th = this
    var degree = (level + 1) ** 2
    var num = []
    for(let i = 1;i <= degree;i++)
      num[i] = i
    num.sort(function(){return 0.5 - Math.random()})
    var num2 = []
    var n = 0
    for(let x = 0;x < level + 1;x++) {
      let number = []
      for(let i = 0;i < level + 1;i++) {
        number[i] = num[n]
        n = n + 1
      }
      num2[x] = number
    }
    th.setData({
      numbers: num2,
      count: 1
    })
    console.log(th.data.numbers)
  },

  clickBlock: function(e) {
    var th = this
    if(e.currentTarget.id == th.data.count) {
      var num = th.data.numbers
      for(let i = 0;i < num.length;i++)
        for(let j = 0;j < num[i].length;j++)
          if(num[i][j] == e.currentTarget.id)
            num[i][j] = 0
      th.setData({
        numbers: num,
        count: th.data.count + 1
      })
    }
    else
      th.setData({
        failedCount: th.data.failedCount + 1
      })
    if(th.data.count == ((th.data.level + 1) ** 2 + 1) && th.data.level != 4) {
      th.setData({
        level: th.data.level + 1
      })
      th.initGame(th.data.level)
    }
    if(th.data.count == ((th.data.level + 1) ** 2 + 1) && th.data.level == 4) {
      th.setData({
        finish: true
      })
      Toast.success('完成游戏啦，等待跳转')
      wx.redirectTo({
        url: '../Matching_Game/Matching_Game',
      })
      app.globalData.Schulte_Grid_failedCount = th.data.failedCount
      app.globalData.Schulte_Grid_Time = 60 - th.data.time
      console.log('完成游戏')
    }
    console.log('当前需点击：' + th.data.count + ' ' + '错误点击次数：' + th.data.failedCount)
  }
})