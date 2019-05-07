// pages/welcome/welcome.js
Page({
  ontap: function () {
    wx.redirectTo({
      url: '../login/login'
    })
  },
})