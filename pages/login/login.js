Page({
  data:{

  },
  // 监听输入
  login: function (event) {
    console.log(event);
    wx.request({
      url: 'http://localhost:8080/pea/userLogin',
      method:'POST',
      data: {
        userId:event.detail.value.userId,
        userPassword: event.detail.value.userPassword
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        if(res.data.msg=="登录失败"){     //登录失败
          wx.showToast({
            title: '登录失败啊',
            icon: 'none',
            duration: 1000
          })
        }else{          //登录成功
        //将用户信息存入缓存
          wx.setStorageSync('userInfo', res.data.user)
          wx.switchTab({
            url: '../post/post'
          });  
        }
      }
    })
  }
})