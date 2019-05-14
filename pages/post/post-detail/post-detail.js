// pages/post/post-detail.js
Page({
  data: {
    postIdx: '',
    userAvatar:''
  },
  onLoad: function (options) {
    var _this=this;
    //将post.js传过来的movieListIndex赋给Index
    var index = options.movieListIndex;
    this.data.postIdx =index
    //根据传过来的Index去缓存里获取数据
    var movieData = wx.getStorageSync('movieDetail');
    this.setData({
      postDetail: movieData[index]
    })
    //查询电影评论
    wx.request({
      url: 'http://localhost:8080/pea/queryComments',
      method: 'POST',
      data: {
        //将movieData[Index].movieName的值传到后台
        movieName: movieData[index].movieName
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        _this.setData({
          AllComments: res.data.comment
        })
      }
    })
  },
  onShow(){
  },
  jumpToPostComment:function(e){    //跳转到评论页面
    wx.navigateTo({
      url: '../post-Comment/post-Comment?index='+this.data.postIdx
    })
  }
})