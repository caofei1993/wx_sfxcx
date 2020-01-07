//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    avatarUrl:"",
    nickName:"",
    flag: 0,
    show:0,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    
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
    disabled:false,
    code: '',
    yzm: '获取验证码',
    paiming:0,
    inputValue_1: '',
    inputValue1_1: '',
    inputValue2_1: '',
    inputValue3_1: '',
    inputValue4_1: '',
    inputValue5_1: '',
    inputValue6_1: '',
    inputValue7_1: '',
    list:[],
    list1: [],
    list2: [],
    iscode: null,
    dryingbtnid:1,
    _html:[],
    tel:"",
    hideFlag: true,//true-隐藏  false-显示
    hideFlag1: true,
    hideFlag2: true,
    hideFlag3: true,
    select: false,
    select1: false,
    select2: false,
    select3: false,
    animationData: {},//
    value: '地区',
  },
  
  //取消
  mCancel: function () {
    var that = this;
    that.hideModal();
  },

  // 显示遮罩层
  showModal: function () {
    var that = this;
    that.setData({
      hideFlag: false
    })
    // 创建动画实例
    var animation = wx.createAnimation({
      duration: 400,//动画的持续时间
      timingFunction: 'ease',//动画的效果 默认值是linear->匀速，ease->动画以低速开始，然后加快，在结束前变慢
    })
    this.animation = animation; //将animation变量赋值给当前动画
    var time1 = setTimeout(function () {
      that.slideIn();//调用动画--滑入
      clearTimeout(time1);
      time1 = null;
    }, 100)
  },

  // 隐藏遮罩层
  hideModal: function () {
    var that = this;
    var animation = wx.createAnimation({
      duration: 400,//动画的持续时间 默认400ms
      timingFunction: 'ease',//动画的效果 默认值是linear
    })
    this.animation = animation
    that.slideDown();//调用动画--滑出
    var time1 = setTimeout(function () {
      that.setData({
        hideFlag: true
      })
      clearTimeout(time1);
      time1 = null;
    }, 220)//先执行下滑动画，再隐藏模块

  },


  mCancel1: function () {
    var that = this;
    that.hideModal1();
  },
  // 隐藏遮罩层
  hideModal1: function () {
    var that = this;
    var animation = wx.createAnimation({
      duration: 400,//动画的持续时间 默认400ms
      timingFunction: 'ease',//动画的效果 默认值是linear
    })
    this.animation = animation
    that.slideDown();//调用动画--滑出
    var time1 = setTimeout(function () {
      that.setData({
        hideFlag1: true
      })
      clearTimeout(time1);
      time1 = null;
    }, 220)//先执行下滑动画，再隐藏模块
  },

  mCancel2: function () {
    var that = this;
    that.hideModal2();
  },
  // 隐藏遮罩层
  hideModal2: function () {
    var that = this;
    var animation = wx.createAnimation({
      duration: 400,//动画的持续时间 默认400ms
      timingFunction: 'ease',//动画的效果 默认值是linear
    })
    this.animation = animation
    that.slideDown();//调用动画--滑出
    var time1 = setTimeout(function () {
      that.setData({
        hideFlag2: true
      })
      clearTimeout(time1);
      time1 = null;
    }, 220)//先执行下滑动画，再隐藏模块
  },
  mCancel3: function () {
    var that = this;
    that.hideModal3();
  },
  // 隐藏遮罩层
  hideModal3: function () {
    var that = this;
    var animation = wx.createAnimation({
      duration: 400,//动画的持续时间 默认400ms
      timingFunction: 'ease',//动画的效果 默认值是linear
    })
    this.animation = animation
    that.slideDown();//调用动画--滑出
    var time1 = setTimeout(function () {
      that.setData({
        hideFlag3: true
      })
      clearTimeout(time1);
      time1 = null;
    }, 220)//先执行下滑动画，再隐藏模块
  },
  //动画 -- 滑入
  slideIn: function () {
    this.animation.translateY(0).step() // 在y轴偏移，然后用step()完成一个动画
    this.setData({
      //动画实例的export方法导出动画数据传递给组件的animation属性
      animationData: this.animation.export()
    })
  },
  //动画 -- 滑出
  slideDown: function () {
    this.animation.translateY(300).step()
    this.setData({
      animationData: this.animation.export(),
    })
  },
  onLoad: function (e) {
    let that = this;
    that.setData({
      role: app.globalData.role
    }) 
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        avatarUrl: app.globalData.userInfo.avatarUrl,
        nickName: app.globalData.userInfo.nickName,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          avatarUrl: app.globalData.userInfo.avatarUrl,
          nickName: app.globalData.userInfo.nickName,
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
            avatarUrl: app.globalData.userInfo.avatarUrl,
            nickName: app.globalData.userInfo.nickName,
            hasUserInfo: true
          })
        }
      })
    };
   
  },
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    app.globalData.code = e.detail.code
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    });
  },
  //查排名跳转
  searhpmtz:function(e){
    var _that = this;
    console.log(_that.data.userInfo)
    if (_that.data.userInfo == undefined) {
      var userInfo = ""
    } else {
      var userInfo = _that.data.userInfo;
    }
    wx.redirectTo({
      url: '../old_user/old_user?userInfo=' + JSON.stringify(userInfo)
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
      url: "../more/more?userInfo=" + JSON.stringify(userInfo) + "&phone=" + _that.data.tel
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
      inputValue: e.detail.value,
      inputValue_1:1,
      inputValue7_1:1
    });
  },
  inputBlur:function(e){
    this.setData({
      inputValue_1: 0,
      inputValue7_1: 0
    });
  },
  //获取笔试总分value值
  bindKeyInput6: function (e) {
    this.setData({
      inputValue6: e.detail.value,
      inputValue6_1: 1
    })
  },
  inputBlur6: function (e) {
    this.setData({
      inputValue6_1: 0
    });
  },
  //获取姓名value值
  bindKeyInput1: function (e) {
    this.setData({
      inputValue1: e.detail.value,
      inputValue1_1: 1
    })
  },
  inputBlur1: function (e) {
    this.setData({
      inputValue1_1: 0
    });
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
  //获取验证码value值
  bindKeyInput3: function (e) {
    this.setData({
      inputValue3: e.detail.value
    })
  },
  
  //获取部门代码value值
  bindKeyInput4: function (e) {
    this.setData({
      inputValue4: e.detail.value,
      inputValue4_1: 1
    })
  },
  inputBlur4: function (e) {
    this.setData({
      inputValue4_1: 0
    });
  },
  //获取职位代码value值
  bindKeyInput5: function (e) {
    this.setData({
      inputValue5: e.detail.value,
      inputValue5_1: 1
    })
  },
  inputBlur5: function (e) {
    this.setData({
      inputValue5_1: 0
    });
  },
  //事件处理函数
  bindViewTap: function() {
    wx.redirectTo({
      url: '../logs/logs'
    })
  },
  //信息查询切换
  switchNav: function (e) {
    console.log(e.currentTarget.id);    
    if (e.currentTarget.id==0){
      this.setData({
        dryingbtnid:1
      })
      console.log(this.data.dryingbtnid)
    }else{
      this.setData({
        dryingbtnid:2
      })
      console.log(this.data.dryingbtnid)
    }
    this.setData({
      flag: e.currentTarget.id,
      show: e.currentTarget.id
    })
  },
  //地区下拉
  bindShowMsg() {
    var that = this;
    that.setData({
      hideFlag: false,
      list: [],
      list1: [],
      list2: [],
      xtlx: '系统类型',
      bmmc: '部门名称',
      zwmc: '职位名称',
    })
    // 创建动画实例
    var animation = wx.createAnimation({
      duration: 400,//动画的持续时间
      timingFunction: 'ease',//动画的效果 默认值是linear->匀速，ease->动画以低速开始，然后加快，在结束前变慢
    })
    this.animation = animation; //将animation变量赋值给当前动画
    var time1 = setTimeout(function () {
      that.slideIn();//调用动画--滑入
      clearTimeout(time1);
      time1 = null;
    }, 100)
  },
  mySelect(e) {
    var name = e.currentTarget.dataset.name
    this.setData({
      diqu: name,
      hideFlag: true
    })
  },
  //系统类型下拉
  bindShowMsg1() {
    let area=this.data.diqu;
    let that = this;    
    wx.request({
      url: 'https://hd.offcn.com/2017gksf/index.php/home/index19/gettype',
      data:{
        area:area
      },
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        that.setData({
          list: res.data,
        })
      },
      fail: function (res){
        wx.showToast({
          title: '数据获取失败！',
          duration: 2000
        })
      }
    });
    if (area=="地区"){
      this.setData({
        hideFlag1: true,
      })
    }else{
      this.setData({
        hideFlag1: false,
      })
    }    
    // 创建动画实例
    var animation = wx.createAnimation({
      duration: 400,//动画的持续时间
      timingFunction: 'ease',//动画的效果 默认值是linear->匀速，ease->动画以低速开始，然后加快，在结束前变慢
    })
    this.animation = animation; //将animation变量赋值给当前动画
    var time1 = setTimeout(function () {
      that.slideIn();//调用动画--滑入
      clearTimeout(time1);
      time1 = null;
    }, 100)
  },
  mySelect1(e) {
    var name1 = e.currentTarget.dataset.name
    this.setData({
      xtlx: name1,
      hideFlag1: true
    })
  },
  //部门名称下拉
  bindShowMsg2() {
    let area = this.data.diqu;
    let systype = this.data.xtlx;
    let that1 = this;
    wx.request({
      url: 'https://hd.offcn.com/2017gksf/index.php/home/index19/getdep',
      data: {
        area: area,
        systype:systype
      },
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        that1.setData({
          list1: res.data,
        })
      },
      fail: function (res) {
        wx.showToast({
          title: '数据获取失败！',
          duration: 2000
        })
      }
    });
    if (systype == "系统类型") {
      this.setData({
        hideFlag2: true,
      })
    } else {
      this.setData({
        hideFlag2: false,
      })
    }
    // 创建动画实例
    var animation = wx.createAnimation({
      duration: 400,//动画的持续时间
      timingFunction: 'ease',//动画的效果 默认值是linear->匀速，ease->动画以低速开始，然后加快，在结束前变慢
    })
    this.animation = animation; //将animation变量赋值给当前动画
    var time1 = setTimeout(function () {
      that1.slideIn();//调用动画--滑入
      clearTimeout(time1);
      time1 = null;
    }, 100)
  },
  mySelect2(e) {
    var name2 = e.currentTarget.dataset.name
    this.setData({
      bmmc: name2,
      hideFlag2: true,
    })
  },
  //职位名称下拉
  bindShowMsg3() {
    let area = this.data.diqu;
    let systype = this.data.xtlx;
    let department = this.data.bmmc;
    let that2 = this;
    wx.request({
      url: 'https://hd.offcn.com/2017gksf/index.php/home/index19/getjob',
      data: {
        area: area,
        systype: systype,
        department: department
      },
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        that2.setData({
          list2: res.data,
        })
      },
      fail: function (res) {
        wx.showToast({
          title: '数据获取失败！',
          duration: 2000
        })
      }
    });
    if (department == "部门名称") {
      this.setData({
        hideFlag3: true,
      })
    } else {
      this.setData({
        hideFlag3: false,
      })
    }
    // 创建动画实例
    var animation = wx.createAnimation({
      duration: 400,//动画的持续时间
      timingFunction: 'ease',//动画的效果 默认值是linear->匀速，ease->动画以低速开始，然后加快，在结束前变慢
    })
    this.animation = animation; //将animation变量赋值给当前动画
    var time1 = setTimeout(function () {
      that2.slideIn();//调用动画--滑入
      clearTimeout(time1);
      time1 = null;
    }, 100)
  },
  mySelect3(e) {
    var name3 = e.currentTarget.dataset.name
    this.setData({
      zwmc: name3,
      hideFlag3: true
    })
  },
  //信息查询验证码获取
  getCode: function () {
    var a = this.data.inputValue2;
    var _this = this;
    if (_this.data.userInfo == undefined) {
      var nickname = "";
      var avatarurl = "";
      var userInfo = ""
    } else {
      var nickname = _this.data.userInfo.nickName;
      var avatarurl = _this.data.userInfo.avatarUrl;
      var userInfo = _this.data.userInfo;
    }
    var openid = wx.getStorageSync('openid');   
    var myreg = /^1[3456789]\d{9}$/;
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
        url: "https://hd.offcn.com/2017gksf/index.php/home/index19/getcode",
        data: {
          phone: a,
          nickname: nickname,
          avatarurl: avatarurl,
          userinfo: userInfo,
          openid: openid
        },        
        success(res) {
          console.log(res.data.yh)
          if (res.data.status==1){
            if (res.data.yh == 1){
              _this.setData({
                iscode: res.data.yzm,
                disabled:true
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
            } else if (res.data.yh == 2) {
              _this.setData({
                paiming: 1
              })
            }            
          } else{
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
          
        }
      })
    }
  },

  //获取验证码
  getVerificationCode() {
    this.getCode();
    var _this = this  
  },
  




  //新用户查询
  getsearch:function(){
    var _that=this;
    var dryingbtnid = _that.data.dryingbtnid;     
    var typeid=_that.data.dryingbtnid;
    var myreg = /^1[3456789]\d{9}$/;
    if (_that.data.userInfo ==undefined){
      var nickname = "";
      var avatarurl = "";
      var userInfo=""
    }else{
      var nickname = _that.data.userInfo.nickName;
      var avatarurl = _that.data.userInfo.avatarUrl;
      var userInfo = _that.data.userInfo;
    }
    
    console.log(JSON.stringify(userInfo))  
    if (dryingbtnid==1){      
      var area = this.data.diqu;
      var systype = this.data.xtlx;
      var department = this.data.bmmc;
      var job = this.data.zwmc;
      var zkzh = this.data.inputValue;
      var allscore = this.data.inputValue6;
      var name = this.data.inputValue1;
      var phone = this.data.inputValue2;
      var yzm = this.data.inputValue3;      
      var openid = wx.getStorageSync('openid');      
      console.log(phone)
      console.log(openid);
      console.log(nickname);
      console.log(avatarurl);
      if (area=="地区"){
        wx.showToast({
          title: '地区不能为空',
          icon: 'none',
          duration: 1000
        })
        return false;
      }
      if (systype == "系统类型") {
        wx.showToast({
          title: '系统类型不能为空',
          icon: 'none',
          duration: 1000
        })
        return false;
      }
      if (department == "部门名称") {
        wx.showToast({
          title: '部门名称不能为空',
          icon: 'none',
          duration: 1000
        })
        return false;
      }
      if (job == "职位名称") {
        wx.showToast({
          title: '职位名称不能为空',
          icon: 'none',
          duration: 1000
        })
        return false;
      }
      var reg = /^\d{15}$/;
      if (zkzh == "") {
        wx.showToast({
          title: '准考证号不能为空',
          icon: 'none',
          duration: 1000
        })
        return false;
      } else if (!reg.test(zkzh)){
        wx.showToast({
          title: '请输入真实的准考证号',
          icon: 'none',
          duration: 1000
        })
        return false;
      }
    
      if (allscore == "") {
        wx.showToast({
          title: '笔试总分不能为空',
          icon: 'none',
          duration: 1000
        })
        return false;
      } else if (parseFloat(allscore) < 10 || parseFloat(allscore) > 180) {
        wx.showToast({
          title: '请输入正确的笔试总成绩',
          icon: 'none',
          duration: 1000
        })
        return false;
      }
     
      var reg2 = /^[\u4e00-\u9fa5]{2,10}$/;
      if (name == "") {
        wx.showToast({
          title: '姓名不能为空',
          icon: 'none',
          duration: 1000
        })
        return false;
      } else if (!reg2.test(name)) {
        wx.showToast({
          title: '姓名长度应在2-10之间，中文字符',
          icon: 'none',
          duration: 1000
        })
        return false;
      }
      if (phone == "") {
        wx.showToast({
          title: '手机号不能为空',
          icon: 'none',
          duration: 1000
        })
        return false;
      } else if (!myreg.test(phone)) {
        wx.showToast({
          title: '请输入正确的手机号',
          icon: 'none',
          duration: 1000
        });
        return false;
      }
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
      wx.request({
        url: 'https://hd.offcn.com/2017gksf/index.php/home/index19/cheackzwnum',
        data: {
          typeid: typeid,
          area: area,
          systype: systype,
          department: department,
          job: job
        },
        success: function (res1) { 
          if (res1.data =="success"){
              wx.request({
                          url: 'https://hd.offcn.com/2017gksf/index.php/home/index19/addshaifen',
                          data: {
                            typeid: dryingbtnid,
                            avatarurl: avatarurl,
                            nickname: nickname,
                            openid: openid,
                            area: area,
                            systype: systype,
                            department: department,
                            job: job,
                            zkzh: zkzh,
                            allscore: allscore,
                            name: name,
                            phone: phone,
                            yzm: yzm,
                            userinfo: JSON.stringify(userInfo)
                          },
                          success: function (res) {
                            console.log(res.data)
                            if (res.data.status == 1) {
                              _that.setData({
                                _html: res.data.html,
                                tel: res.data.phone
                              })
                              console.log(res.data.html)
                              console.log(res.data.phone)
                              wx.redirectTo({
                                // url: "../pmjg/pmjg?html=_html&phone=tel"
                                url: '../pmjg/pmjg?html=' + JSON.stringify(_that.data._html) + '&phone=' + _that.data.tel + '&userInfo=' + JSON.stringify(userInfo)
                              })
                            } else if (res.data.status == 4) {
                              _that.setData({
                                paiming: 1
                              })
                            }

                          }
                        })
          } else if (res1.data == "error"){
            wx.showToast({
              title: '地区、系统类型、部门名称、职位名称有误！',
              icon: 'none',
              duration: 1000
            })
          }
          
        }
      })  
      
    } else if (dryingbtnid==2){
      var bmnum = this.data.inputValue4;
      var zwnum = this.data.inputValue5;
      console.log(bmnum)
      console.log(zwnum)
      var zkzh = this.data.inputValue;
      var allscore = this.data.inputValue6;
      var name = this.data.inputValue1;
      var phone = this.data.inputValue2;
      var yzm = this.data.inputValue3;
      var openid = wx.getStorageSync('openid');
      console.log(phone)
      console.log(openid);
      // console.log(nickname);
      console.log(avatarurl);
      var regbm = /^\d{6}$/;
      if (bmnum==""){
        wx.showToast({
          title: '部门代码不能为空',
          icon: 'none',
          duration: 1000
        })
        return false;
      } else if (!regbm.test(bmnum)) {
        wx.showToast({
          title: '请输入正确的部门代码',
          icon: 'none',
          duration: 1000
        })
        return false;
      }
      var regzw = /^\d{12}$/;
      if (zwnum == "") {
        wx.showToast({
          title: '职位代码不能为空',
          icon: 'none',
          duration: 1000
        })
        return false;
      } else if (!regzw.test(zwnum)) {
        wx.showToast({
          title: '请输入正确的职位代码',
          icon: 'none',
          duration: 1000
        })
        return false;
      }
      
      var reg = /^\d{15}$/;
      if (zkzh == "") {
        wx.showToast({
          title: '准考证号不能为空',
          icon: 'none',
          duration: 1000
        })
        return false;
      } else if (!reg.test(zkzh)) {
        wx.showToast({
          title: '请输入真实的准考证号',
          icon: 'none',
          duration: 1000
        })
        return false;
      }

      
      if (allscore == "") {
        wx.showToast({
          title: '笔试总分不能为空',
          icon: 'none',
          duration: 1000
        })
        return false;
      } else if (parseFloat(allscore) < 10 || parseFloat(allscore) > 180) {
        wx.showToast({
          title: '请输入正确的笔试总成绩',
          icon: 'none',
          duration: 1000
        })
        return false;
      }
      var reg2 = /^[\u4e00-\u9fa5]{2,10}$/;
      if (name == "") {
        wx.showToast({
          title: '姓名不能为空',
          icon: 'none',
          duration: 1000
        })
        return false;
      } else if (!reg2.test(name)) {
        wx.showToast({
          title: '姓名长度应在2-10之间，中文字符',
          icon: 'none',
          duration: 1000
        })
        return false;
      }
      if (phone == "") {
        wx.showToast({
          title: '手机号不能为空',
          icon: 'none',
          duration: 1000
        })
        return false;
      } else if (!myreg.test(phone)) {
        wx.showToast({
          title: '请输入正确的手机号',
          icon: 'none',
          duration: 1000
        });
        return false;
      }
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
      wx.request({
        url: 'https://hd.offcn.com/2017gksf/index.php/home/index19/cheackzwnum',
        data: {
          typeid: typeid,
          zwnum: zwnum,
          bmnum: bmnum
        },
        success: function (res1) {
          console.log(res1.data)
          if (res1.data == "success") {
            wx.request({
              url: 'https://hd.offcn.com/2017gksf/index.php/home/index19/addshaifen',
              data: {
                typeid: dryingbtnid,
                avatarurl: avatarurl,
                nickname: nickname,
                openid: openid,
                zwnum: zwnum,
                bmnum: bmnum,
                zkzh: zkzh,
                allscore: allscore,
                name: name,
                phone: phone,
                yzm: yzm,
                userinfo: JSON.stringify(userInfo)
              },
              success: function (res) {
                console.log(res.data)
                if (res.data.status == 1) {
                  _that.setData({
                    _html: res.data.html,
                    tel: res.data.phone
                  })
                  console.log(res.data.html)
                  console.log(res.data.phone)
                  wx.redirectTo({
                    // url: "../pmjg/pmjg?html=_html&phone=tel"
                    url: '../pmjg/pmjg?html=' + JSON.stringify(_that.data._html) + '&phone=' + _that.data.tel + '&userInfo=' + JSON.stringify(userInfo)

                  })
                } else if (res.data.status == 4) {
                  _that.setData({
                    paiming: 1
                  })
                }

              }
            })
          } else if (res1.data == "error") {
            wx.showToast({
              title: '部门代码、职位代码有误！',
              icon: 'none',
              duration: 1000
            })
          }

        }
      }) 
      
    }
  },
  getsearch1() {
    this.getsearch();
  },
  onReady:function(){
    app.getuser();
  }
  
})
