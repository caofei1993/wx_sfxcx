// pages/old_user/old_user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    paiming: 0,
    yzm:"获取验证码",
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    circular: false,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    userData:"",
    userlist:[],
    total:"",
    inputValue3_1: '',
    inputValue3: '',
    inputValue2_1: '',
    inputValue2: '',
    avatarurl: "",
    nickname: "",
    show: 0,
    userInfo: {},
    _html: [],
    tel: "",
    page: 1,
    iscode: null,
    tiao:"",
    disabled:false
  },
  //排名弹窗
  tchide: function (e) {
    this.setData({
      paiming: 0
    })
  },
  //查分数跳转
  lookfs: function (e) {
    wx.redirectTo({
      url: "../index/index"
    })
  },
  //更多跳转
  more: function (e) {
    var _that=this;
    console.log(_that.data.userInfo)
    if (_that.data.userInfo == undefined) {
      var userInfo = ""
    } else {
      var userInfo = _that.data.userInfo;
    }
    var phone = _that.data.phone;
    wx.redirectTo({
      url: "../more/more?userInfo=" + JSON.stringify(userInfo) + "&phone=" + _that.data.tel
    })
  },
  //获取验证码value值
  bindKeyInput3: function (e) {
    this.setData({
      inputValue3: e.detail.value
    })
  },
  //获取手机号value值
  bindKeyInput2: function (e) {
    this.setData({
      inputValue2: e.detail.value,
      inputValue2_1: 1
    })
  },
  inputBlur2: function (e) {
    this.setData({
      inputValue2_1: 0
    });
  },
  //信息查询验证码获取
  getCode: function () {
    var a = this.data.inputValue2;
    var _this = this;
    var myreg = /^(14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$$/;
    if (this.data.inputValue2 == "") {
      wx.showToast({
        title: '手机号不能为空',
        icon: 'none',
        duration: 1000
      })
      return false;
    } else if (!myreg.test(this.data.inputValue2)) {
      wx.showToast({
        title: '请输入正确的手机号',
        icon: 'none',
        duration: 1000
      });
      return false;
    } else {
      wx.request({
        url: "https://hd.offcn.com/2017gksf/index.php/home/index19/getcodepm",
        data: {
          phone: a
        },
        success(res) {
          console.log(res.data.status)
          if (res.data.yh == 2) {
            if (res.data.status == 1) {
              _this.setData({
                iscode: res.data.yzm,
                disabled: true
              })
              var num = 61;
              var timer = setInterval(function () {
                num--;
                if (num <= 0) {
                  clearInterval(timer);
                  _this.setData({
                    yzm: '重新发送',
                    disabled: false
                  })
                } else {
                  _this.setData({
                    yzm: num + "s"
                  })
                }
              }, 1000)
            } else {
              wx.showToast({
                title: '验证码获取失败',
                icon: 'none',
                duration: 1000
              })
              clearInterval(timer);
              _this.setData({
                yzm: '重新发送',
              })
            }
            
          } else if (res.data.yh == 1) {
            _this.setData({
              paiming: 1
            })
          }   
          

        }
      })
    }
  },

  //获取验证码
  getVerificationCode() {
    this.getCode();
    var _this = this
  },

  //老用户查询
  getsearch_old: function () {
      var _that = this;
      if (_that.data.userInfo == undefined) {
        var nickname = "";
        var avatarurl = "";
        var userInfo = ""
      } else {
        var nickname = _that.data.userInfo.nickName;
        var avatarurl = _that.data.userInfo.avatarUrl;
        var userInfo = _that.data.userInfo;
      }
    var phone = _that.data.inputValue2;
    var yzm = _that.data.inputValue3;
    console.log(phone)
    if (yzm == "") {
      wx.showToast({
        title: '验证码不能为空',
        icon: 'none',
        duration: 1000
      })
      return false;
    }
    if (yzm != this.data.iscode) {
      wx.showToast({
        title: '验证码错误',
        icon: 'none',
        duration: 1000
      })
      return false;
    }
      var openid = wx.getStorageSync('openid');
      var page = this.data.page
      wx.request({
        url: 'https://hd.offcn.com/2017gksf/index.php/home/index19/getpage',
        data: {
          phone: phone,
          page: page,
          yzm:yzm
        },
        success: function (res) {
          console.log(res)
          _that.setData({
            _html: res.data.html
          })
          console.log(res.data.html)
          wx.redirectTo({
            // url: "../pmjg/pmjg?html=_html&phone=tel"
            url: '../pmjg/pmjg?html=' + JSON.stringify(_that.data._html) + '&phone=' + phone + '&userInfo=' + JSON.stringify(userInfo)
          })
        }
      })
    
  },
  getsearch_old1() {
    this.getsearch_old();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     let that=this;
    wx.request({
      url: 'https://hd.offcn.com/2017gksf/index.php/home/index19/getpage',
      success: function (res) {
        that.userData = res.data;
        console.log(res.data.html);
        if (res.data.html.length>8){
          that.setData({
            tiao: 8
          });
        }else{
          that.setData({
            tiao: res.data.html.length
          });
        }
        that.setData({
          userlist: res.data.html,
          total: res.data.total
        });
      }
    })
      that.setData({
        userInfo: JSON.parse(options.userInfo)
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