const app = getApp()
const canvas=wx.createCanvasContext('myCanvas')

Page({
  data: {
    block_count:2,
    color_count:2,
    failedCount: 0,
    time:30,
    memory_time:5,
    over:false,
    over_msg:"恭喜完成测验",
    //当前的色块顺序
    numbers:[1,2],
    //正确的色块顺序
    numbers_right:[1,2],
    color_block_touch:[-1,-1],
    tips:"请在如下时间内记住色块顺序",
    //关卡数
    level:1,
    //记录是否在记忆时间内
    is_memmory:true
  },
  onLoad: function(){
    this.ramdom_block();
    //调用计时器
    setInterval(this.onShow,1000)
    ;
  },
  //点击色块的事件
  click_block:function (e) {
    var a=this.data.is_memmory
    if(a==true){
      return
    }
    var click_num=e.currentTarget.id;
    console.log(click_num)
    var num=this.data.numbers;
    var max=0
    for(let i=0;i<this.data.color_count;i++){
      if(num[i]==0){
        num[i]=click_num;
        max=i
        break;
      }
    }
    this.setData({
      numbers:num,
    })
    var num1=this.data.numbers_right,num2=this.data.numbers
    var n=this.data.block_count
    if(max!=n-1)
      return
    //检查排序是否正确
    for(let i=0;i<this.data.color_count;i++){
      if(num1[i]!=num2[i])
        return;
    }
    
    this.init_block()
  },
  //重置关卡状态
  init_block:function() {
    console.log("通过"+this.data.level+"关卡")
    this.setData({
      level:this.data.level+1
    })
    //更新方块数量和颜色种类
    if(this.data.color_count<=6){
      this.setData({
        block_count:this.data.level+1,
        color_count:this.data.level+1
      })
    }
    else{
      this.setData({
        color_count:this.data.level+1
      })
    }
    
    var tmp=[]
    for(let i=0;i<this.data.block_count;i++){
      tmp[i]=i%6+1
    }
    
    this.setData({
      numbers:tmp,
      color_block_touch:tmp,
      memory_time:5,
      is_memmory:true
    })
    this.ramdom_block()
  }

  ,
  //点击重置按钮事件
  click_button(e){
    var a=this.data.is_memmory
    if(a==1){
      return
    }
    var num=[]
    for(let i=0;i<this.data.color_count;i++){
      num[i]=0;
    }
    this.setData({
      numbers:num
    })
  },


  //隐藏色块
  hide_block:function(){
    var num=[]
    var num_temp=[]
    num_temp=this.data.numbers
    for(let i=0;i<this.data.block_count;i++){
      num[i]=0;
    }
    this.setData({
      numbers_right:num_temp
    })
    this.setData({
      numbers:num
    })
    this.setData({
      tips:"请点击下方色块还原原来的色块顺序"
    })
    //显示可以选择的色块
    var tmp=[]
    for(let i=0;i<this.data.level+1;i++){
      tmp[i]=i+1;
    }
    this.setData({
      color_block_touch:tmp
    })
  },
  //随机色块顺序
  ramdom_block:function () {
    var num=this.data.numbers;
    num.sort(function(){return 0.5 - Math.random()})
    this.setData({
      numbers_right:num,
      numbers:num
    })
  },

  // 计时器
  onShow: function() {
    var a=this.data.is_memmory
    
    if(a==true){
      this.setData({
        memory_time:this.data.memory_time-1
      })
      if(this.data.memory_time==0){
        this.hide_block()
        this.setData({
          is_memmory:false
        })
        
      }
    }
    else if(this.data.time>0){
      this.setData({
        time:this.data.time-1
      })
    }
    if(this.data.time==0){
      this.data.over=true
      
    }
  }
})