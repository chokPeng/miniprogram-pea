// pages/welcome/welcome.js
Page({
  onUnload:function(event){
    console.log("page is unload")
  },
  onHide:function(event){
    console.log("page is hide")
  },
  onTapJump:function(event){
    wx.navigateTo({
      url: '../post/post',
      success:function(){
        console.log("jump success")
      },
      fail:function(){
        console.log("jump failed")
      },
      complete:function(){
        console.log("jump complete")
      }
    });
  }
})