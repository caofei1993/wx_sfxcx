//app.js
App({
 
  onLoad: function () {
    
  },

  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    
    
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    avatarUrl:null,
    nickName:null
  },
 
  getuser:function(){
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId        
        console.log(res.code)
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'https://hd.offcn.com/2017gksf/index.php/home/index19/fromwx',
            data: {
              code: res.code
            },
            success: function (res) {
              wx.setStorageSync('openid', res.data.openid);
              if (res.data.status == 1) {

              } else if (res.data.status == 2) {
                var phone = res.data.phone;
                var openid = res.data.openid;
                var userInfo = res.data.userinfo;
                var html = res.data.html;
                console.log(phone)
                console.log(openid)
                console.log(userInfo)
                console.log(html)
                wx.redirectTo({
                  url: "../gksfpm/gksfpm?phone=" + phone + "&userInfo=" + userInfo + '&html=' + JSON.stringify(html)//跳转详情页
                  //  url: "../gksfpm/gksfpm?phone=" + phone
                })
              } else {
                console.log(openid为空)
              }
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  }
})