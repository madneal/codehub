//index.js
//获取应用实例
const AV = require('../../utils/av-live-query-weapp-min');
const codeList = require('../../model/codeList');
const app = getApp()

Page({
  data: {
    codeList: []
  },
  copyToClipboard: function(e) {
    console.dir(e);
    const code = e.target.dataset.code;
    console.log(code);
    wx.setClipboardData({
      data: code,
      success: function(res) {
        wx.showToast({
          title: '成功复制到剪切板',
        })
      }
    })
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
    this.fetchData();
  },
  onPullDownRefresh: function() {
    this.fetchData();
    wx.stopPullDownRefresh();
  },
  fetchData: function() {
    new AV.Query(codeList)
      .find()
      .then(codeList =>
        this.setData({
          codeList: codeList
        }))
      .catch(console.error)
  }
})
