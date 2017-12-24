// pages/upload/index.wxml.js
const AV = require('../../utils/av-live-query-weapp-min');
const codeList = require('../../model/codeList');
const app = getApp()

Page({
  data: {
    code: '',
    uploader: '',
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
      uploader: this.getUploader()
      // uploader: app.globalData.userInfo ? app.globalDta.userInfo.nickName : ''
    }).save()
    .then(function(res) {
      console.log(res.id);
      this_.setData({
        code: ''
      })
    })
    .then(function() {
      wx.navigateTo({
        url: '../index/index',
      })
    })
    .catch(console.error);
  },
  cancel: function() {
    wx.navigateBack({
    })
  },

  getUploader: function() {
    wx.getUserInfo({
      success: function(res) {
        return res.userInfo.nickName;
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    if (app.globalData.userInfo && app.globalData.userInfo.nickName) {
      this.setData({
        uploader: app.globalData.userInfo.nickName
      })
    } else {
      this.setData({
        uploader: ''
      })
    }
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