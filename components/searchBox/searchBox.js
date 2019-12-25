
// 本组件为搜索组件
// 需要传入addflag   值为true / false （搜索框右侧部分）
// 若显示搜索框右侧部分   需传入右侧图标url以及addhandle函数

Component({

  properties: {
    searchstr: {     //input  值
      type: String,
      value: '值'
    },
    searchflag: {
      type: Boolean,
      value: false,
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    // searchflag: false,   //搜索框 取消按钮显示与隐藏
  },

  /**
   * 组件的方法列表

   */
  methods: {

    //获得焦点
    getfocus() {
      this.setData({
        searchflag: true,
      })
    },
    //搜索输入
    searchList(e) {
      this.triggerEvent("searchList", e);
    },
    //查询
    endsearchList(e) {

      this.triggerEvent("endsearchList");
    },
    //失去焦点
    blursearch() {
      // console.log('失去焦点')

    },
    // 取消
    cancelSearch() {
      this.setData({
        searchflag: false,
      })
        this.triggerEvent("cancelSearch");
    },
    //清空搜索框
    clearSearch(e) {

        this.triggerEvent("clearSearch");
    },

  }
})
