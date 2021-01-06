// const json5 = require("json5")

// pages/robot/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // position:6
    position:{
      latitude:'',
      longitude:'',
      speed:'',
      accuracy:''
    }
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

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let _this=this
    wx.getLocation({
      type: 'wgs84',
      altitude:'true',
      success (res) {
        const latitude = res.latitude
        const longitude = res.longitude
        const speed = res.speed
        const accuracy = res.accuracy
        _this.data.position.latitude=latitude;
        _this.data.position.longitude=longitude;
        _this.data.position.speed=speed;
        _this.data.position.accuracy=accuracy;
        console.info(res)
        console.info(_this.data.position)
        _this.setData({
          position:_this.data.position
        })
      }
     })     
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