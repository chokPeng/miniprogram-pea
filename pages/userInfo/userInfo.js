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
    var user=wx.getStorageSync('userInfo');
    this.data.userId=user.userId;           //设置userId为缓存里的值
    console.log('userId',this.data.userId)
    this.data.userName=user.userName;       //设置userName为缓存里的值
    this.setData({
      userPassword:user.userPassword,
      userInfo:user.userInfo,
      userSex:user.userSex,
      userAddress:user.userAddress,
      userName:user.userName,
      userAvatar: user.userAvatar+"?q="+Math.random()*999
    })
  },
  updateUserInfo: function (event) {
    console.log(event);
    wx.request({
      url: 'http://localhost:8080/pea/updateUserInfo',
      method: 'POST',
      data: {
        userId:this.data.userId,
        userName: event.detail.value.userName,
        userPassword: event.detail.value.userPassword,
        userSex:event.detail.value.userSex,
        userInfo: event.detail.value.userInfo,
        userAddress: event.detail.value.userAddress
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        if (res.data.msg == "修改成功") {     //修改成功
          //将用户信息存入缓存
          wx.setStorageSync('userInfo', res.data.user)
          wx.showToast({
            title: '修改成功',
            icon: 'success',
            duration: 1000
          })
        } else {          //修改失败
          wx.showToast({
            title: '修改失败啊',
            icon: 'none',
            duration: 1000
          })
        }
      }
    })
  },
  chooseImage: function (e) {
    var _this = this;
    wx.chooseImage({
      success(res) {
        const tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: 'http://localhost:8080/pea/uploadFile',
          formData: {
            userId:_this.data.userId,
            userName:_this.data.userName
          },
          method: 'POST',
          filePath: tempFilePaths[0],
          name: 'img',
          success(res) {
            res.data=JSON.parse(res.data)
            console.log(res.data)
            console.log(res.data.msg)
            if (res.data.msg=="上传成功") {     //修改成功
              wx.showToast({
                title: '上传头像成功',
                icon: 'success',
                duration: 1000
              })
              wx.request({
                url: 'http://localhost:8080/pea/queryUser',
                method:'POST',
                data: {
                  userId: _this.data.userId,
                },
                header: {
                  'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                success(res){
                  console.log('res',res)
                  wx.setStorageSync('userInfo', res.data.user);
                  _this.onLoad();
                  }
                })           
            } else {          //修改失败
              wx.showToast({
                title: '上传头像失败',
                icon: '',
                duration: 1000
              })
            }
          }
        })
      }
    })
  }
})