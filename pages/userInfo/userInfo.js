// pages/userInfo/userInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   userId:'',
   userName:'',
   userAvatar:''
  },
  onLoad: function (options) {
 
  },
  onShow:function(options){
    var user = wx.getStorageSync('userInfo');
    this.data.userId = user.userId;           //设置userId为缓存里的值
    console.log('userId', this.data.userId)
    this.data.userName = user.userName;       //设置userName为缓存里的值
    this.setData({
      userPassword: user.userPassword,
      userInfo: user.userInfo,
      userSex: user.userSex,
      userAddress: user.userAddress,
      userName: user.userName,
      userAvatar: user.userAvatar + "?q=" + Math.random() * 999
    })
  },
  updateUserInfo:function(e){
    wx.navigateTo({
      url: '../updateUserInfo/updateUserInfo',
    })
  }
})