//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '古巷花艺',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    array: [{
      mode: 'scaleToFill',
      pic_name: '一周一花',
      pic_price: '￥129',
      src: '../images/pic/one.jpg'
    }, {
      mode: 'scaleToFill',
      pic_name: '韩式风范',
      pic_price: '￥198',
      src: '../images/pic/two.jpg'
    }, {
      mode: 'scaleToFill',
      pic_name: '挚爱礼盒',
      pic_price: '￥388',
      src: '../images/pic/three.jpg'
    }, {
      mode: 'scaleToFill',
      pic_name: '自然清新',
      pic_price: '￥128',
      src: '../images/pic/four.jpg'
    }, {
      mode: 'scaleToFill',
      pic_name: '至尊典雅',
      pic_price: '￥118',
      src: '../images/pic/five.jpg'
    }, {
      mode: 'scaleToFill',
      pic_name: '向阳兴盛',
      pic_price: '￥268',
      src: '../images/pic/six.jpg'
    }, {
      mode: 'scaleToFill',
      pic_name: '繁盛花开',
      pic_price: '￥118',
      src: '../images/pic/seven.jpg'
    }, {
      mode: 'scaleToFill',
      pic_name: '满天繁星',
      pic_price: '￥138',
      src: '../images/pic/eight.jpg'
    }],
    slider: [
      { picUrl: '../images/pic/banner1.jpg' },
      { picUrl: '../images/pic/banner2.jpg' },
    ],
    swiperCurrent: 0,
  },
  upper: function (e) {
    // console.log(e)
  },
  lower: function (e) {
    // console.log(e)
  },
  scroll: function (e) {
    // console.log(e)
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },
  swiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
