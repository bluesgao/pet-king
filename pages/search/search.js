// pages/search/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        hotList:["王思冲11111111","pgoneweqweqwewqeqweqweqweqweqw","李小璐","做头发","夜宿门","离婚"],
      histList: ["王思冲111", "王思冲222"]
    },
    goBack() {
        //返回上一页
        const pages = getCurrentPages();
        if (pages.length >= 2) {
            wx.navigateBack({
                delta: 1
            });
        } else {
          wx.switchTab({
                url: '/pages/home/home'
            });
        }
    },
    goHome() {
        //跳转首页，此处不能使用navigateTo
        wx.switchTab({
            url: '/pages/home/home'
        });
    },

    //搜索框输入时触发
    searchList(ev) {
        let e = ev.detail;
        console.info(e.detail.value, '模糊查询字段')
        this.setData({
            searchstr: e.detail.value
        })

        //跳转搜索页面
        wx.navigateTo({
            url: '/pages/search/search'
        });
    },
    //搜索回调
    endsearchList(e) {
        console.info('搜索框回调函数')
    },
    // 取消搜索
    cancelSearch() {
        console.info('取消搜索回调函数')
        this.setData({
            searchstr: ''
        })
    },
    //清空搜索框
    clearSearch(e) {
        console.info('清空搜索框回调函数')
        this.setData({
            searchstr: ''
        })
    },
    getfocus(e) {
        console.info('获取焦点回调函数', e)
    },
    refresh(){
        console.info('热门搜索刷新')
    },
    clearHist(){
        console.info('搜索历史清除前',this.data.histList)
        this.setData({
            histList: ''
        })
        console.info('搜索历史清除后', this.data.histList)
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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