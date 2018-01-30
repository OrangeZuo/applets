Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner_img: "../images/pic/banner.jpg",
    phone_icon: "../images/phone.png",
    address_icon: "../images/address.png",
    service_array: [{
      icon: '../images/tea.png',
      icon_name: '茶饮'
    }, {
      icon: '../images/air.png',
      icon_name: '空调'
    }, {
      icon: '../images/park.png',
      icon_name: '停车场'
    }, {
      icon: '../images/wx.png',
      icon_name: '微信'
    }, {
      icon: '../images/card.png',
      icon_name: '刷卡'
    }, {
      icon: '../images/ali.png',
      icon_name: '支付宝'
    }]
  },
  phone_call: function (e) {
    wx.makePhoneCall({
      phoneNumber: '023-40405060',
      success: function () {
        console.log("成功拨打电话")
      }
    })
  },
  address_map: function () {
    wx.getLocation({
      type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标  
      success: function (res) {
        // success  
        wx.openLocation({
          latitude: 29.8541500000,  // 纬度，范围为-90~90，负数表示南纬  
          longitude: 107.0680200000, // 经度，范围为-180~180，负数表示西经  
          scale: 28, // 缩放比例 
          name: '古巷花艺',
          address: '重庆市长寿区菩提街道桃园西四路1号51幢1-5（川渝小吃街，力军代驾旁）'
        })
      }
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

  }
})