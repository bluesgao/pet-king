//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        parameter: {
            'type': '0',
            'logoImage': '../../assets/image/logo.png',
            'title': '戏精汪'
        },
        videos: [{
            "title": "你把爸爸1",
            "url": "http://video.pearvideo.com/mp4/adshort/20181117/cont-1477753-13248875_adpkg-ad_hd.mp4",
            "isLike": 0,
            "likeNum": 11,
            "isCollect": 0,
            "collectNum": 12,
            "commentNum": 13,
            "shareNum": 14,
            "user": {
                "name": "gx",
                "avatar": "../../assets/image/default_avatar.jpg"
            }
        }, {
                "title": "你把爸爸1",
                "url": "http://video.pearvideo.com/mp4/adshort/20181117/cont-1477753-13248875_adpkg-ad_hd.mp4",
                "isLike": 0,
                "likeNum": 11,
                "isCollect": 0,
                "collectNum": 12,
                "commentNum": 13,
                "shareNum": 14,
                "user": {
                    "name": "gx",
                    "avatar": "../../assets/image/default_avatar.jpg"
                }
            }, {
                "title": "你把爸爸1",
                "url": "http://video.pearvideo.com/mp4/adshort/20181117/cont-1477753-13248875_adpkg-ad_hd.mp4",
                "isLike": 0,
                "likeNum": 11,
                "isCollect": 0,
                "collectNum": 12,
                "commentNum": 13,
                "shareNum": 14,
                "user": {
                    "name": "gx",
                    "avatar": "../../assets/image/default_avatar.jpg"
                }
            }]
    },
    //事件处理函数
    bindViewTap: function () { },
    onLoad: function () { }
})