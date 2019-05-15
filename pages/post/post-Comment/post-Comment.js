
Page({
  data: {
    index:'',
    textarea:''
  },
  onLoad: function (options) {
    console.log(options.index)
    this.data.index = options.index     //将post-detail页面传过来的值赋给全局变量index
  },
  onReady: function () {
    
  },
  score(e){ 
    console.log(e)
    this.setData({
      score:e.detail.value
    })
  },
  textarea(e){
    this.data.textarea=e.detail.value   //将输入的评论内容赋值给全局变量textarea
  },
  postComment:function(e){
    var util = require('../../../utils/util.js'); //导入util.js包
    var DATE = util.formatDate(new Date());
    var movieStorage=wx.getStorageSync('movieDetail');
    var movie=movieStorage[this.data.index];
    var user = this._getUserInfoStorage();    //获取缓存里的userInfo信息
    wx.request({
      url: 'http://localhost:8080/pea/postComment',
      method:'POST',
      data: {
        commentDate:DATE,
        userId:user.userId,
        userName:user.userName,
        commentContent:this.data.textarea,   
        movieName:movie.movieName,
        userAvatar: user.userAvatar
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        console.log(res)
        if(res.data.msg=="评论成功"){
          wx.showToast({
            title: '评论成功啊',
            icon: 'success',
            duration: 1000
          })
          wx.navigateBack({
            
          })
        }else{
          wx.showToast({
            title: '评论失败啊',
            duration: 1000
          })
        }
      }
    })
  },
  _getUserInfoStorage:function(e){                       //获取缓存里userInfo的数据
    return wx.getStorageSync('userInfo')  
  }
})