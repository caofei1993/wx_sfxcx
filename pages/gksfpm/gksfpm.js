// pages/gksfpm/gksfpm.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:"",
    department:"",
    job:"",
    zyzx:"",
    _html: [],
    avatarurl: "",
    nickname: "",
    userInfo: {},
    lq_show:0,
    img_show:0
  },
  //查排名跳转
  searhpmtz: function (e) {
    if (this.data.userInfo == undefined) {
      var nickname = "";
      var avatarurl = "";
      var userInfo = ""
    } else {
      var nickname = this.data.userInfo.nickName;
      var avatarurl = this.data.userInfo.avatarUrl;
      var userInfo = this.data.userInfo;
    }
    var phone = this.data.phone
    if (phone == "") {
      wx.redirectTo({
        url: "../old_user/old_user"
      })
    } else {
      wx.redirectTo({
        url: '../pmjg/pmjg?phone=' + this.data.phone + '&userInfo=' + JSON.stringify(userInfo) + '&html=' + JSON.stringify(this.data._html)
      })
    }
  },
  //更多跳转
  more: function (e) {
    var _that = this;
    console.log(_that.data.userInfo)
    if (_that.data.userInfo == undefined) {
      var userInfo = ""
    } else {
      var userInfo = _that.data.userInfo;
    }
    var phone = _that.data.phone;
    wx.redirectTo({
      url: "../more/more?userInfo=" + JSON.stringify(userInfo) + "&phone=" + _that.data.phone
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      _html: JSON.parse(options.html),
      userInfo: JSON.parse(options.userInfo),
      phone: options.phone
    })
    console.log(this.data.phone)
    var _this=this;
    var phone = this.data.phone
    wx.request({
      url: 'https://hd.offcn.com/2017gksf/index.php/home/index19/kaoqing',
      data: {
        phone: phone
      },
      success: function (res) {
        console.log(res.data)
        if (res.data.status=="success"){
          _this.setData({
            department: res.data.html.department,
            job: res.data.html.job,
            zyzx: res.data.html.zyzx
          })
          if (res.data.html.zyzx =="党政专项"){
            _this.setData({
              lq_show:1,
              img_show:2
            })            
          } else if (res.data.html.zyzx == "党政专项+无领导专项"){
            _this.setData({
              lq_show: 2,
              img_show: 2
            }) 
          } else if (res.data.html.zyzx == "海关专项") {
            _this.setData({
              lq_show: 3,
              img_show: 2
            })
          } else if (res.data.html.zyzx == "海事局专项") {
            _this.setData({
              lq_show: 4,
              img_show: 2
            })
          } else if (res.data.html.zyzx == "科技部专项") {
            _this.setData({
              lq_show: 5,
              img_show: 1
            })
          } else if (res.data.html.zyzx == "商务部专项") {
            _this.setData({
              lq_show: 6,
              img_show: 1
            })
          } else if (res.data.html.zyzx == "审计署专项") {
            _this.setData({
              lq_show: 7,
              img_show: 1
            })
          } else if (res.data.html.zyzx == "税务局专项") {
            _this.setData({
              lq_show: 8,
              img_show: 2
            })
          } else if (res.data.html.zyzx == "铁路公安专项") {
            _this.setData({
              lq_show: 9,
              img_show: 2
            })
          } else if (res.data.html.zyzx == "统考专项") {
            _this.setData({
              lq_show: 10,
              img_show: 1
            })
          } else if (res.data.html.zyzx == "外交部专项") {
            _this.setData({
              lq_show: 11,
              img_show: 2
            })
          } else if (res.data.html.zyzx == "无领导专项") {
            _this.setData({
              lq_show: 12,
              img_show: 1
            })
          } else if (res.data.html.zyzx == "国家统计局调查总队专项") {
            _this.setData({
              lq_show: 13,
              img_show: 2
            })
          } else if (res.data.html.zyzx == "银保监会专项") {
            _this.setData({
              lq_show: 14,
              img_show: 2
            })
          } else if (res.data.html.zyzx == "证监会专项（财金类）") {
            _this.setData({
              lq_show: 15,
              img_show: 1
            })
          } else if (res.data.html.zyzx == "证监会专项（会计类）") {
            _this.setData({
              lq_show: 16,
              img_show: 1
            })
          } else if (res.data.html.zyzx == "证监会专项（法律类）") {
            _this.setData({
              lq_show: 17,
              img_show: 1
            })
          } else if (res.data.html.zyzx == "证监会专项（计算机类）") {
            _this.setData({
              lq_show: 18,
              img_show: 1
            })
          }
          
        }
        
      }
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