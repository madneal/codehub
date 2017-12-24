// pages/upload/index.wxml.js
const AV = require('../../utils/av-live-query-weapp-min');
const codeList = require('../../model/codeList');
const app = getApp()

Page({
  data: {
    code: '',
    codeList: []
  },
  updateCode: function({
    detail: {
      value
    }
  }) {
    if (!value) {
      return;
    } else {
      this.setData({
        code: value
      })
    }
  },
  addNewCode: function() {
    let codeInfo = {};
    const this_ = this;
    codeInfo.code = this.data.code;
    new codeList({
      code: this.data.code,
      uploader: app.globalData.userInfo.nickName
    }).save()
    .then(function(res) {
      console.log(res.id);
      this_.setData({
        code: ''
      })
    })
    .catch(console.error);
  },
  cancel: function() {
    this.setData({
      code: ''
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
          uploader: res.userInfo.nickName
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
            uploader: res.userInfo.nickName
          })
        }
      })
    }
    console.dir(this.data.userInfo);
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
      uploader: res.userInfo.nickName
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})