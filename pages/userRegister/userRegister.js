Page({
  data: {
    
  },
  onLoad: function (options) {
    
  },
  onReady: function () {
    
  },
  onShow: function () {
    
  },
  userRegister: function (event) {
    console.log(event);
    wx.request({
      url: 'http://localhost:8080/pea/userRegister',
      method: 'POST',
      data: {
        userId:event.detail.value.userId,
        userName: event.detail.value.userName,
        userPassword: event.detail.value.userPassword,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        if (res.data.msg == "注册成功") {     //注册成功
          wx.showToast({
            title: '注册成功啦',
            icon: 'success',
            duration: 1000
          })
          wx.setStorageSync('userInfo', res.data.user)
          wx.redirectTo({
            url: '../login/login',
          })
        } else {          //注册失败
          wx.showToast({
            title: '注册失败',
            icon: '',
            duration: 1000
          })
        }
      }
    })
  },
})