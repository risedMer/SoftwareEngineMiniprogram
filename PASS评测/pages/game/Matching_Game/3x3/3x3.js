Page({
  data: {
  	animationMain: null,//正面
  	animationBack: null,//背面
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
    var chestnut = "https://wx2.sinaimg.cn/square/006avIczly1glirnzkxoij307x07x3yz.jpg"
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
    setTimeout(function() {
      // th.rotateFn()
    }, 1000);
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
        tmp[j] = image[n]
        n = n + 1
      }
      setImage[i] = tmp
    }
    th.setData({
      showImage: setImage,
      goalImage: image[goal]
    })
  },

  rotateFn: function(e) {
  	var id = e.currentTarget.dataset.id
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