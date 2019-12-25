Component({
  data: {},
  properties: {
    item: {
      type: Object,
      value: {},
    }
  },
  methods: {
    //跳转详情页
    gotoDetail(e){
      wx.navigateTo({
        url: '/pages/post',
        success: function(res){
          // success
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
        }
      })
    }
  }
})