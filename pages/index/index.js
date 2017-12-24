//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    codeList: [],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  // add new Code
  navigateNewCode: function() {
    wx.navigateTo({
      url: '../upload/index',
      sucess: function(res) {
        console.log(res.data);
      }
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {

  }
})
