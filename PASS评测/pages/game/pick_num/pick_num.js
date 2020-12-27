const app = getApp()
const canvas=wx.createCanvasContext('myCanvas')

Page({
  data: {
    //倒计时
    time:30,
    //游戏是否结束
    over:false,
    //描述
    description:"白色0",
    //要找的数字id
    id_right:'./img/num/hollow/0.png',
    //结束语句
    over_msg:"恭喜完成测验",
    //当前关卡数
    level:1,
    //方块数组
    content:[['./img/num/hollow/0.png']],
    //图片路径的存储数组
    img_url:[]
    },
  onLoad: function(){
    //初始化图片路径
    this.init_img();
    console.log(this.data.content)
    //调用计时器
    setInterval(this.onShow,1000);
  },
  //初始化下一关
  init_game:function(){
    this.ramdom_block()
  },
  //生成方格内容
  ramdom_block:function (){
    var content_1=[]
    var level
    if(this.data.level>5){
      level=5
    }
    else{
      level=this.data.level
    }
    
    for(var i=0;i<level;i++){
      let content_row=[]
      for(let j=1;j<level+1;j++){
        content_row[j-1]=this.data.img_url[i*level+j-1]
      }
      content_1[i]=content_row
    }
    this.setData({
      content:content_1
    })
  },
  //点击方块事件
  click_block:function(e){
    console.log(e.currentTarget.id)
    if(this.data.id_right==e.currentTarget.id){
      console.log("恭喜你通过第"+this.data.level+"关")
      this.setData({
        level:this.data.level+1
      })
      this.init_game()
    }
  },
  
  // 计时器
  onShow: function() {
    if(this.data.time>0){
      this.setData({
        time:this.data.time-1   
      })
    }
    else{
      this.setData({
        over:true
      })
    }
  },
  //初始化图片路径数组
  init_img:function(){
    var img=[];
    var id=0;
    //加载空心数字
    for(let i=0;i<10;i++){
      img[id]="./img/num/hollow/"+i+".png"
      console.log(img[id])
      id++;
    }
    //加载实心数字
    for(let i=0;i<10;i++){
      img[id]="./img/num/solid/"+i+".png"
      console.log(img[id])
      id++;
    }
    //加载空心字母
    for(let i=0;i<26;i++){
      img[id]="./img/char/hollow/"+i+".png"
      console.log(img[id])
      id++;
    }
    //加载实心字母
    for(let i=0;i<26;i++){
      img[id]="./img/char/solid/"+i+".png"
      console.log(img[id])
      id++;
    }

    this.setData({
      img_url:img
    })
  }
})