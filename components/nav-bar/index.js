var app = getApp();
Component({
    properties: {
        parameter: {
            type: Object,
            value: {
                class: '0'
            },
        }
    },
    data: {
        navbarHeight: ""
    },
    ready: function () {
        this.setClass();
        var pages = getCurrentPages();
    },
    attached: function () {
        //设置导航栏高度
        this.setData({
            navbarHeight: app.globalData.navbarHeight
        });
    },
    methods: {
        return: function () {
            wx.navigateBack();
        },
        doSearch: function () {
            console.info("doSearch...")
            wx.navigateTo({
                url: '/pages/search/index',
            })
        },
        setClass: function () {
            var color = '';
            switch (this.data.parameter.class) {
                case "0":
                case 'on':
                    color = 'on'
                    break;
                case '1':
                case 'black':
                    color = 'black'
                    break;
                case '2':
                case 'gray':
                    color = 'gray'
                    break;
                default:
                    break;
            }
            this.setData({
                'parameter.class': color
            })
        }
    }
})