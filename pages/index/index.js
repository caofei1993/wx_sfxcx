//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    flag: 0,
    show:0,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    select: false,
    select1: false,
    select2: false,
    select3: false,
    diqu: '地区',
    xtlx: '系统类型',
    bmmc: '部门名称',
    zwmc: '职位名称',
    inputValue: '',
    inputValue1: '',
    inputValue2: '',
    inputValue3: '',
    inputValue4: '',
    inputValue5: '',
    inputValue6: '',
    yzm: '获取验证码',
    paiming:0
  },
  //查排名跳转
  searhpmtz:function(e){
    wx.navigateTo({
      url: "../old_user/old_user"
    })
  },
  //更多跳转
  more: function (e) {
    wx.navigateTo({
      url: "../more/more"
    })
  },
  //排名弹窗
  tchide:function(e){
    this.setData({
      paiming: 0
    })
  },
  //获取准考证号value值
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  //获取笔试总分value值
  bindKeyInput6: function (e) {
    this.setData({
      inputValue6: e.detail.value
    })
  },
  //获取姓名value值
  bindKeyInput1: function (e) {
    this.setData({
      inputValue1: e.detail.value
    })
  },
  //获取手机号value值
  bindKeyInput2: function (e) {
    this.setData({
      inputValue2: e.detail.value
    })
  },
  //获取验证码value值
  bindKeyInput3: function (e) {
    this.setData({
      inputValue3: e.detail.value
    })
  },
  //获取部门代码value值
  bindKeyInput4: function (e) {
    this.setData({
      inputValue4: e.detail.value
    })
  },
  //获取职位代码value值
  bindKeyInput5: function (e) {
    this.setData({
      inputValue5: e.detail.value
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //信息查询切换
  switchNav: function (e) {
    console.log(e.currentTarget.id);
    this.setData({
      flag: e.currentTarget.id,
      show: e.currentTarget.id
    })
  },
  //地区下拉
  bindShowMsg() {
    this.setData({
      select: !this.data.select
    })
  },
  mySelect(e) {
    var name = e.currentTarget.dataset.name
    this.setData({
      diqu: name,
      select: false
    })
  },
  //系统类型下拉
  bindShowMsg1() {
    this.setData({
      select1: !this.data.select1
    })
  },
  mySelect1(e) {
    var name1 = e.currentTarget.dataset.name
    this.setData({
      xtlx: name1,
      select1: false
    })
  },
  //部门名称下拉
  bindShowMsg2() {
    this.setData({
      select2: !this.data.select2
    })
  },
  mySelect2(e) {
    var name2 = e.currentTarget.dataset.name
    this.setData({
      bmmc: name2,
      select2: false
    })
  },
  //职位名称下拉
  bindShowMsg3() {
    this.setData({
      select3: !this.data.select3
    })
  },
  mySelect3(e) {
    var name3 = e.currentTarget.dataset.name
    this.setData({
      zwmc: name3,
      select3: false
    })
  },


  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
