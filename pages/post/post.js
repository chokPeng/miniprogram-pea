
Page({
  data:{

  },
  onLoad:function(options){
    var _this=this;
    wx.request({
      url: 'http://localhost:8080/pea/queryMovie',
      method:'POST',
      data:{
        movieName:''
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success:function(res){
        console.log(res.data.movieList)
         _this.setData({
          post:res.data.movieList
        })
      }
    })
  },
  
  movieDetail(event){
    console.log("点击电影详情")
  }
})