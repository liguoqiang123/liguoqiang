var app = getApp()  
Page({  
  data: {  
    //   imgUrls: [  
    //    {  
    //       link:'/pages/index/index',  
    //       url:'../images/2.jpg'   
    //    },{  
    //       link:'/pages/logs/logs', 
    //      url:'../images/6.jpg'    
    //    },{  
    //       link:'/pages/test/test',  
    //        url:'../images/8.jpg'     
    //    }   
    // ],  
  //   navs: [{icon: "../images/icon1.png",name: "家电维修"},
  //          {icon: "../images/icon2.png",name: "家电清洗"},
  //          {icon: "../images/icon3.png",name: "卫生清理"},
  //          {icon: "../images/icon4.png",name: "阿姨/月搜"}],
  //  navs1: [{img: "../images/icon5.png",name: "开锁/解锁"},
  //          {img: "../images/icon6.png",name: "疏通"},
  //          {img: "../images/icon8.png",name: "水电安装"},
  //          {img: "../images/icon7.png",name: "更多"}],
    indicatorDots: true,  
    autoplay: true,  
    interval: 5000,  
    duration: 1000,  
    userInfo: {}  
  },  
  // 轮播图  一张图片展示
  onLoad: function () { 
     var that=this
     wx.request({
     url: 'http://caozaifei.top/sizu/lgq/tp/index.php/Home/index/xiaochengxu', //仅为示例，并非真实的接口地址
     header: {
      'Content-Type': 'application/json'
     },
   success: function(res) {
   // console.log(res.data)
    that.setData({'luobo':[res.data]})
     that.setData({'tupian':res.data['4']})
// console.log({'luobo':[res.data]})
   }
 })
 //八个图片  请求 
      var that=this
 wx.request({
     url: 'http://caozaifei.top/sizu/lgq/tp/index.php/Home/index/nav', //仅为示例，并非真实的接口地址
     header: {
      'Content-Type': 'application/json'
     },
   success: function(res) {
   // console.log(res.data)
    that.setData({'nav':[res.data]})
     console.log({'nav':[res.data]})
   }
 })

 } 



})  