//index.js
//获取应用实例
var app = getApp()
Page({
  data:{
    userlistInfo:[
    {  
       text:'钱包',
      link:'/pages/index/index', 
      url:'../images/i1.png'
     },{
         text:'服务地址',
      link:'/pages/index/index', 
      url:'../images/i2.png'
     },{
         text:'意见反馈',
      link:'/pages/index/index', 
      url:'../images/i3.png'
     },{
         text:'关于我们',
      link:'/pages/index/index', 
      url:'../images/i4.png'
     },{
         text:'呼叫客服',
      link:'/pages/index/index', 
      url:'../images/i5.png'
     }
     ]},
onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
 
})