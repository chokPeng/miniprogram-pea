// pages/post/post-detail.js
Page({
  data: {
  },
  onLoad: function (options) {
    //将post.js传过来的movieListIndex赋给Index
    var Index = options.movieListIndex;
    console.log("Index:" + Index);
    var movieData = wx.getStorageSync('movieDetail');
    console.log(movieData[Index]);
    this.setData({
      postDetail: movieData[Index]
    })
  },
 chooseImage:function(e){
   wx.chooseImage({
     success(res) {
       const tempFilePaths = res.tempFilePaths
       wx.uploadFile({
         url: 'http://localhost:8080/pea/uploadFile', 
         method: 'POST',
         data: {
           movieName: ''
         },
         header: {
           'content-type': 'application/x-www-form-urlencoded' // 默认值
         },
         filePath: tempFilePaths[0],
         name: 'file',
         success(res) {
           const data = res.data
           console.log(res)
         }
       })
     }
   })
  }
})