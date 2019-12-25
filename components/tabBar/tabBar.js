const app = getApp();
Component({
    data: {
        selected: 0,
        color: "#7A7E83",
        selectedColor: "#3cc51f",
        list: [{
            pagePath: "/pages/home/home",
            iconPath: "/assets/image/tab_home_normal.png",
            selectedIconPath: "/assets/image/tab_home.png",
            text: "首页",
            isSpecial: false
        }, {
            pagePath: "/pages/post/post",
            iconPath: "/assets/image/icon_release.png",
            selectedIconPath: "/assets/image/icon_release.png",
            text: "",
            isSpecial: true
        }, {
                pagePath: "/pages/user/user",
                iconPath: "/assets/image/tab_profile_normal.png",
                selectedIconPath: "/assets/image/tab_profile.png",
            text: "我的",
            isSpecial: false
        }],
        //适配IphoneX的屏幕底部横线
        isIphoneX: app.globalData.isIphoneX
    },
    attached() {},
    methods: {
        switchTab(e) {
            const dataset = e.currentTarget.dataset
            const path = dataset.path
            const index = dataset.index
            //如果是特殊跳转界面
            if (this.data.list[index].isSpecial) {
                wx.navigateTo({
                    url: path
                })
            } else {
                //正常的tabbar切换界面
                wx.switchTab({
                    url: path
                })
                this.setData({
                    selected: index
                })
            }
        }
    }
})