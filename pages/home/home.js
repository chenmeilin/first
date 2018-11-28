// pages/home/home.js

// 通过es6加载轮播图数据
import swipers from '../../datas/swipers.js'
// 通过commonjs加载课程数据
const courses = require('../../datas/courses.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swipers:[],//轮播图数据
    hotCourse:{
      image_url:'/images/热门.png',
      content:'热门课程'
    },
    more:{
      image_url: '/images/列表箭头.png',
      content: '更多'
    },
    recommendVideo:{
      image_url: '/images/视频.png',
      content: '推荐视频'
    },
    courses:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      swipers,
      courses
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
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