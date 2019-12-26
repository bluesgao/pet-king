
// 本组件为搜索组件
Component({

    properties: {
        content: {//搜索内容
            type: String,
            value: '搜索内容'
        },
        flag: {//是否显示clear按钮
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
        focus() {
            console.info("获得焦点");
            this.setData({
                flag: true,
            })
        },
        //失去焦点
        blur() {
            console.info('失去焦点')
        },
        //搜索输入
        input(e) {
            console.info('搜索输入',e)
            this.setData({
                content: e.detail.value,
            })
            console.info('搜索输入 content', this.data.content)
            this.triggerEvent("searchList", e);
        },
        //查询
        confirm(e) {
            console.info('查询', e)
            this.triggerEvent("endsearchList");
        },
        //清空搜索框
        clear(e) {
            console.info("清空搜索框",e);
            this.triggerEvent("clearSearch");
        },
        // 取消
        // cancel() {
        //     console.info("取消", e);
        //     this.setData({
        //         flag: false,
        //     })
        //     this.triggerEvent("cancelSearch");
        // }
    }
})
