
Page({
  data:{

  },
  onLoad:function(options){
    const _this=this;
    wx.request({
      url: 'http://localhost:8080/pea/queryMovie',
      method:'POST',
      data:{
        movieName:'肖申克'
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success:function(data){
        console.log(data)
      }
    })
  },
  
  onTapToDetail(event){
  
  }
})