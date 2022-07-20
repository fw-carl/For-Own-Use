{
    "id": "fengw.app.sub",
    "name": "数据查看器",
    "author": "@fengw",
    "icon": "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png",
    "repo": "",
    "apps": [
        {
            "id": "gqcq-leaf",
            "name": "广汽传祺",
            "keys": [
                "gqcqCookie"
            ],
            "descs_html": [
                " 格式: gqcqCookie = 'token' ",
                " 账号: 换行 或 @ 或 & 分割 ",
                " 抓取: gsp.gacmotor.com 的 header 的 token 值 "
            ],
            "settings": [
                {
                    "id": "gqcqCookie",
                    "name": "CK 列表",
                    "val": "",
                    "type": "textarea",
                    "autoGrow": true,
                    "rows": 8,
                    "desc": ""
                }
            ],
            "author": "",
            "repo": "",
            "script": "",
            "icons": [
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png",
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png"
            ]
        },
        {
            "id": "ksjsb-leaf",
            "name": "快手极速版",
            "keys": [
                "ksjsbWithdrawTime",
                "ksjsbNotify",
                "ksjsbCash",
                "ksjsbCookie"
            ],
            "descs_html": [
                " 格式: ksjsbCookie = 'kuaishou.api_st=abcdefg;did=12345678' ",
                " 账号: @ 分割 ",
                " 抓取: 账号cookie，可全部复制进来或者只复制kuaishou.api_st和did "
            ],
            "settings": [
                {
                    "id": "ksjsbWithdrawTime",
                    "name": "提现时间",
                    "val": "7",
                    "type": "number",
                    "desc": "时间填整数，默认7点"
                },
                {
                    "id": "ksjsbNotify",
                    "name": "通知",
                    "val": "1",
                    "type": "number",
                    "desc": "选填，默认为1。0：不通知，1：提现时间通知，2：每次运行通知"
                },
                {
                    "id": "ksjsbCash",
                    "name": "提现金额",
                    "val": "",
                    "type": "number",
                    "desc": "选填，默认为空。填了就按这个数字固定额度填写，例如固定提2块就填2"
                },
                {
                    "id": "ksjsbCookie",
                    "name": "CK 列表",
                    "val": "",
                    "type": "textarea",
                    "autoGrow": true,
                    "rows": 8,
                    "desc": ""
                }
            ],
            "author": "",
            "repo": "",
            "script": "",
            "icons": [
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png",
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png"
            ]
        },
        {
            "id": "zssq-leaf",
            "name": "追书神器",
            "keys": [
                "zssqCookie"
            ],
            "descs_html": [
                " 格式: zssqCookie = 'token' ",
                " 账号: 换行 或 @ 分割 ",
                " 抓取: *.zhuishushenqi.com 的 url 的 token 值 "
            ],
            "settings": [
                {
                    "id": "zssqCookie",
                    "name": "CK 列表",
                    "val": "",
                    "type": "textarea",
                    "autoGrow": true,
                    "rows": 8,
                    "desc": ""
                }
            ],
            "author": "",
            "repo": "",
            "script": "",
            "icons": [
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png",
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png"
            ]
        },
        {
            "id": "jrttjsb-yml",
            "name": "今日头条极速版",
            "keys": [
                "jrttjsb_data"
            ],
            "descs_html": [
                " 格式: jrttjsb_data = 'cookie' ",
                " 账号: 换行 或 @ 分割 ",
                " 抓取: 完整cookie 或 ck 的 sessionid_ss 值 "
            ],
            "settings": [
                {
                    "id": "变量",
                    "name": "CK 列表",
                    "val": "",
                    "type": "textarea",
                    "autoGrow": true,
                    "rows": 8,
                    "desc": ""
                }
            ],
            "author": "",
            "repo": "",
            "script": "",
            "icons": [
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png",
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png"
            ]
        },
        {
            "id": "xtwly-yml",
            "name": "新天威旅游 wx",
            "keys": [
                "xtwly_data"
            ],
            "descs_html": [
                " 格式: xtwly_data = 'user-login-token' ",
                " 账号: 换行 或 @ 分割 ",
                " 抓取: www.xtwtour.com 的 user-login-token 值 "
            ],
            "settings": [
                {
                    "id": "xtwly_data",
                    "name": "CK 列表",
                    "val": "",
                    "type": "textarea",
                    "autoGrow": true,
                    "rows": 8,
                    "desc": ""
                }
            ],
            "author": "",
            "repo": "",
            "script": "",
            "icons": [
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png",
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png"
            ]
        },
        {
            "id": "tpyqc-yml",
            "name": "太平洋汽车MAX wx",
            "keys": [
                "tpyqcmax_data"
            ],
            "descs_html": [
                " 格式: tpyqcmax_data = 'lottery_xcx_token' ",
                " 账号: 换行 或 @ 分割 ",
                " 抓取: qdact-api.pcauto.com.cn 的 lottery_xcx_token 值 "
            ],
            "settings": [
                {
                    "id": "tpyqcmax_data",
                    "name": "CK 列表",
                    "val": "",
                    "type": "textarea",
                    "autoGrow": true,
                    "rows": 8,
                    "desc": ""
                }
            ],
            "author": "",
            "repo": "",
            "script": "",
            "icons": [
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png",
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png"
            ]
        },
        {
            "id": "lbg-yml",
            "name": "衡水老白干会员俱乐部 wx",
            "keys": [
                "lbg_data"
            ],
            "descs_html": [
                " 格式: lbg_data = ' loginusertokenn' ",
                " 账号: 换行 或 @ 分割 ",
                " 抓取: bwp.67lbg.com 的 header 的 loginusertokenn 值 "
            ],
            "settings": [
                {
                    "id": "lbg_data",
                    "name": "CK 列表",
                    "val": "",
                    "type": "textarea",
                    "autoGrow": true,
                    "rows": 8,
                    "desc": ""
                }
            ],
            "author": "",
            "repo": "",
            "script": "",
            "icons": [
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png",
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png"
            ]
        },
        {
            "id": "jsb-yml",
            "name": "杰士邦 wx",
            "keys": [
                "jsb_data"
            ],
            "descs_html": [
                " 格式: jsb_data = 'access-token' ",
                " 账号: 换行 或 @ 分割 ",
                " 抓取: m.jissbon.com 的 header 的 access-token 值 "
            ],
            "settings": [
                {
                    "id": "jsb_data",
                    "name": "CK 列表",
                    "val": "",
                    "type": "textarea",
                    "autoGrow": true,
                    "rows": 8,
                    "desc": ""
                }
            ],
            "author": "",
            "repo": "",
            "script": "",
            "icons": [
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png",
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png"
            ]
        },
        {
            "id": "xybc-yml",
            "name": "相宜本草 wx",
            "keys": [
                "xybc_data"
            ],
            "descs_html": [
                " 格式: xybc_data = 'ut' ",
                " 账号: 换行 或 @ 分割 ",
                " 抓取: crm.inoherb.com 的 cokkie 的 ut 值 "
            ],
            "settings": [
                {
                    "id": "xybc_data",
                    "name": "CK 列表",
                    "val": "",
                    "type": "textarea",
                    "autoGrow": true,
                    "rows": 8,
                    "desc": ""
                }
            ],
            "author": "",
            "repo": "",
            "script": "",
            "icons": [
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png",
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png"
            ]
        },
        {
            "id": "jyj-yml",
            "name": "劲友家 wx",
            "keys": [
                "jingjiu_data"
            ],
            "descs_html": [
                " 格式: jingjiu_data = 'authorization' ",
                " 账号: 换行 或 @ 分割 ",
                " 抓取: jjw.jingjiu.com 的 authorization 值 "
            ],
            "settings": [
                {
                    "id": "jingjiu_data",
                    "name": "CK 列表",
                    "val": "",
                    "type": "textarea",
                    "autoGrow": true,
                    "rows": 8,
                    "desc": ""
                }
            ],
            "author": "",
            "repo": "",
            "script": "",
            "icons": [
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png",
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png"
            ]
        },
        {
            "id": "ks-leaf",
            "name": "快手",
            "keys": [
                "ksWithdrawTime",
                "ksCookie"
            ],
            "descs_html": [
                " 格式: ksCookie = 'kuaishou.api_st=xxxxxxxxxxxx;did=yyyyyyyyyyy;' ",
                " 账号: 换行 或 @ 或 & 分割 "
            ],
            "settings": [
                {
                    "id": "ksWithdrawTime",
                    "name": "提现时间",
                    "val": "7",
                    "type": "number",
                    "desc": "时间填整数，默认7点"
                },
                {
                    "id": "ksCookie",
                    "name": "CK 列表",
                    "val": "",
                    "type": "textarea",
                    "autoGrow": true,
                    "rows": 8,
                    "desc": ""
                }
            ],
            "author": "",
            "repo": "",
            "script": "",
            "icons": [
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png",
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png"
            ]
        },
        {
            "id": "jrtt-feizao",
            "name": "今日头条apk",
            "keys": [
                "jrttckapp"
            ],
            "descs_html": [
                " 格式: jrttckapp = 'sessionid' ",
                " 账号: @ 分割 ",
                " 抓取: toutiaoapi.com 的 Cookie 的 sessionid 值 "
            ],
            "settings": [
                {
                    "id": "jrttckapp",
                    "name": "CK 列表",
                    "val": "",
                    "type": "textarea",
                    "autoGrow": true,
                    "rows": 8,
                    "desc": ""
                }
            ],
            "author": "",
            "repo": "",
            "script": "",
            "icons": [
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png",
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png"
            ]
        },
        {
            "id": "cy-liuqi",
            "name": "畅意100 wx",
            "keys": [
                "cy100hd"
            ],
            "descs_html": [
                " 格式: cy100hd = 'hd' ",
                " 账号: @ 分割 ",
                " 抓取: 整段hd "
            ],
            "settings": [
                {
                    "id": "cy100hd",
                    "name": "CK 列表",
                    "val": "",
                    "type": "textarea",
                    "autoGrow": true,
                    "rows": 8,
                    "desc": ""
                }
            ],
            "author": "",
            "repo": "",
            "script": "",
            "icons": [
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png",
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png"
            ]
        },
        {
            "id": "zajk-dan",
            "name": "众安健康 wx",
            "keys": [
                "zantk",
                "zantk2",
                "zantk3",
                "zantk4",
                "zantk5",
                "zantk6"
            ],
            "settings": [
                {
                    "id": "zanstatus",
                    "name": "当前账号数",
                    "val": "1",
                    "type": "number",
                    "desc": "想要抓取第几个账号的数据就填几"
                },
                {
                    "id": "zancount",
                    "name": "当前账号总数",
                    "val": "1",
                    "type": "number",
                    "desc": "想要跑几个号就填几"
                }
            ],
            "author": "",
            "repo": "",
            "icons": [
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png",
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png"
            ],
            "script": ""
        },
        {
            "id": "wyyx-dan",
            "name": "网易严选 wx",
            "keys": [
                "wyyxhd",
                "wyyxhd2",
                "wyyxhd3",
                "wyyxhd4",
                "wyyxhd5",
                "wyyxhd6"
            ],
            "settings": [
                {
                    "id": "wyyxstatus",
                    "name": "当前账号数",
                    "val": "1",
                    "type": "number",
                    "desc": "想要抓取第几个账号的数据就填几"
                },
                {
                    "id": "wyyxcount",
                    "name": "当前账号总数",
                    "val": "1",
                    "type": "number",
                    "desc": "想要跑几个号就填几"
                }
            ],
            "author": "",
            "repo": "",
            "icons": [
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png",
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png"
            ],
            "script": ""
        },
        {
            "id": "hhsc-liuqi",
            "name": "行行生才",
            "keys": [
                "hhsc_token"
            ],
            "descs_html": [
                " 格式: hhsc_token = 'authtoken' ",
                " 账号: 换行 或 @ 分割 ",
                " 抓取: hhapi.njzycy.com 的 authtoken 值"
            ],
            "settings": [
                {
                    "id": "hhsc_token",
                    "name": "CK 列表",
                    "val": "",
                    "type": "textarea",
                    "autoGrow": true,
                    "rows": 8,
                    "desc": ""
                }
            ],
            "author": "",
            "repo": "",
            "script": "",
            "icons": [
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png",
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png"
            ]
        },
        {
            "id": "dsmc-dan",
            "name": "都世牧场 wx",
            "keys": [
                "dsmctk",
                "dsmctk2",
                "dsmctk3",
                "dsmctk4",
                "dsmctk5",
                "dsmctk6"
            ],
            "settings": [
                {
                    "id": "dsmcstatus",
                    "name": "当前账号数",
                    "val": "1",
                    "type": "number",
                    "desc": "想要抓取第几个账号的数据就填几"
                },
                {
                    "id": "dsmccount",
                    "name": "当前账号总数",
                    "val": "1",
                    "type": "number",
                    "desc": "想要跑几个号就填几"
                }
            ],
            "author": "",
            "repo": "",
            "icons": [
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png",
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png"
            ],
            "script": ""
        },
        {
            "id": "dygy-linyuan",
            "name": "抖音果园",
            "keys": [
                "ddgyCk"
            ],
            "descs_html": [
                " 格式: ddgyCk = 'xxx' ",
                " 账号: 换行 或 @ 分割 ",
                " 抓取: 进入小程序浇水后抓一个Cookie "
            ],
            "settings": [
                {
                    "id": "ddgyCk",
                    "name": "CK 列表",
                    "val": "",
                    "type": "textarea",
                    "autoGrow": true,
                    "rows": 8,
                    "desc": ""
                }
            ],
            "author": "",
            "repo": "",
            "script": "",
            "icons": [
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png",
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png"
            ]
        },
        {
            "id": "tpyqc-yml",
            "name": "太平洋汽车",
            "keys": [
                "tpyqc_data"
            ],
            "descs_html": [
                " 格式: tpyqc_data = '手机号&密码' ",
                " 账号: 换行 或 @ 分割 "
            ],
            "settings": [
                {
                    "id": "tpyqc_data",
                    "name": "CK 列表",
                    "val": "",
                    "type": "textarea",
                    "autoGrow": true,
                    "rows": 8,
                    "desc": ""
                }
            ],
            "author": "",
            "repo": "",
            "script": "",
            "icons": [
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png",
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png"
            ]
        },
        {
            "id": "hjq-linyuan",
            "name": "和家亲",
            "keys": [
                "hjq"
            ],
            "descs_html": [
                " 格式: hjq = 'appId=xxx&uid=xxx&secret=xxx' ",
                " 账号: 换行 或 @ 分割 "
            ],
            "settings": [
                {
                    "id": "hjq",
                    "name": "CK 列表",
                    "val": "",
                    "type": "textarea",
                    "autoGrow": true,
                    "rows": 8,
                    "desc": ""
                }
            ],
            "author": "",
            "repo": "",
            "script": "",
            "icons": [
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png",
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png"
            ]
        },
        {
            "id": "ttzql-p",
            "name": "天天乐赚钱 wx ",
            "keys": [
                "ttlcookie"
            ],
            "descs_html": [
                " 格式: ttlcookie = 'userid&openid' ",
                " 账号: 换行 或 @ 分割 ",
                " 抓取: https://miniapi.tianwensk.com/miniapp/user/clockin/pay/5 的 openid ",
                "       https://miniapi.tianwensk.com 的 userid 值 "
            ],
            "settings": [
                {
                    "id": "ttlcookie",
                    "name": "CK 列表",
                    "val": "",
                    "type": "textarea",
                    "autoGrow": true,
                    "rows": 8,
                    "desc": ""
                }
            ],
            "author": "",
            "repo": "",
            "script": "",
            "icons": [
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png",
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png"
            ]
        },
        {
            "id": "xjjlb-luobo",
            "name": "湘窖俱乐部 wx",
            "keys": [
                "xjjlbtoken"
            ],
            "descs_html": [
                " 格式: xjjlbtoken = 'account=xxxxxxx&openId=xxxxxx' ",
                " 账号: @ 分割 ",
                " 抓取: club.xiangjiaojiuye.com 的 json文件 "
            ],
            "settings": [
                {
                    "id": "xjjlbtoken",
                    "name": "CK 列表",
                    "val": "",
                    "type": "textarea",
                    "autoGrow": true,
                    "rows": 8,
                    "desc": ""
                }
            ],
            "author": "",
            "repo": "",
            "script": "",
            "icons": [
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png",
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png"
            ]
        },
        {
            "id": "tclx-linyuan",
            "name": "同程旅行 wx",
            "keys": [
                "tczs"
            ],
            "descs_html": [
                " 格式: tczs = '' ",
                " 账号: 换行 或 @ 分割 "
            ],
            "settings": [
                {
                    "id": "tczs",
                    "name": "CK 列表",
                    "val": "",
                    "type": "textarea",
                    "autoGrow": true,
                    "rows": 8,
                    "desc": ""
                }
            ],
            "author": "",
            "repo": "",
            "script": "",
            "icons": [
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png",
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png"
            ]
        },
        {
            "id": "mt-liuqi",
            "name": "萌推 wx",
            "keys": [
                "mt_token"
            ],
            "descs_html": [
                " 格式: mt_token = 'X-Token' ",
                " 账号: @ 分割 ",
                " 抓取: api.mengtuiapp.com 的 header 的 X-Token 值 "
            ],
            "settings": [
                {
                    "id": "mt_token",
                    "name": "CK 列表",
                    "val": "",
                    "type": "textarea",
                    "autoGrow": true,
                    "rows": 8,
                    "desc": ""
                }
            ],
            "author": "",
            "repo": "",
            "script": "",
            "icons": [
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png",
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png"
            ]
        },
        {
            "id": "hhyd-leaf",
            "name": "花花阅读",
            "keys": [
                "hhydCookie"
            ],
            "descs_html": [
                " 格式: hhydCookie= 'un=*****&token=*****' ",
                " 账号: 换行 分割 ",
                " 抓取: u.wyexin.cn 的 body 的 un 和 token 值 "
            ],
            "settings": [
                {
                    "id": "hhydCookie",
                    "name": "CK 列表",
                    "val": "",
                    "type": "textarea",
                    "autoGrow": true,
                    "rows": 8,
                    "desc": ""
                }
            ],
            "author": "",
            "repo": "",
            "script": "",
            "icons": [
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png",
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png"
            ]
        },
        {
            "id": "ddgy-leaf",
            "name": "滴滴果园",
            "keys": [
                "ddgyToken"
            ],
            "descs_html": [
                " 格式: ddgyToken= 'uid&token' ",
                " 账号: 换行 或 @ 分割 ",
                " 抓取: game.xiaojukeji.com 的 body 的 uid 和 token 值 ",
                "        uid 可以不填"
            ],
            "settings": [
                {
                    "id": "ddgyToken",
                    "name": "CK 列表",
                    "val": "",
                    "type": "textarea",
                    "autoGrow": true,
                    "rows": 8,
                    "desc": ""
                }
            ],
            "author": "",
            "repo": "",
            "script": "",
            "icons": [
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png",
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png"
            ]
        },
        {
            "id": "meituan-leaf",
            "name": "美团",
            "keys": [
                "meituanCookie"
            ],
            "descs_html": [
                " 格式: meituanCookie= 'userId=*****&token=*****' ",
                " 账号: 换行 或 @ 分割 ",
                " 抓取: *.meituan.com 的 userId 和 token 值 ",
                "       userId 选填，为了区分账号"
            ],
            "settings": [
                {
                    "id": "meituanCookie",
                    "name": "CK 列表",
                    "val": "",
                    "type": "textarea",
                    "autoGrow": true,
                    "rows": 8,
                    "desc": ""
                }
            ],
            "author": "",
            "repo": "",
            "script": "",
            "icons": [
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png",
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png"
            ]
        },
        {
            "id": "elm-leaf",
            "name": "饿了么",
            "keys": [
                "elmOrderFlag",
                "elmOrderTime",
                "elmNotify",
                "elmCookie"
            ],
            "descs_html": [
                " 格式: elmCookie = 'cookie' ",
                " 账号: 换行 或 @ 或 & 分割 ",
                " 抓取: 账号cookie，全部复制进来 "
            ],
            "settings": [
                {
                    "id": "elmOrderFlag",
                    "name": "抢券开关",
                    "val": " ",
                    "type": "number",
                    "desc": "可选，抢券开关，每个账号独立，多账号用&隔开。例如 0&1&0 为账号2抢券，账号1和3不抢。不填的话默认不抢"
                },
                {
                    "id": "elmOrderTime",
                    "name": "抢券时间",
                    "val": " ",
                    "type": "number",
                    "desc": "可选，抢券时间，格式 9:59:59:850 (时:分:秒:毫秒)，默认时间为9:59:59:850开始抢，连续抢半秒左右"
                },
                {
                    "id": "elmNotify",
                    "name": "通知",
                    "val": " ",
                    "type": "number",
                    "desc": "可选，通知开关，默认为2；0：只有CK失效时候会推送；1：CK失效或者抢到10元券才会推送；2：正常推送"
                },
                {
                    "id": "elmCookie",
                    "name": "CK 列表",
                    "val": "",
                    "type": "textarea",
                    "autoGrow": true,
                    "rows": 8,
                    "desc": ""
                }
            ],
            "author": "",
            "repo": "",
            "script": "",
            "icons": [
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png",
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png"
            ]
        },
        {
            "id": "jzyl-leaf",
            "name": "健走有礼 wx",
            "keys": [
                "jzylCookie"
            ],
            "descs_html": [
                " 格式: jzylCookie = 'token' ",
                " 账号: 换行 或 @ 分割 ",
                " 抓取: bwa.feierlaiedu.com 的 header 的 token 值 "
            ],
            "settings": [
                {
                    "id": "jzylCookie",
                    "name": "CK 列表",
                    "val": "",
                    "type": "textarea",
                    "autoGrow": true,
                    "rows": 8,
                    "desc": ""
                }
            ],
            "author": "",
            "repo": "",
            "script": "",
            "icons": [
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png",
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png"
            ]
        },
        {
            "id": "qmmh-p",
            "name": "全面漫画",
            "keys": [
                "mhcookie"
            ],
            "descs_html": [
                " 说明: ios 全面漫画 apk 全免漫画",
                " 格式: mhcookie = 'access-token' ",
                " 账号: 换行 分割 ",
                " 抓取: task.3456mh.com 的 access-token 值 "
            ],
            "settings": [
                {
                    "id": "mhcookie",
                    "name": "CK 列表",
                    "val": "",
                    "type": "textarea",
                    "autoGrow": true,
                    "rows": 8,
                    "desc": ""
                }
            ],
            "author": "",
            "repo": "",
            "script": "",
            "icons": [
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png",
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png"
            ]
        },
        {
            "id": "pddgy-liuqi",
            "name": "拼多多果园 wx",
            "keys": [
                "pddck"
            ],
            "descs_html": [
                " 格式: pddck = 'pdduid&accesstoken#tubetoken' ",
                " 账号: @ 分割 ",
                " 抓取:mobile.yangkeduo.com  "
            ],
            "settings": [
                {
                    "id": "pddck",
                    "name": "CK 列表",
                    "val": "",
                    "type": "textarea",
                    "autoGrow": true,
                    "rows": 8,
                    "desc": "pddck"
                }
            ],
            "author": "",
            "repo": "",
            "script": "",
            "icons": [
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png",
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png"
            ]
        },
        {
            "id": "zlz-p",
            "name": "走路赚 wx",
            "keys": [
                "zlcookie"
            ],
            "descs_html": [
                " 格式: zlcookie = 'token' ",
                " 账号: 换行 分割 ",
                " 抓取: oto.yunw2.cn 链接的 token 值 "
            ],
            "settings": [
                {
                    "id": "zlcookie",
                    "name": "CK 列表",
                    "val": "",
                    "type": "textarea",
                    "autoGrow": true,
                    "rows": 8,
                    "desc": ""
                }
            ],
            "author": "",
            "repo": "",
            "script": "",
            "icons": [
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png",
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png"
            ]
        },
        {
            "id": "hezj-leaf",
            "name": "海尔智家",
            "keys": [
                "haierAccount"
            ],
            "descs_html": [
                " 格式: haierAccount= 'token#clientId' ",
                " 账号: 换行 或 @ 分割 ",
                " 抓取: mps.haiersmarthomes.com 的 token 和 clientId 值 "
            ],
            "settings": [
                {
                    "id": "haierAccount",
                    "name": "CK 列表",
                    "val": "",
                    "type": "textarea",
                    "autoGrow": true,
                    "rows": 8,
                    "desc": ""
                }
            ],
            "author": "",
            "repo": "",
            "script": "",
            "icons": [
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png",
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png"
            ]
        },
        {
            "id": "zdsd-p",
            "name": "赚点是点 zfb",
            "keys": [
                "zdcookie"
            ],
            "descs_html": [
                " 格式: zdcookie = 'token#userid' ",
                " 账号: @ 分割 ",
                " 抓取: https://json.dd-gz.com/ 链接中的 token 和 userid 值 "
            ],
            "settings": [
                {
                    "id": "zdcookie",
                    "name": "CK 列表",
                    "val": "",
                    "type": "textarea",
                    "autoGrow": true,
                    "rows": 8,
                    "desc": ""
                }
            ],
            "author": "",
            "repo": "",
            "script": "",
            "icons": [
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png",
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png"
            ]
        },
        {
            "id": "zyzr-p",
            "name": "自由之刃",
            "keys": [
                "zycookie",
                "zysigncookie"
            ],
            "descs_html": [
                " 格式: zycookie = '手机号#密码' ",
                " 格式: zysigncookie = '&eu-stamp=*****&eu-sign=*****'",
                " 账号:@ 分割 "
            ],
            "settings": [
                {
                    "id": "zycookie",
                    "name": "zycookie",
                    "val": "",
                    "type": "textarea",
                    "autoGrow": true,
                    "rows": 8,
                    "desc": ""
                },
                {
                    "id": "zysigncookie",
                    "name": "zysigncookie",
                    "val": "",
                    "type": "textarea",
                    "autoGrow": true,
                    "rows": 8,
                    "desc": ""
                }
            ],
            "author": "",
            "repo": "",
            "script": "",
            "icons": [
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png",
                "https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/loon-icon/loon.png"
            ]
        }
    ]
}