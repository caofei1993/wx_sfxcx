// pages/pmjg/pmjg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //看考勤跳转
  lookkq: function (e) {
    wx.navigateTo({
      url: "../gksfpm/gksfpm"
    })
  },
  //更多跳转
  more: function (e) {
    wx.navigateTo({
      url: "../more/more"
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
    return {
      title: '公务员考试',
      path: '/pages/index/index',
      imageUrl: 'https://www.offcn.com/zg/gwy_xcx/zg_bg24.jpg',
    }
  }
})