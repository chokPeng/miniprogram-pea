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
        userInfo: event.detail.value.userInfo,
        userAddress: event.detail.value.userAddress,
        userSex: event.detail.value.redio
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        if (res.data.msg == "注册失败") {     //修改失败
          wx.showToast({
            title: '注册失败啊',
            icon: 'none',
            duration: 1000
          })
        } else {          //修改成功
          //将用户信息存入缓存
          wx.setStorageSync('userInfo', res.data.user)
          wx.showToast({
            title: '修改成功啊',
            icon: 'success',
            duration: 1000
          })
        }
      }
    })
  },
})