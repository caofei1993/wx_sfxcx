// pages/pmjg/pmjg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    phone: "",
    page: 1,
    num:"",
    cha:"",
    total:"",
    kqtel:"",
    avatarurl: "",
    nickname:"",
    show:0,
    userInfo:{},
    //每页显示的行数：
    pagesize: 8,
    //页码（从1开始）：
    p: 1,
    //用于标识是否还有更多的状态
    state: 1,
    //用于渲染页面的数组
    arrayProject: [],
    //用于数组的追加和暂存
    allProject: [],
    lq_show:0
  },
  //看考勤跳转
  lookkq: function (e) {
    var _this = this;
    console.log(_this.data.userInfo)
    if (_this.data.userInfo == undefined) {
      var userInfo = ""
    } else {
      var userInfo = _this.data.userInfo;
    }
    var phone = this.data.phone
    _this.setData({
      kqtel: phone
    })
    console.log(this.data.kqtel)
    wx.redirectTo({
      url: "../gksfpm/gksfpm?phone=" + _this.data.kqtel + "&userInfo=" + JSON.stringify(userInfo) + '&html=' + JSON.stringify(_this.data.list)
    })
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
      list: JSON.parse(options.html),
      phone: options.phone,
      userInfo: JSON.parse(options.userInfo)
    })
    var _this=this;
    console.log(this.data.list)
    console.log(this.data.phone)
    console.log(this.data.userInfo)
    
    this.setData({
      nickname: this.data.userInfo.nickName,
      avatarurl: this.data.userInfo.avatarUrl
    }) 
    if (!this.data.nickname=="") {
      this.setData({
        show: 1
      })
    } else {
      this.setData({
        show: 0
      })
    }
    console.log(this.data.userInfo.nickName)
    console.log(this.data.userInfo.avatarUrl)
    console.log(this.data.show)
    var phone = this.data.phone
    var page = this.data.page
    console.log(phone)
    wx.request({
      url: 'https://hd.offcn.com/2017gksf/index.php/home/index19/getpage',
      data: {
        phone: phone,
        page: page
      },
      success: function (res) {
        console.log(res.data.html.mylist)
        if (res.data.html.length <= 8)
          _this.setData({
            state: 0
          });
        console.log(res.data.mylist)
        _this.setData({
          num: res.data.mylist.num,
          cha: res.data.mylist.cha,
          total: res.data.mylist.total
        })
        if (res.data.mylist.zyzx == "党政专项") {
          _this.setData({
            lq_show: 1,
            img_show: 2
          })
        } else if (res.data.mylist.zyzx == "党政专项+无领导专项") {
          _this.setData({
            lq_show: 2,
            img_show: 2
          })
        } else if (res.data.mylist.zyzx == "海关专项") {
          _this.setData({
            lq_show: 3,
            img_show: 2
          })
        } else if (res.data.mylist.zyzx == "海事局专项") {
          _this.setData({
            lq_show: 4,
            img_show: 2
          })
        } else if (res.data.mylist.zyzx == "科技部专项") {
          _this.setData({
            lq_show: 5,
            img_show: 1
          })
        } else if (res.data.mylist.zyzx == "商务部专项") {
          _this.setData({
            lq_show: 6,
            img_show: 1
          })
        } else if (res.data.mylist.zyzx == "审计署专项") {
          _this.setData({
            lq_show: 7,
            img_show: 1
          })
        } else if (res.data.mylist.zyzx == "税务局专项") {
          _this.setData({
            lq_show: 8,
            img_show: 2
          })
        } else if (res.data.mylist.zyzx == "铁路公安专项") {
          _this.setData({
            lq_show: 9,
            img_show: 2
          })
        } else if (res.data.mylist.zyzx == "统考专项") {
          _this.setData({
            lq_show: 10,
            img_show: 1
          })
        } else if (res.data.mylist.zyzx == "外交部专项") {
          _this.setData({
            lq_show: 11,
            img_show: 2
          })
        } else if (res.data.mylist.zyzx == "无领导专项") {
          _this.setData({
            lq_show: 12,
            img_show: 1
          })
        } else if (res.data.mylist.zyzx == "国家统计局调查总队专项") {
          _this.setData({
            lq_show: 13,
            img_show: 2
          })
        } else if (res.data.mylist.zyzx == "银保监会专项") {
          _this.setData({
            lq_show: 14,
            img_show: 2
          })
        } else if (res.data.mylist.zyzx == "证监会专项（财金类）") {
          _this.setData({
            lq_show: 15,
            img_show: 1
          })
        } else if (res.data.mylist.zyzx == "证监会专项（会计类）") {
          _this.setData({
            lq_show: 16,
            img_show: 1
          })
        } else if (res.data.mylist.zyzx == "证监会专项（法律类）") {
          _this.setData({
            lq_show: 17,
            img_show: 1
          })
        } else if (res.data.mylist.zyzx == "证监会专项（计算机类）") {
          _this.setData({
            lq_show: 18,
            img_show: 1
          })
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
    var mythis = this;
    mythis.data.p = mythis.data.p + 1;
    var phone=this.data.phone;
    this.getproinfo(this.data.pagesize, this.data.p, mythis, phone);
  },
  /**
   * 获取项目列表
   */
  getproinfo: function (pagesize, p, mythis, phone){
    wx.request({
      url: 'https://hd.offcn.com/2017gksf/index.php/home/index19/getpage',
      method: 'post',
      data: {
        phone: phone,
        page: p
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data.msg)
        //如果搜出来的结果<1 就说明后面已经没数据可加载了，所以将state设为0
        if (res.data.msg=="no")
          mythis.setData({
            state: 0
          });
        else {
          var state1 = 1;
          //如果有数据，但小于每次期望加载的数据量（pagesize）,将state设为0，表示后面已没有数据可加载
          if (res.data.msg == "no")
            var state1 = 0;
          //循环将结果集追加到数组后面
          for (var i = 0; i < res.data.html.length; i++) {
            mythis.data.allProject.push(res.data.html[i]);
          }
          mythis.setData({
            list: mythis.data.allProject,
            state: state1
          });
        }
        console.log(mythis.data.list)
      },
      fail: function (res) {
        console.log(res);
      }
    })
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