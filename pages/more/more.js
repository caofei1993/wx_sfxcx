// pages/more/more.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: 0,
    show1: 0,
    show2: 0,
    userInfo: {},
    phone:"",
    num: "",
    cha: "",
    total: "",
    _html: [],
    avatarurl: "",
    nickname: "",
    lq_show: 0,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      userInfo: JSON.parse(options.userInfo),
      phone: options.phone
    })
    this.setData({
      nickname: this.data.userInfo.nickName,
      avatarurl: this.data.userInfo.avatarUrl
    })
    if (!this.data.nickname == "") {
      this.setData({
        show: 1
      })
    } else {
      this.setData({
        show: 0
      })
    }
    if (!this.data.phone == "") {
      this.setData({
        show1: 1
      })
    } else {
      this.setData({
        show1: 0
      })
    }
    var phone = this.data.phone
    wx.request({
      url: 'https://hd.offcn.com/2017gksf/index.php/home/index19/getpage',
      data: {
        phone: phone
      },
      success: function (res) {
        console.log(res.data.mylist.zyzx)
        that.setData({
          _html: res.data.html,
        })
        if (res.data.mylist == undefined){
          that.setData({
            num: "",
            cha: "",
            total: "",
            show2: 0
          })
        }else{
          that.setData({
            num: res.data.mylist.num,
            cha: res.data.mylist.cha,
            total: res.data.mylist.total,
            show2: 1
          })
        }
        if (res.data.mylist.zyzx == "党政专项") {
          that.setData({
            lq_show: 1
          })
        } else if (res.data.mylist.zyzx == "党政专项+无领导专项") {
          that.setData({
            lq_show: 2
          })
        } else if (res.data.mylist.zyzx == "海关专项") {
          that.setData({
            lq_show: 3
          })
        } else if (res.data.mylist.zyzx == "海事局专项") {
          that.setData({
            lq_show: 4
          })
        } else if (res.data.mylist.zyzx == "科技部专项") {
          that.setData({
            lq_show: 5
          })
        } else if (res.data.mylist.zyzx == "商务部专项") {
          that.setData({
            lq_show: 6
          })
        } else if (res.data.mylist.zyzx == "审计署专项") {
          that.setData({
            lq_show: 7
          })
        } else if (res.data.mylist.zyzx == "税务局专项") {
          that.setData({
            lq_show: 8
          })
        } else if (res.data.mylist.zyzx == "铁路公安专项") {
          that.setData({
            lq_show: 9
          })
        } else if (res.data.mylist.zyzx == "统考专项") {
          that.setData({
            lq_show: 10
          })
        } else if (res.data.mylist.zyzx == "外交部专项") {
          that.setData({
            lq_show: 11
          })
        } else if (res.data.mylist.zyzx == "无领导专项") {
          that.setData({
            lq_show: 12
          })
        } else if (res.data.mylist.zyzx == "国家统计局调查总队专项") {
          that.setData({
            lq_show: 13
          })
        } else if (res.data.mylist.zyzx == "银保监会专项") {
          that.setData({
            lq_show: 14
          })
        } else if (res.data.mylist.zyzx == "证监会专项（财金类）") {
          that.setData({
            lq_show: 15
          })
        } else if (res.data.mylist.zyzx == "证监会专项（会计类）") {
          that.setData({
            lq_show: 16
          })
        } else if (res.data.mylist.zyzx == "证监会专项（法律类）") {
          that.setData({
            lq_show: 17
          })
        } else if (res.data.mylist.zyzx == "证监会专项（计算机类）") {
          that.setData({
            lq_show: 18
          })
        }else{
          that.setData({
            lq_show: 0
          })
        }

      }
    })
    
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
    if (phone==""){
      wx.redirectTo({
        url: '../old_user/old_user?userInfo=' + JSON.stringify(userInfo)
      })
    }else{
      wx.redirectTo({
        url: '../pmjg/pmjg?html=' + JSON.stringify(this.data._html) + '&phone=' + this.data.phone + '&userInfo=' + JSON.stringify(userInfo)
      })
    }
    
  },
  //看考勤跳转
  lookkq: function (e) {
    var _this = this;
    var phone = _this.data.phone;
    console.log(_this.data.userInfo)
    if (_this.data.userInfo == undefined) {
      var userInfo = ""
    } else {
      var userInfo = _this.data.userInfo;
    }
    wx.redirectTo({
      url: "../gksfpm/gksfpm?phone=" + phone + "&userInfo=" + JSON.stringify(userInfo) + '&html=' + JSON.stringify(_this.data._html)
    })
  },
  //查分数跳转
  lookfs: function (e) {
    wx.redirectTo({
      url: "../index/index"
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
    return {
      title: '快来一起晒分查排名吧！',
      path: '/pages/index/index',
      imageUrl: 'https://www.offcn.com/zg/gwy_xcx/zg_bg24.jpg',
    }
  }
})