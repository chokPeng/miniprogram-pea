// pages/post/post-detail.js
Page({
  data: {
  },
  onLoad: function (options) {
    var _this=this;
    //将post.js传过来的movieListIndex赋给Index
    var Index = options.movieListIndex;
    console.log("Index:" + Index);
    //根据传过来的Index去缓存里获取数据
    var movieData = wx.getStorageSync('movieDetail');
    console.log('movieData.movieName' + movieData[Index].movieName)
    this.setData({
      postDetail: movieData[Index]
    })
    //查询电影评论
    wx.request({
      url: 'http://localhost:8080/pea/queryComments',
      method: 'POST',
      data: {
        //将movieData[Index].movieName的值传到后台
        movieName: movieData[Index].movieName
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        console.log(res)
        _this.setData({
          AllComments: res.data.comment
        })
      }
    })
  },
 chooseImage:function(e){
   wx.chooseImage({
     success(res) {
       const tempFilePaths = res.tempFilePaths
       wx.uploadFile({
         url: 'http://localhost:8080/pea/uploadFile',  
         formData: {
           userId:'123456'
         }, 
         method:'POST',
         filePath: tempFilePaths[0],
         name: 'img',
         success(res) {
           const data = res.data
           console.log(res)
         }
       })
     }
   })
  }
})