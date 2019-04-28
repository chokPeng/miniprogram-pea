// pages/post/post-detail.js
Page({
  data: {

  },
  onLoad: function (options) {
    //将post.js传过来的movieListIndex赋给Index
    var Index = options.movieListIndex;
    console.log("Index:" +Index);
    var movieData=wx.getStorageSync('movieDetail');
    console.log(movieData[Index]);
    this.setData({
      postDetail:movieData[Index]
    })
  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})