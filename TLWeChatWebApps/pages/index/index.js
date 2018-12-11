//index.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
     table_data_source: [
        {
           "iconurl": "/pages/images/apps_icon/amazon_icon.png",
           "title": "亚马逊-我的",
           "tap": "amazonClickRow"
        },
        {
           "iconurl": "/pages/images/apps_icon/amazon_icon.png",
           "title": "二维码",
           "tap": "scanQRCode'"
        },
        {
           "iconurl": "/pages/images/apps_icon/amazon_icon.png",
           "title": "二维码",
           "tap": "scanQRCode'"
        },
        {
           "iconurl": "/pages/images/apps_icon/amazon_icon.png",
           "title": "二维码",
           "tap": "scanQRCode'"
        },
        {
           "iconurl": "/pages/images/apps_icon/amazon_icon.png",
           "title": "二维码",
           "tap": "scanQRCode'"
        }
     ],

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
   amazonClickRow: function () {
      wx.navigateTo({
         url: '/pages/apps/amazon/mine/mine'
      })
   },
   scanQRCode: function () {

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