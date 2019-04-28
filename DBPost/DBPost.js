class DBPost{
  constructor(movieId) {
    this.storageKeyName = 'movieDetail';
    this.movieId = movieId;
  }
  //得到全部电影信息
  getAllMovieData(){
    var res=wx.getStorageSync(this.storageKeyName);
    //如果缓存没有,则向后台发出请求
    if(!res){
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
        success: function (movieRes) {
          console.log(movieRes),
          wx.setStorageSync('movieDetail', movieRes.data.movieList)
        }
      })
      //将缓存的值赋给res
      res = wx.getStorageSync('movieDetail');
    }
  }
  //获取指定id号的文章数据
  getMovieItemById() {
    var movieData=this.getAllMovieData();
    var len=movieData.length;
    for(var i=0;i<len;i++){
      if(movieData[i].movieId==this.movieId){
        return {
          index:i,
          data:movieData[i]
        }
      }
    }
  }
};
export { DBPost }
  