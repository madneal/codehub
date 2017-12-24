//index.js
//获取应用实例
const AV = require('../../utils/av-live-query-weapp-min');
const codeList = require('../../model/codeList');
const app = getApp()

Page({
  data: {
    codeList: [{
      code:'12123123123123123'
    }]
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

  },
  onReady: function() {
    // new AV.Query(codeList)
    //   .find()
    //   .then(codeList =>
    //     this.setData({
    //       codeList: codeList
    //     }))
    //   .catch(console.error)
  }
})
