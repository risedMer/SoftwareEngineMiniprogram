Page({
  data: {
  	animationMaingoal: null,
    animationBackgoal: null,
    animationMainr: null,
    animationBackr: null,
    animationMaina: null,
    animationBacka: null,
    animationMain2: null, 
    animationBack2: null,
    animationMain3: null,
    animationBack3: null,
    animationMainx: null,
    animationBackx: null,
    animationMaini: null,
    animationBacki: null,
    animationMain9: null,
    animationBack9: null,
    animationMainj: null,
    animationBackj: null,
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
      setTimeout(() => {
        th.sampleDisplayImage('a')
      }, 1000);
      setTimeout(() => {
        th.sampleCoverImage('a')
      }, 2500);
      setTimeout(() => {
        th.sampleDisplayImage('r')
      }, 3500);
      setTimeout(() => {
        th.sampleCoverImage('r')
      }, 5000);
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
    console.log(goal)
    for(let i = 0;i < (level + 1) ** 2;i++)
      image[i] = originalImage[i]
    image.sort(function(){return 0.5 - Math.random()})
    var setImage = []
    var n = 0
    for(let i = 0;i < level + 1;i++) {
      let tmp = []
      for(let j = 0;j < level + 1;j++) {
        let content = [image[n],"animationMain"+image[n][49],"animationBack"+image[n][49]]
        tmp[j] = content
        n = n + 1
      }
      setImage[i] = tmp
    }
    th.setData({
      showImage: setImage,
      goalImage: image[goal]
    })
    console.log(th.data.showImage)
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
    if (id == 'r') {
      th.animation_main.rotateY(180).step()
      th.animation_back.rotateY(0).step()
      th.setData({
        animationMainr: th.animation_main.export(),
        animationBackr: th.animation_back.export(),
      })
    }
    else if (id == 'a') {
      th.animation_main.rotateY(180).step()
      th.animation_back.rotateY(0).step()
      th.setData({
        animationMaina: th.animation_main.export(),
        animationBacka: th.animation_back.export(),
      })
    }
    else if (id == '2') {
      th.animation_main.rotateY(180).step()
      th.animation_back.rotateY(0).step()
      th.setData({
        animationMain2: th.animation_main.export(),
        animationBack2: th.animation_back.export(),
      })
    }
    else if (id == '3') {
      th.animation_main.rotateY(180).step()
      th.animation_back.rotateY(0).step()
      th.setData({
        animationMain3: th.animation_main.export(),
        animationBack3: th.animation_back.export(),
      })
    }
    else if (id == 'x') {
      th.animation_main.rotateY(180).step()
      th.animation_back.rotateY(0).step()
      th.setData({
        animationMainx: th.animation_main.export(),
        animationBackx: th.animation_back.export(),
      })
    }
    else if (id == 'i') {
      th.animation_main.rotateY(180).step()
      th.animation_back.rotateY(0).step()
      th.setData({
        animationMaini: th.animation_main.export(),
        animationBacki: th.animation_back.export(),
      })
    }
    else if (id == '9') {
      th.animation_main.rotateY(180).step()
      th.animation_back.rotateY(0).step()
      th.setData({
        animationMain9: th.animation_main.export(),
        animationBack9: th.animation_back.export(),
      })
    }
    else if (id == 'j') {
      th.animation_main.rotateY(180).step()
      th.animation_back.rotateY(0).step()
      th.setData({
        animationMainj: th.animation_main.export(),
        animationBackj: th.animation_back.export(),
      })
    }
    else {
      th.animation_main.rotateY(0).step()
      th.animation_back.rotateY(-180).step()
      th.setData({
        animationMain: th.animation_main.export(),
        animationBack: th.animation_back.export(),
      })
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
    if(id == 'r') {
      th.animation_main.rotateY(0).step()
      th.animation_back.rotateY(-180).step()
      th.setData({
        animationMainr: th.animation_main.export(),
        animationBackr: th.animation_back.export(),
      })
    }
    else if(id == 'a') {
      th.animation_main.rotateY(0).step()
      th.animation_back.rotateY(-180).step()
      th.setData({
        animationMaina: th.animation_main.export(),
        animationBacka: th.animation_back.export(),
      })
    }
    else if(id == '2') {
      th.animation_main.rotateY(0).step()
      th.animation_back.rotateY(-180).step()
      th.setData({
        animationMain2: th.animation_main.export(),
        animationBack2: th.animation_back.export(),
      })
    }
    else if(id == '3') {
      th.animation_main.rotateY(0).step()
      th.animation_back.rotateY(-180).step()
      th.setData({
        animationMain3: th.animation_main.export(),
        animationBack3: th.animation_back.export(),
      })
    }
    else if(id == 'x') {
      th.animation_main.rotateY(0).step()
      th.animation_back.rotateY(-180).step()
      th.setData({
        animationMainx: th.animation_main.export(),
        animationBackx: th.animation_back.export(),
      })
    }
    else if(id == 'i') {
      th.animation_main.rotateY(0).step()
      th.animation_back.rotateY(-180).step()
      th.setData({
        animationMaini: th.animation_main.export(),
        animationBacki: th.animation_back.export(),
      })
    }
    else if(id == '9') {
      th.animation_main.rotateY(0).step()
      th.animation_back.rotateY(-180).step()
      th.setData({
        animationMain9: th.animation_main.export(),
        animationBack9: th.animation_back.export(),
      })
    }
    else if(id == 'j') {
      th.animation_main.rotateY(0).step()
      th.animation_back.rotateY(-180).step()
      th.setData({
        animationMainj: th.animation_main.export(),
        animationBackj: th.animation_back.export(),
      })
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
    // else if(id == '0'){
    //   th.animation_main.rotateY(0).step()
    //   th.animation_back.rotateY(-180).step()
    //   th.setData({
    //     animationMaingoal: th.animation_main.export(),
    //     animationBackgoal: th.animation_back.export(),
    //   })
    // }
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