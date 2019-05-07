
Page({
  data:{

  },
  onLoad:function(){
    
  },
  onShow(){
    var _this = this;
    wx.request({
      url: 'http://localhost:8080/pea/queryMovie',
      method: 'POST',
      data: {
        movieName: ''
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        console.log(res)
        _this.setData({
          post: res.data.movieList
        })
        wx.setStorageSync('movieDetail', res.data.movieList)
      }
    })
  },
  //重定向到post-detail页面,并把点击到的位置的数组下标传过去
  movieDetail(event){
    var movieListIndex=event.currentTarget.dataset.index;
    wx.navigateTo({
      url: 'post-detail/post-detail?movieListIndex=' + movieListIndex,
    })
  }
})