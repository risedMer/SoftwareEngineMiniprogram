import Toast from '../../../dist/toast/toast';
Page({
  data: {
  	animationMaingoal: null,
    animationBackgoal: null,
    imageUrl: [],
    showImage: [],
    goalImage: "",
    block: "https://wx1.sinaimg.cn/mw690/006avIczly1glirn7bn04j30dw0eo3yj.jpg",
    level: 1
  },

  onLoad: function() {
    var Donkey = "https://wx3.sinaimg.cn/mw690/006avIczly1gliy9d9yprj307x07xaal.jpg"
    var star = "https://wx1.sinaimg.cn/mw690/006avIczly1glirncq1iaj307x07x74r.jpg"
    var fish = "https://wx1.sinaimg.cn/mw690/006avIczly1glirnhstp2j307x07t0ta.jpg"
    var mushroom = "https://wx2.sinaimg.cn/mw690/006avIczly1glirqdkml3j307x07xmxh.jpg"
    var ghost = "https://wx2.sinaimg.cn/mw690/006avIczly1glirqiimc2j307x07x3z0.jpg"
    var leaf = "https://wx2.sinaimg.cn/mw690/006avIczly1glirqnqp4xj307x09f74p.jpg"
    var chestnut = "https://wx2.sinaimg.cn/mw690/006avIczly1glirnzkxoij307x07x3yz.jpg"
    var deer = "https://wx1.sinaimg.cn/mw690/006avIczly1gm2n2h2sy9j302m02m3ye.jpg"
    var gift = "https://wx4.sinaimg.cn/mw690/006avIczly1gm2n7nhsjjj305k05ka9y.jpg"
    var url = [Donkey,star,fish,mushroom,ghost,leaf,chestnut,deer,gift]
    url.sort(function(){return 0.5 - Math.random()})
    this.setData({
      imageUrl: url
    })
    this.initGame(this.data.level)
  },

  onShow: function() {
    var th = this
    if(th.data.level == 1) {
      var randomFlip = [1,2,3]
      randomFlip.sort(function(){return 0.5 - Math.random()})
      console.log('randomFlip is ' + randomFlip[0])
      if(randomFlip[0] == 1) {
        setTimeout(() => {
          th.sampleDisplayImage(0)
        }, 1000);
        setTimeout(() => {
          th.sampleCoverImage(0)
        }, 2500);
        setTimeout(() => {
          th.sampleDisplayImage(1)
        }, 3500);
        setTimeout(() => {
          th.sampleCoverImage(1)
        }, 5000);
        setTimeout(() => {
          th.GoalImage('goal')
        }, 5500);
      }
      if(randomFlip[0] == 2) {
        setTimeout(() => {
          th.sampleDisplayImage(2)
        }, 1000);
        setTimeout(() => {
          th.sampleCoverImage(2)
        }, 2500);
        setTimeout(() => {
          th.sampleDisplayImage(3)
        }, 3500);
        setTimeout(() => {
          th.sampleCoverImage(3)
        }, 5000);
        setTimeout(() => {
          th.GoalImage('goal')
        }, 5500);
      }
      if(randomFlip[0] == 3) {
        setTimeout(() => {
          th.sampleDisplayImage(4)
        }, 1000);
        setTimeout(() => {
          th.sampleCoverImage(4)
        }, 2500);
        setTimeout(() => {
          th.sampleDisplayImage(5)
        }, 3500);
        setTimeout(() => {
          th.sampleCoverImage(5)
        }, 5000);
        setTimeout(() => {
          th.GoalImage('goal')
        }, 5500);
      }
    }
    if(th.data.level == 2) {
      var randomFlip = [1,2,3,4]
      randomFlip.sort(function(){return 0.5 - Math.random()})
      console.log('randomFlip is ' + randomFlip[0])
      if(randomFlip[0] == 1) {
        setTimeout(() => {
          th.sampleDisplayImage(0)
        }, 1000);
        setTimeout(() => {
          th.sampleCoverImage(0)
        }, 2500);
        setTimeout(() => {
          th.sampleDisplayImage(1)
        }, 3500);
        setTimeout(() => {
          th.sampleCoverImage(1)
        }, 5000);
        setTimeout(() => {
          th.sampleDisplayImage(2)
        }, 6000);
        setTimeout(() => {
          th.sampleCoverImage(2)
        }, 7500);
        setTimeout(() => {
          th.GoalImage('goal')
        }, 8000);
      }
      if(randomFlip[0] == 2) {
        setTimeout(() => {
          th.sampleDisplayImage(3)
        }, 1000);
        setTimeout(() => {
          th.sampleCoverImage(3)
        }, 2500);
        setTimeout(() => {
          th.sampleDisplayImage(5)
        }, 3500);
        setTimeout(() => {
          th.sampleCoverImage(5)
        }, 5000);
        setTimeout(() => {
          th.sampleDisplayImage(4)
        }, 6000);
        setTimeout(() => {
          th.sampleCoverImage(4)
        }, 7500);
        setTimeout(() => {
          th.GoalImage('goal')
        }, 8000);
      }
      if(randomFlip[0] == 3) {
        setTimeout(() => {
          th.sampleDisplayImage(6)
        }, 1000);
        setTimeout(() => {
          th.sampleCoverImage(6)
        }, 2500);
        setTimeout(() => {
          th.sampleDisplayImage(7)
        }, 3500);
        setTimeout(() => {
          th.sampleCoverImage(7)
        }, 5000);
        setTimeout(() => {
          th.sampleDisplayImage(8)
        }, 6000);
        setTimeout(() => {
          th.sampleCoverImage(8)
        }, 7500);
        setTimeout(() => {
          th.GoalImage('goal')
        }, 8000);
      }
      if(randomFlip[0] == 4) {
        setTimeout(() => {
          th.sampleDisplayImage(9)
        }, 1000);
        setTimeout(() => {
          th.sampleCoverImage(9)
        }, 2500);
        setTimeout(() => {
          th.sampleDisplayImage(11)
        }, 3500);
        setTimeout(() => {
          th.sampleCoverImage(11)
        }, 5000);
        setTimeout(() => {
          th.sampleDisplayImage(10)
        }, 6000);
        setTimeout(() => {
          th.sampleCoverImage(10)
        }, 7500);
        setTimeout(() => {
          th.GoalImage('goal')
        }, 8000);
      }
    }
    if(th.data.level == 3) {
      setTimeout(() => {
        th.GoalImage('goal')
      }, 5500);
    }
  },

  initGame: function(level) {
    var th = this
    var originalImage = th.data.imageUrl
    var image = []
    var goal = parseInt(Math.random() * ((level + 1) ** 2))
    for(let i = 0;i < (level + 1) ** 2;i++)
      image[i] = originalImage[i]
    image.sort(function(){return 0.5 - Math.random()})
    var setImage = []
    var n = 0
    for(let i = 0;i < level + 1;i++) {
      let tmp = []
      for(let j = 0;j < level + 1;j++) {
        tmp[j] = [image[n],"animationMain","animationBack",n]
        n = n + 1
      }
      setImage[i] = tmp
    }
    th.setData({
      showImage: setImage,
      goalImage: image[goal]
    })
  },

  sampleDisplayImage: function(id) {
    var th = this
    th.animation_main = wx.createAnimation({
      duration: 400,
      timingFunction: 'linear'
    })
    th.animation_back = wx.createAnimation({
      duration:400,
      timingFunction:'linear'
    })
    if(th.data.level == 1) {
      if(id == 0) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][0][1] = th.animation_main.export()
        showimage[0][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][1][1] = th.animation_main.export()
        showimage[1][1][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 1) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][1][1] = th.animation_main.export()
        showimage[0][1][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][0][1] = th.animation_main.export()
        showimage[1][0][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 2) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][0][1] = th.animation_main.export()
        showimage[0][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][0][1] = th.animation_main.export()
        showimage[1][0][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 3) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][1][1] = th.animation_main.export()
        showimage[0][1][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][1][1] = th.animation_main.export()
        showimage[1][1][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 4) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][0][1] = th.animation_main.export()
        showimage[0][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][1][1] = th.animation_main.export()
        showimage[0][1][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 5) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][0][1] = th.animation_main.export()
        showimage[1][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][1][1] = th.animation_main.export()
        showimage[1][1][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
    }
    if(th.data.level == 2) {
      if(id == 0) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][0][1] = th.animation_main.export()
        showimage[0][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][0][1] = th.animation_main.export()
        showimage[1][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][0][1] = th.animation_main.export()
        showimage[2][0][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 1) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][1][1] = th.animation_main.export()
        showimage[0][1][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][1][1] = th.animation_main.export()
        showimage[1][1][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][1][1] = th.animation_main.export()
        showimage[2][1][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 2) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][2][1] = th.animation_main.export()
        showimage[0][2][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][2][1] = th.animation_main.export()
        showimage[1][2][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][2][1] = th.animation_main.export()
        showimage[2][2][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 3) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][0][1] = th.animation_main.export()
        showimage[0][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][1][1] = th.animation_main.export()
        showimage[0][1][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][2][1] = th.animation_main.export()
        showimage[0][2][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 4) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][0][1] = th.animation_main.export()
        showimage[1][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][1][1] = th.animation_main.export()
        showimage[1][1][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][2][1] = th.animation_main.export()
        showimage[1][2][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 5) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][0][1] = th.animation_main.export()
        showimage[2][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][1][1] = th.animation_main.export()
        showimage[2][1][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][2][1] = th.animation_main.export()
        showimage[2][2][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 6) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][0][1] = th.animation_main.export()
        showimage[0][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][1][1] = th.animation_main.export()
        showimage[1][1][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][2][1] = th.animation_main.export()
        showimage[2][2][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 7) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][1][1] = th.animation_main.export()
        showimage[0][1][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][2][1] = th.animation_main.export()
        showimage[0][2][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][2][1] = th.animation_main.export()
        showimage[1][2][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 8) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][0][1] = th.animation_main.export()
        showimage[1][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][0][1] = th.animation_main.export()
        showimage[2][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][1][1] = th.animation_main.export()
        showimage[2][1][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 9) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][0][1] = th.animation_main.export()
        showimage[0][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][1][1] = th.animation_main.export()
        showimage[0][1][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][2][1] = th.animation_main.export()
        showimage[0][2][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 10) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][0][1] = th.animation_main.export()
        showimage[1][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][0][1] = th.animation_main.export()
        showimage[2][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][1][1] = th.animation_main.export()
        showimage[2][1][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 11) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][1][1] = th.animation_main.export()
        showimage[1][1][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][2][1] = th.animation_main.export()
        showimage[1][2][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][2][1] = th.animation_main.export()
        showimage[2][2][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
    }
    if(th.data.level == 3) {

    }

  },

  sampleCoverImage: function(id) {
    var th = this
    th.animation_main = wx.createAnimation({
      duration: 400,
      timingFunction: 'linear'
    })
    th.animation_back = wx.createAnimation({
      duration:400,
      timingFunction:'linear'
    })
    if(th.data.level == 1) {
      if(id == 0) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][0][1] = th.animation_main.export()
        showimage[0][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][1][1] = th.animation_main.export()
        showimage[1][1][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 1) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][1][1] = th.animation_main.export()
        showimage[0][1][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][0][1] = th.animation_main.export()
        showimage[1][0][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 2) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][0][1] = th.animation_main.export()
        showimage[0][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][0][1] = th.animation_main.export()
        showimage[1][0][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 3) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][1][1] = th.animation_main.export()
        showimage[0][1][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][1][1] = th.animation_main.export()
        showimage[1][1][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 4) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][1][1] = th.animation_main.export()
        showimage[0][1][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][0][1] = th.animation_main.export()
        showimage[0][0][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 5) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][1][1] = th.animation_main.export()
        showimage[1][1][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][0][1] = th.animation_main.export()
        showimage[1][0][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
    }
    if(th.data.level == 2) {
      if(id == 0) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][0][1] = th.animation_main.export()
        showimage[0][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][0][1] = th.animation_main.export()
        showimage[1][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][0][1] = th.animation_main.export()
        showimage[2][0][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 1) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][1][1] = th.animation_main.export()
        showimage[0][1][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][1][1] = th.animation_main.export()
        showimage[1][1][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][1][1] = th.animation_main.export()
        showimage[2][1][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 2) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][2][1] = th.animation_main.export()
        showimage[0][2][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][2][1] = th.animation_main.export()
        showimage[1][2][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][2][1] = th.animation_main.export()
        showimage[2][2][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 3) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][0][1] = th.animation_main.export()
        showimage[0][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][1][1] = th.animation_main.export()
        showimage[0][1][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][2][1] = th.animation_main.export()
        showimage[0][2][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 4) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][0][1] = th.animation_main.export()
        showimage[1][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][1][1] = th.animation_main.export()
        showimage[1][1][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][2][1] = th.animation_main.export()
        showimage[1][2][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 5) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][0][1] = th.animation_main.export()
        showimage[2][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][1][1] = th.animation_main.export()
        showimage[2][1][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][2][1] = th.animation_main.export()
        showimage[2][2][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 6) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][0][1] = th.animation_main.export()
        showimage[0][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][1][1] = th.animation_main.export()
        showimage[1][1][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][2][1] = th.animation_main.export()
        showimage[2][2][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 7) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][1][1] = th.animation_main.export()
        showimage[0][1][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][2][1] = th.animation_main.export()
        showimage[0][2][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][2][1] = th.animation_main.export()
        showimage[1][2][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 8) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][0][1] = th.animation_main.export()
        showimage[1][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][0][1] = th.animation_main.export()
        showimage[2][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][1][1] = th.animation_main.export()
        showimage[2][1][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 9) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][0][1] = th.animation_main.export()
        showimage[0][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][1][1] = th.animation_main.export()
        showimage[0][1][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][2][1] = th.animation_main.export()
        showimage[0][2][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 10) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][0][1] = th.animation_main.export()
        showimage[1][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][0][1] = th.animation_main.export()
        showimage[2][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][1][1] = th.animation_main.export()
        showimage[2][1][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 11) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][1][1] = th.animation_main.export()
        showimage[1][1][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][2][1] = th.animation_main.export()
        showimage[1][2][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][2][1] = th.animation_main.export()
        showimage[2][2][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
    }
  },

  GoalImage: function(id) {
    var th = this
    th.animation_main = wx.createAnimation({
      duration: 400,
      timingFunction: 'linear'
    })
    th.animation_back = wx.createAnimation({
      duration:400,
      timingFunction:'linear'
    })
    if (id == 'goal') {
      th.animation_main.rotateY(180).step()
      th.animation_back.rotateY(0).step()
      th.setData({
        animationMaingoal: th.animation_main.export(),
        animationBackgoal: th.animation_back.export(),
      })
    }
  },

  checkTheAnswer: function(e) {
    console.log(e.currentTarget.dataset.id)
    var id = e.currentTarget.dataset.id
    var th = this
    var image = th.data.showImage
    var a,b
    th.animation_main = wx.createAnimation({
      duration: 400,
      timingFunction: 'linear'
    })
    th.animation_back = wx.createAnimation({
      duration:400,
      timingFunction:'linear'
    })
    th.animation_main.rotateY(180).step()
    th.animation_back.rotateY(0).step()
    console.log(image)
    for(let i = 0;i < th.data.level + 1;i++)
      for(let j = 0;j < th.data.level + 1;j++)
        if(image[i][j][3] == id) {
          image[i][j][1] = th.animation_main.export()
          image[i][j][2] = th.animation_back.export()
          a = i
          b = j
          break
        }
    th.setData({
      showImage: image
    })
    if(image[a][b][0] == th.data.goalImage) {
      if(th.data.level < 3) {
        Toast.success('答对啦')
        th.animation_main = wx.createAnimation({
          duration: 400,
          timingFunction: 'linear'
        })
        th.animation_back = wx.createAnimation({
          duration:400,
          timingFunction:'linear'
        })
        setTimeout(() => {
          th.animation_main.rotateY(0).step()
          th.animation_back.rotateY(-180).step()
          image[a][b][1] = th.animation_main.export()
          image[a][b][2] = th.animation_back.export()
          th.animation_main.rotateY(0).step()
          th.animation_back.rotateY(-180).step()
          th.setData({
            showImage: image,
            animationMaingoal: th.animation_main.export(),
            animationBackgoal: th.animation_back.export(),
          })
        }, 800);
        setTimeout(() => {
          th.setData({
            level: th.data.level + 1
          })
          th.initGame(th.data.level)
          th.onShow()
        }, 1500);
      }
      else {

      }
    }
    else {
      Toast.fail('选错啦')
      setTimeout(() => {
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        image[a][b][1] = th.animation_main.export()
        image[a][b][2] = th.animation_back.export()
        th.setData({
          showImage: image
        })
      }, 800);
    }
  },

  rotateFn: function(e) {
    var id = e.currentTarget.dataset.id
    console.log(e.currentTarget.dataset.id)
  	this.animation_main = wx.createAnimation({
        duration: 400,
        timingFunction: 'linear'
      })
    this.animation_back = wx.createAnimation({
      duration:400,
      timingFunction:'linear'
    })
  	if (id == 1) {
      this.animation_main.rotateY(180).step()
      this.animation_back.rotateY(0).step()
      this.setData({
      	animationMain: this.animation_main.export(),
      	animationBack: this.animation_back.export(),
      })
  	}
  	else {
      this.animation_main.rotateY(0).step()
      this.animation_back.rotateY(-180).step()
      this.setData({
      	animationMain: this.animation_main.export(),
      	animationBack: this.animation_back.export(),
      })
  	}
  },
})